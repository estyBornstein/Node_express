import { Router } from "express";
import {getUserById,getAllUsers,getUseByUsernamePassword_login,updateUser,addUser_sightUp} from "../controllers/user.js"


let router=Router();
router.get("/",getAllUsers )
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.post("/", addUser_sightUp);
router.post("/login/", getUseByUsernamePassword_login);

export default router;
