import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    "name":String
});
const peterson=mongoose.model('peterson',postSchema);
export default peterson;
