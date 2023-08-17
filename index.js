const  express = require("express");
const { connection } = require("./config/db");
const { postRouter } = require("./routes/post.routes")
const cors = require("cors")






const app = express();

app.get("/",async(req,res)=>{
      
        try {

            res.send("Welcome to trip planner")
            
        } catch (error) {
            console.log(error)
        }
})

app.use(express.json())
app.use(cors())

app.use("/api",postRouter)



app.listen(process.env.PORT, async(req,res)=>{

        try {
            await connection
            console.log("Connected to database")
        } catch (error) {
            console.log(error)
        }

        console.log("Server is running on PORT 4500")
})