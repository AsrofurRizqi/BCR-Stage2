const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)

// function avaible(a){
//     return a.available == false;
// }
// function year(a){
//     return a.year > 2021;
// }

const app = new App();
app.init()
function reinit(){
    app.init();
}




