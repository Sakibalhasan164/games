const express=require("express")
const port=800;

const app=express()

app.get("/",(req,res)=>{

// res.sendFile("./views/flappy bird.html",{root:__dirname})
// // res.sendFile("./views/flappy bird.js",{root:__dirname})
// // res.sendFile("./views/bird.js",{root:__dirname})
// // res.sendFile("./views/pipes.js",{root:__dirname})
// // res.sendFile("./views/clouds.js",{root:__dirname})

})



app.listen(port)
console.log(`server is listening on port ${port}`);