const express=require("express");
const app=express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/status", (req, res) => {
    const status = {
       "Status": "Running"
    };
    res.send(status);
 });

app.listen(PORT, ()=>{
    console.log("Server is running");
})

