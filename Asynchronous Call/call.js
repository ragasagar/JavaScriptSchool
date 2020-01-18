function  ExtHttp(){
    this.http = new XMLHttpRequest();
}


ExtHttp.prototype.get= function (url){
    this.http.open('GET',url,true);
    self = this;

    self.http.onload = function(){
        if(self.status === "200"){
            console.log(self.http.responseText);
        }
    }

    self.http.send();

}