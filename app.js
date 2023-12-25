const express = require('express')
const path =require('node:path')
const ejs =require('ejs')
const app =express()

//?Template Engine
app.set("view engine", "ejs")

//? Mıddlewares
app.use(express.static('public'))

//?Route
app.get("/" , (req,res) => {
    res.render('index')
})
app.get("/about" , (req,res) => {
    res.render('about')
})
app.get("/add" , (req,res) => {
    res.render('add')
})

const port =3000
app.listen(port,() =>{console.log(`sunucu ${port} portunda başlatıldı`);})