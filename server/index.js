import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app =express();

app.use('/posts',postRoutes);

app.use(bodyParser.json({ limi:"30mb",extended:true}));
app.use(bodyParser.urlencoded({ limi:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL ='mongodb+srv://tanvi_agrawal_project:tanviagrawal17042003@cluster0.mqtiaoq.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5069 ;
mongoose.set('strictQuery',false);
mongoose.connect(CONNECTION_URL,
     {useNewUrlParser: true, useUnifiedTopology:true })
     .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)) )
     .catch((error) =>  console.log(error.message));     