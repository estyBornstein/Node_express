import { Router } from "express";
import{deleteCors,updateCors,addCors,getCorsById,getAllCorses } from "../controllers/cors.js"
 let router=Router();
 router.get("/",getAllCorses)
 router.get("/:id",getCorsById)
 router.put("/:id",updateCors)
 router.post("/",addCors)
 router.delete("/:id",deleteCors)
 export default router;