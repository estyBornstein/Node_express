
import {Schema, model} from "mongoose";
const userSchema=Schema({
    password: String,
    email: String,
    username: String,
    phone: String
})
export const userModel=model("user",userSchema)