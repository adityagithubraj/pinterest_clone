const express =require("express");
const cors = require("cors");
const connection = require("./config/db")
const{userRouter} = require("./routers/auth")




const app = express();
app.use(express.json());
app.use(cors());

require("dotenv").config();

const PORT =process.env.PORT || 2000;

app.get("/",(req,res)=>{
res.json("hello")
})

app.use(userRouter)



app.listen(PORT,()=>{
    try {
        connection
        console.log("conected to DB");
    } catch (error) {
        console.log("error on DB");
    }
    console.log(`serveris runig on port  ${PORT}`)
})