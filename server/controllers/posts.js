import bodyParser from 'body-parser';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(PostMessages);
    } catch (error) {
       res.status(404).json( {message: error.message })
    }
 }

 export const createPost = async (req, res) => {
    console.log (" in the create post");
     const post = req.body;
     const newPost = new PostMessage(post);
     try{
        await newPost.save();
        res.status(201).json(newPost);
     } catch {
        res.status(409).json({ message: error.message })
     } 
    
 }