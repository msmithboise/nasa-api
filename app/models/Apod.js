export default class Apod{
    constructor(reqData){
        this.date = reqData.date
        this.copyright = reqData.copyright
        this.explanation = reqData.explanation
        this.photo = reqData.url
    }
}