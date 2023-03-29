   
const express = require("express")
const mongoose = require("mongoose")
//const passport = require("passport");
const parser = require("body-parser")
//const LocalStrategy = require("passport-local")
//const passportLocalMongoose = require("passport-local-mongoose");

const PORT = 3000;

const User = require("./model/User");
const  app = express();

app.set("view engine", "ejs");
app.use(parser.urlencoded({ extended: true }));

const URL = 'mongodb+srv://aditay:aditay2003@cluster0.1zkxt4u.mongodb.net/UbuntuData?retryWrites=true&w=majority'

const connectionParams = {
  useNewUrlParser:true,
  useUnifiedTopology:true
}

mongoose.connect(URL,connectionParams)
    .then( () => {
      console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. ${err}`);
    })



// Showing home page
app.get("/", function (req, res) {
	res.render("home");
});


app.post("/save", async (req, res) => {
	const user = await User.create({
	firstname: req.body.firstname,
	lastname: req.body.lastname,
    rollno:req.body.roll
	});
	
	return res.status(200).json(user);
});



app.listen(PORT, function () {
	console.log(`Server Has Started on port ${PORT}`);
});
