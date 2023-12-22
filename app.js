const express = require('express')
const path =require('node:path')
const app =express()
app.use(express.static('public'))

const port =3000


app.get("/" , (req,res) => {
    res.sendFile(path.resolve(__dirname,'temp/index.html'))
})

app.listen(port,() =>{console.log(`sunucu ${port} portunda başlatıldı`);})