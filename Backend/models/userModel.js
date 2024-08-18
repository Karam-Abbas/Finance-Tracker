const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type:String,
    required: true,
    maxLength: 20,
    trim:true,
  },
  email: {
    type:String,
    required: true,
    trim:true,
  },
  pic: {
    type:String,
    default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwinaero.com%2Fremove-user-account-picture-from-sign-in-screen-in-windows-10%2F&psig=AOvVaw1I113TZ0FQIt5koFpFIHib&ust=1722946252741000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCJ047p3YcDFQAAAAAdAAAAABAn"
  },
  password:{
    type: String,
    required: true,
    minLength: 8,
    trim:true,
  }
});


module.exports = mongoose.model("user", userSchema);