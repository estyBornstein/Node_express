import { Schema,model } from "mongoose";
const lecturerModel=Schema({
    firstName: String,
    lastName: String,
    address: String
})
 const corsShema=Schema({
   corsName:String,
   subject:String,
   Date: { type: Date, default: new Date() },
   lecturer:lecturerModel
 })
 export const corsModel=model("cors",corsShema)