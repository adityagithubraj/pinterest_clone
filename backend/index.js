// const express =require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

// const connection = require("./config/db")



// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');


// const uploadFolder = 'uploads/';
// const upload = multer({ dest: uploadFolder });


// // const{userRouter} = require("./routers/auth")
// // const{postRouter} = require("./routers/post.routes")





// const app = express();
// app.use(cookieParser())
// app.use(express.json());
// app.use(cors());

// require("dotenv").config();

// const PORT =process.env.PORT || 2000;

// app.get("/post",(req,res)=>{
// res.json("hello")
// })

// //.......................//


// // Ensure the upload folder exists
// // if (!fs.existsSync(uploadFolder)){
// //     fs.mkdirSync(uploadFolder);
// // }

// app.post('/upload', upload.array('file', 100), (req, res) => {
//     console.log("upload api is call")
//     const startTime = process.hrtime();
//     // Processing files here (e.g., saving metadata to database)
//     // Simulate processing time
//     setTimeout(() => {
//         const endTime = process.hrtime(startTime);
//         const processingTimeInSeconds = endTime[0] + endTime[1] / 1e9;
//         console.log(Processing time: ${processingTimeInSeconds} seconds);
//         res.send({ message: Uploaded ${req.files.length} files, processingTime: ${processingTimeInSeconds} seconds });
//     }, 1000); // Simulating a 1-second processing time for the sake of example
// });




// // app.use(userRouter)
// // app.use(postRouter )



// app.listen(PORT,()=>{
//     try {
//         connection
//         console.log("conected to DB");
//     } catch (error) {
//         console.log("error on DB");
//     }
//     console.log(`serveris runig on port  ${PORT}`)
// })


const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; // Port number for the server

// Upload folder setup
const uploadFolder = 'uploads/';
const upload = multer({ dest: uploadFolder });

// Ensure the upload folder exists
if (!fs.existsSync(uploadFolder)){
    fs.mkdirSync(uploadFolder);
}


app.post('/upload', upload.array('file', 100), (req, res) => {
    console.log("upload api is called");
    const startTime = process.hrtime();
   
    setTimeout(() => {
        const endTime = process.hrtime(startTime);
        const processingTimeInSeconds = endTime[0] + endTime[1] / 1e9;
        console.log(`Processing time: ${processingTimeInSeconds} seconds`);
        res.send({ message: `Uploaded ${req.files.length} files`, processingTime: `${processingTimeInSeconds} seconds` });
    }, 1000); // Simulating a 1-second processing time for the sake of example
});



app.get('/count', (req, res) => {
    fs.readdir(uploadFolder, (err, files) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ message: 'Failed to count files', error: err });
        }
        const numberOfFiles = files.length;
        res.send({ message: `Number of files: ${numberOfFiles}` });
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
