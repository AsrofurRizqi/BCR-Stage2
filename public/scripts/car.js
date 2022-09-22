class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    const harga = this.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `
    <div class="card mt-4 shadow-sm" style="padding: 20px;border-radius: 8px">
      <img src="${this.image}" class="card-img-top mx-auto" alt="${this.manufacture}" style="width: 270px;height: 160px">
      <div class="card-body p-0 mt-3">
        <h6 class="card-title">${this.model} / ${this.manufacture}</h6>
        <a class="text-weight-bold" style="text-decoration: none;color: black;font-size: 16px;font-weight: 700">Rp ${harga} / hari</a>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a>${this.capacity} orang</a>
        <a>${this.transmission}</a>
        <a>Tahun ${this.year}</a>
      </div>
      <div class="card-footer d-grid p-0" style="border-top: none">
        <a href="#" class="btn btn-success btn-block" type="button" style="background-color: #5CB85F;border-color: #5CB85F">Pilih Mobil</a>
      </div>
    </div>
    `;
  }
}
