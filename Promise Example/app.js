
function HttpClient(){
    this.http = new XMLHttpRequest();
}

HttpClient.prototype.get = function(URL){
    this.http.open("GET", URL, true);
    self = this;
    return new Promise(function(response, error){

        self.http.onload = function(){
            if(self.http.status === 200){
                response(self.http.response);
            }
            else{
                error("Error:"+ self.http.status);
            }
        }

        self.http.send();
    });    
}
const http = new HttpClient();

http.get("https://jsonplaceholder.typicode.com/posts/1")
.then(
//     function (response){
//     console.log(response)
// }

getResponse)
.catch(
    // function(err){
//     console.log(err);
// }
getError);


function getResponse(response){
    output = '';
    for(let a of response){
        output += `<li> ${a.userId} </li>`
    }

    document.body.innerHTML = output;
}

function getError(err){
    output = `<h1> ${err} </h1>`;
    document.body.innerHTML = output; 
}