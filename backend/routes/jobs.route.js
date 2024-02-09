import express from "express";
import { createJob, getJob, getJobs } from "../controllers/job.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/create", upload.single("companyImage"), createJob);
//router.post("/create", createJob);
router.get("/get", getJobs);
router.get("get/:id", getJob);

export default router;
