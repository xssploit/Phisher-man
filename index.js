const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path  = require("path");


app.use(express.static("pages"));

app.get('/google',(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","google.html"));
})

server.listen(80,()=>{
    console.log(`Server running on port 80`);
})