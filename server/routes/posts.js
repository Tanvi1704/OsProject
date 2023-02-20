import express from 'express';
import peterson from '../postMessage.js';
import postMessage from '../postMessage.js';


const router =express.Router();

//http://localhost:5069/posts

router.get('/',async(req,resp) =>{
    
    try {
        const postMessages=await peterson.find();
        resp.status(200).json(postMessages);
        return;
    } catch (error) {
        resp.status(404).json({message:error.message})
        return;
        
    }
})

const createPosts=async(req,resp) =>{
    const post=req.body;
    //const newPost=new postMessage(post);
    try {
        await post.save();
        resp.status(201).json(post);
        console.log(resp);
        console.log(post);
        return;
    } catch (error) {
        resp.status(409).json({message:error.message})
        return;
        
    }
}

router.post('/',createPosts)

// router.get('/', getPosts);
// router.get('/', createPost);

export default router;