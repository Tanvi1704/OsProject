import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

//import MongoClient from 'mongodb'
//import mongo  from 'mongodb'
const app =express();


// var MongoClient = mongo.MongoClient;

app.use('/posts',postRoutes);
app.use(bodyParser.json({ limi:"30mb",extended:true}));
app.use(bodyParser.urlencoded({ limi:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL ='mongodb+srv://tanvi_agrawal_project:tanviagrawal17042003@cluster0.mqtiaoq.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 7000;
mongoose.set('strictQuery',false);
mongoose.connect(CONNECTION_URL,
     {useNewUrlParser: true, useUnifiedTopology:true })
     .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)) )
     .catch((error) =>  console.log(error.message));     

// const url= 'mongodb://localhost:7000';
//const databaseName='os'

// async function getData()
// {
//     let result = await MongoClient.connect(url);
//     db= result.db(databaseName);
//     collection = db.collection('peterson');
//     let data = await collection.find({}).toArray();
//     console.log(data)


// } 

// getData();

// import dbConnect from "./mongodb";

// dbConnect().then((resp)=>{
// resp.find({name:'nord'}).toArray().then((data)=>{
// console.log(data)
// })
// })

// const main=async ()=>{
//    let data = await dbConnect();
//    data = await data.find({name:'nord'}).toArray();
//    console.log(data)
// }

// main()

// const mysql= require("mysql");

// const con= mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"",
//   database:"test"
// });

// // con.connect((err)=>{
// //   if(err)
// //   {
// //     console.warn("not connect")
// //   }else{
// //     console.warn("connected!!!")
// //   }
// // })

// con.query("select * from users",(err,result)=>{
//   if(err)
//   {
//     console.warn("some error")
//   }
//   else{
//     console.warn(result)
//   }
// })