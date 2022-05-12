const http=require('http');

const hostname="127.0.0.1";

const port=3000;
const server=http.createServer((request,responce)=>{
    responce.end("Namase Node Server");
});

server.listen(port,hostname,()=>{
    console.log(`server running http://${hostname}:${port}`);
});