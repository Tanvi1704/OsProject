import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    "name":String,
    "_id":String
});
const postMessage=mongoose.model('postMessage',postSchema);
export default postMessage;
