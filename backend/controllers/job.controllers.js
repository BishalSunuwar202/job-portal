import { Job } from "../models/jobs.model.js";
import { errorHandler } from "../utils/error.js";

export const createJob = async (req, res, next) => {
  try {
    console.log("hh", req.file);
    const jobs = await Job.create({ ...req.body, companyImage: req.file.path });
    return res.status(201).json(jobs);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getJob = async (req, res, next) => {
  try {
    console.log("bye");
    const jobs = await Job.findById(req.params.id);
    if (!jobs) {
      return next(errorHandler(404, "Job not found"));
    }
    res.status(200).json(jobs);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    return res.status(200).json(jobs);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
