class HttpClient{

    async get(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async post(url, data){
        const request = await fetch(url,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const response = await request.json();
        return response;
    }

    async put(url, data){
        const request = await fetch(url,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const response = await request.json();
        console.log("Hello");
        return response;
    }

    async delete(url){
        const request = await fetch(url, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        });
        const response = await "Record is deleted";
        return response;
    }
}