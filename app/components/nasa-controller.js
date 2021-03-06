import NasaService from "./nasa-service.js"
import Apod from "../models/Apod.js";

const nasaService = new NasaService
let app = document.getElementById('app')

function draw(data) {
    console.log(data)
    app.innerHTML =
        `
    <div id="error"></div>
    <button onclick='app.controllers.nasa.getData()'>
    Get Articles
    </button>
    <div id="article"></div>
    `
}

function drawError(error) {
    console.log(error)
    document.getElementById('error').innerHTML = error.message
}

function drawArticles(data) {
    console.log(data)
    let articlesElem = document.getElementById("article")
    let template =

        `
        <div class="container-fluid">
        ${data.date}
        
        <img src="${data.photo}">
        
        <div class="row"><p>
        ${data.explanation}
        </p></div>
        


        </div>
        `

    articlesElem.innerHTML = template
}


export default class NasaController {
    constructor() {
        console.log("hello from NasaController")
        draw()
    }
    getData() {
        nasaService.getData(drawArticles, drawError)
    }

}