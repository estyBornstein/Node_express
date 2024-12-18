import { connect } from "mongoose";
export const connectToDB= async(req,res)=>{
try{
    let con=await connect(process.env.DB_URL)
    console.log("mongo db connected")
}
catch(err){
    console.log("cannot connect mongoDB ", err)
    process.exit(1)//לברר
}
}
