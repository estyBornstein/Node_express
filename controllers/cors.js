import { corsModel } from "../models/cors.js";
export async function getAllCorses(req,res){
    try{
        let result= await corsModel.find()
        res.json(result)
    }
    catch(err){
        res.status(400).json({ title: "לא הצליח להביא את כל הקורסים ", message: err.message })
    }
}
export async function getCorsById(req,res){
    let {id}=req.params;
    try{
       
        let result= await corsModel.findById(id)
        res.json(result)
    }
    catch(err){
        res.status(400).json({ title: "לא הצליח להביא את הקורס ", message: err.message })
    }
}
export async function addCors(req,res){
    let {body}=req
    if (!body.lecturer || !body.subject|| !body.corsName  )
       return res.status(404).json({ title: "missing data in body", message: "corsname lecturer subject required" })
    let alreadyCors= await corsModel.findOne({corsName:body.corsName})
    if (alreadyCors)
            return res.status(409).json({ title: "corsName already exists", message: "change cors name" })
    try{
        let newCors=corsModel(body);
        await newCors.save();
        res.json(newCors)
    }
    catch(err){
        res.status(400).json({ title: "לא הצליח להוסיף את הקורס ", message: err.message })
    }
}
export async function updateCors(req,res){
    let {corsName}=req.params;
    try{
     let result= await corsModel.findOneAndUpdate(corsName,req.body ,{new:true})
     if (!result)
            return res.status(404).json({ title: "cannot update by cors name", message: "no cors with  this name" })
        res.json(result)
    }
    catch (err) {
        res.status(400).json({ title: "לא הצלחיח לעדכן  קורס לפי קוד ", message: err.message })
    }

}
export async function deleteCors(req,res){
    let {id}=req.params;
    if(!id)
    return res.status(404).json({title: "missing data in body", message:"id is required"})
    try{
        let result= await  corsModel.findByIdAndDelete()
        if (!result)
        return res.status(404).json({ title: "cannot delete by id", message: "no cors with such id" })
    res.json(result)
}
catch (err) {
    res.status(400).json({ title: "לא הצליח למחוק  קורס לפי קוד ", message: err.message })
}
}