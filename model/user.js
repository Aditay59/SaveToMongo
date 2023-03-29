const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
    rollno: {
        type: Number
    }
})

//User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User)
