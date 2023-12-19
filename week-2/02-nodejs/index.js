const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, ()=>{
console.log("hello server is listening.")
});

app.get("/", (request, response)=>{
    response.send('<h1>Hello</h1>');
})

app.post('/', (request, response)=>{
    let a = request.body
    if(a["main"] == "true")
    {
        response.status(200).send('Yes it is working!');
    }
   
})