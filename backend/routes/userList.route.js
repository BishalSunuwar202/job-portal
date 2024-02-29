import express from "express";
import { getUserList, getUserLists } from "../controllers/userList.controller.js";

const router = express.Router();

router.get("/userList/:id", getUserList);
router.get("/userLists", getUserLists);

export default router;
