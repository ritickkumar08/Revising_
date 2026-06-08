import express from 'express'
const app = new express()
const PORT = 8080;

app.get('/', (req, res)=>{
    res.send("hello I am get")
})

app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`);
})