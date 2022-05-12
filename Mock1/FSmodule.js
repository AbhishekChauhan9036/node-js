const fs=require('fs');

fs.mkdir('abhi',(eror)=>{
    console.log("folder created");
});


fs.writeFile("./Abhi/bio.txt","my name is Abhishek Chauhan",(err)=>{
    console.log("File Created");
});


fs.appendFile("./Abhi/bio.txt","Current time I'm persuing BCA",(err)=>{
    console.log("Append File");
});


fs.readFile("./Abhi/Bio.txt","utf-8",(err,data)=>{
    console.log(data);
});


fs.rename("./Abhi/bio.txt","./Abhi/MyBio.txt",(err)=>{
    console.log("Reanme Done");
})


fs.unlink("./Abhi/Mybio.txt",(err)=>{
    console.log("File Deleted");
});

fs.rmdir("./Abhi",(err)=>{
    console.log("Folder Deleted");
});









