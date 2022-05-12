const express=require('express');

const app=express();

const port=300;

app.get('/',(request,response)=>{
    response.send("Namaste Express Application");
});


app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})