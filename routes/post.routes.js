const express = require("express");
const postRouter = express.Router()
// const { PostModel }= require("./models/post.model");
const {PostModel} = require("../models/post.model")



postRouter.get("/get_data", async(req,res)=>{
    
     try {

        const getData = await PostModel.find();
         res.send(getData)

        
     } catch (error) {
        res.send({"msg":error.message})
     }



})

postRouter.post("/add_data", async(req,res)=>{

    console.log(req.body)
       try {
         const addData = new PostModel(req.body);
          await addData.save()
          res.send({"msg":"Data has been added",addData})
       } catch (error) {
        
          res.send({"msg":error.message})
       }
    
})


postRouter.delete("/delete_data/:id", async(req,res)=>{

     const id=req.params.id;
   

    try {
        await PostModel.findByIdAndDelete({_id:id})
        res.send("data has been deleted")
        
    } catch (error) {
        
        res.send({"msg":error.message})
    }

    
})


postRouter.get("/filter_data", async(req,res)=>{

    const {destination}=req.query;

   try {
       const filterData = PostModel.find({destination:destination})
       res.send(filterData)
       
   } catch (error) {
       
       res.send({"msg":error.message})
   }

   
})

postRouter.get("/sort_data", async(req,res)=>{

    const {sort}=req.query;

   try {
       const sortData = PostModel.find.sort(sort)
       res.send(sortData)
       
   } catch (error) {
       
       res.send({"msg":error.message})
   }

   
})





module.exports = {postRouter}