class Data {
    constructor(public method: string, public uri: string, public version: string, public message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    public response: undefined = undefined;
    public fulfilled: boolean = false;

}

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);
