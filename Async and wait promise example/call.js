const http = new HttpClient();

http.get("https://jsonplaceholder.typicode.com/users/2")
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err));


const json = {
    name: "Sagar Poudel",
    username: "ragas",
    email: "sagar@april.biz"
}

http.post("https://jsonplaceholder.typicode.com/users", json).then(res => console.log(res))
    .catch(err => console.log(err));


const update_json = {
    name: "Sagar Poudel",
    username: "ragas",
    email: "sagar@gmail.com"
}

// http.put("https://jsonplaceholder.typicode.com/users/11", update_json)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));


http.delete("https://jsonplaceholder.typicode.com/users/1")
    .then(res => console.log(res))
    .catch(err => console.log(err));