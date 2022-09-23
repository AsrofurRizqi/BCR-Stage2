class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");

    this.driver;
    this.penumpang;
    this.tanggal;
    this.waktu;

    this.loadButton = document.getElementById("load-mobil");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init(filter) {

    // Register click listener
    // this.clearButton.onclick = this.clear;

    this.loadButton.onclick = () => {
      const driver = document.getElementById("input-driver").value == 'true';
      const penumpang = document.getElementById("input-penumpang").value;
      const tanggal = document.getElementById("input-tanggal").value;
      const waktu = document.getElementById("input-waktu").value;

      this.driver = driver;
      this.penumpang = parseInt(penumpang);
      this.tanggal = tanggal;
      this.waktu = waktu

      this.load()
    }
  }

  run = () => {
    
    if(Car.list.length > 0){
      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.className = "col-md-4";
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      });
    }else {
       const warn = document.createElement("div");
       warn.className = "col-md-12";
       warn.innerHTML = `<div class="card mx-auto" style="width: 18rem;background-color: #ffa1a1">
       <div class="card-body">
         <h5 class="card-title text-center my-auto">Mobil Tidak Tersedia</h5>
       </div>
     </div>`;
       this.carContainerElement.appendChild(warn);
    }

  };

  //load data cars from json
  async load() {
    let combineDate = new Date(`${this.tanggal} ${this.waktu}`);
    let cars;
    if (isNaN(this.penumpang)) {
      cars = await Binar.listCars((a) =>  a.available === this.driver && a.availableAt > combineDate );
    } else {
      cars = await Binar.listCars((a) =>  a.available === this.driver && a.capacity == this.penumpang && a.availableAt > combineDate );
    }  

    Car.init(cars);
    this.clear();
    this.run();
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
