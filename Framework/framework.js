module.exports = class Router {
    constructor() {
        this.endpoints = {}
    }

    request(method= "GET", path, handler){
        if(!this.endpoints[path]){
            this.endpoints[path] = {

            }
        }
        const endpoint = this.endpoints[path]

        if(endpoint[method]){
            throw new Error(`[${method}] по адресу ${path} уже существует`)
        }

        endpoint[method] = handler

    }
    get(path,handler){
        this.request("GET", path, handler)
    }
    POST(path,handler){
        this.request("POST", path, handler)
    }
    PUT(path,handler){
        this.request("PUT", path, handler)
    }
    DELETE(path,handler){
        this.request("DELETE", path, handler)
    }
}