import express from 'express';

// import { getPosts,createPost} from '../controllers/posts.js'


const router =express.Router();

//http://localhost:5069/posts

router.get('/',(req,res) =>{
    res.send('THIS WORKS!');
});

// router.get('/', getPosts);
// router.get('/', createPost);

export default router;