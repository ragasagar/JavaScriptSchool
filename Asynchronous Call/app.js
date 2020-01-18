function extHttp(){
    this.http = new XMLHttpRequest();

    this.get = function(url, callback){
        this.http.open('GET',url,true);
    self = this;
    self.http.onload = function(){
        if(self.http.status === 200){
           callback(null ,self.http.responseText);
        }
        else{
            callback("erro:"+ self.http.status)
        }
    }
    self.http.send();
    }

}
const ext = new extHttp(); 

 ext.get("https://jsonplaceholder.typicode.com/posts", function(err, response){
     if(err){
         console.log(err);
     }
     else{
         console.log(response);
     }
 });
