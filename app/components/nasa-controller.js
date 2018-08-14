import NasaService from "./nasa-service.js"

const nasaService = new NasaService
let app = document.getElementById('app')

function draw(data){
    console.log(data)
    app.innerHTML =
    `
    <div id="error"></div>
    <button onclick='app.controllers.nasa.getArticle()'>
    Get Articles
    </button>
    <div id="article"></div>
    `
}

function drawError(error){
    console.log(error)
    document.getElementById('error').innerHTML = error.message
}


export default class NasaController{
    constructor() {
        console.log("hello from NasaController")
        draw()
    }
getArticle() {
    nasaService.getArticle(draw, drawError)
}

}