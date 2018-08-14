import Apod from "../models/Apod.js"

export default class NasaService {
constructor(){
    console.log("Hello from NasaService")

}

getArticle(draw, drawError) {
    console.log("hello from NasaService")
    fetch('https://api.nasa.gov/planetary/apod?api_key=Trq8EGLRbZZWwRVqYUNWkinr4ulR2Ajlgh5qRPoV')
    .then(res => res.json())
    .then(res => draw(new Apod(res)))
    .catch(drawError)
}


}

