import express from "express";
import { createJob, deleteJob, getJob, getJobs, updateJob } from "../controllers/job.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/create", upload.single("companyImage"), createJob);
//router.post("/create", createJob);
router.get("/get", getJobs);
router.get("/get/:id", getJob);
router.patch("/update/:id", updateJob)
router.delete("/delete/:id", deleteJob)

export default router;
