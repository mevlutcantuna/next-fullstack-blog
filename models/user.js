const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    image:{
        type:String,
        default:"https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
    }
})

// to save password as bcrypt
UserSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)
    next()
});

// to check password
UserSchema.methods.checkPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports = mongoose.models.User || mongoose.model("User",UserSchema)