class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    this.driver = document.getElementById("input-driver").value;
    this.penumpang = document.getElementById("input-penumpang").value;
    this.tanggal = document.getElementById("input-tanggal");
    this.waktu = document.getElementById("input-waktu");
    this.loadButton = document.getElementById("load-mobil");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init(filter) {
    await this.load(filter);

    // Register click listener
    // this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    this.clear();
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
    let combineDate = new Date(`${this.tanggal.value} ${this.waktu.value}`);
    let boolOutput = (this.driver === "true");
    const cars = await Binar.listCars((a)=>{return a.available === boolOutput && a.capacity == this.penumpang && new Date(a.availableAt) > combineDate});
    console.log(cars)
    console.log(typeof(boolOutput))
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
