import express from 'express'
const app = new express();
import mongoose from 'mongoose'
const PORT = 8080

mongoose.connect('/mongodg://127.0.0.1:27017/test')
.then(()=>{console.log('connected')})
.catch(()=>{console.log('not connected')})


app.get('/', (req, res)=>{
    res.send('hello I am the root route')
})


app.listen(PORT, ()=>{
    console.log(`the port is running on port ${PORT}`);
})