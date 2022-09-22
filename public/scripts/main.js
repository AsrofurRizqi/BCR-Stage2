/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
console.log(params);
function year(a){
    return a.year > 2020 && a.available == true;
}
/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.init(year).then(app.run);
