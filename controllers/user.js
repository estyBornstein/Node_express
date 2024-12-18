import { userModel } from "../models/user.js";

export async function getAllUsers(req,res){
    try{
        let result= await userModel.find()
        res.json(result)
    }
    catch(err){
        res.status(400).json({ title: "לא הצליח להביא את כל המשתמשים ", message: err.message })
    }
}
export async function getUserById(req,res){
    let {id}=req.params;
    try{
       
        let result= await userModel.findById(id)
        res.json(result)
    }
    catch(err){
        res.status(400).json({ title: "לא הצליח להביא את המשתמש ", message: err.message })
    }
}
export async function addUser_sightUp(req,res){
    let {body}=req
    if (!body.username || !body.password || !body.phone || !body.email)
       return res.status(404).json({ title: "missing data in body", message: "username password email phone are required" })
    let alreadyUser= await userModel.findOne({username:body.username})
    if (alreadyUser)
            return res.status(409).json({ title: "username already exists", message: "change user name" })
    try{
        let newUser=userModel(body);
        await newUser.save();
        res.json(newU)
    }
    catch(err){
        res.status(400).json({ title: "לא הצליח להוסיף את המשתמש ", message: err.message })
    }
}
export async function updateUser(req,res){
    let {id}=req.params;
    if (body.username || body.password)
    return res.status(404).json({ title: "cannot update these details in body", message: "username password cannot be changed here" })
    try{
     let result= await userModel.findOneAndUpdate(id,req.body ,{new:true})
     if (!result)
            return res.status(404).json({ title: "cannot update by id", message: "no user with such id" })
        res.json(result)
    }
    catch (err) {
        res.status(400).json({ title: "לא הצלחיח לעדכן  משתמש לפי קוד ", message: err.message })
    }

}
export async function getUseByUsernamePassword_login(req, res) {
    let {password,name}=req.body;
    if(!password||!name)
    return res.status(404).json({ title: "missing data in body", message: "username password  are required" })
    try{ let result = await userModel.findOne({ username: username });
    if (!result)
        return res.status(404).json({ title: "cannot login", message: "no user with such username" })
    if (result.password != password)
        return res.status(404).json({ title: "cannot login", message: "wrong password" })
    res.json(result)
}
catch (err) {
    res.status(400).json({ title: "לא הצלחיח להביא  משתמש עם פרטים אלה ", message: err.message })
}
}