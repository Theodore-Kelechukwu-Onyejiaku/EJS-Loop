const express = require("express");
const app = express();
const path = require("path");


//Setting the default view engine to EJS so that we don't have to type ejs extension to our views
app.set("view engine", "ejs");
//Setting the views directory for the ejs files
app.set("views", path.join(__dirname, "/views"))


//a simple rendering of an EJS template engine
app.get("/", (req, res)=>{
    let questions = [
        {title: "What is node.js?", user: "Theodore", votes: "100"},
        {title: "what is Framework Seven?", user: "Emeka", votes: "90"},
        {title: "what is view.js?", user: "Elijah", votes: "80"},
        {title: "what is dns server?", user: "Chidera", votes: "70"}
    ]
    res.render("index", {questions: questions})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Server running succesfully on port:"+PORT)
})