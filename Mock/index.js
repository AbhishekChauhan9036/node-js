const express=require('express')
const index=express()
const port=3000

index.get('/',(req,res)=>{
    res.send('Hello World');
})


index.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})