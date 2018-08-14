import NasaController from './components/nasa-controller.js'

class App {
    constructor() {
        console.log("hello from main")
        this.controllers = {
            nasa: new NasaController
        }
    }
}

const app = new App()
window.app = app