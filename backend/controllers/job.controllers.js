import { Job } from "../models/jobs.model.js";
import { errorHandler } from "../utils/error.js";

export const createJob = async (req, res, next) => {
  try {
    // console.log("hh", req.file);
    const jobs = await Job.create({ ...req.body, companyImage: req.file.path });
    return res.status(201).json(jobs);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getJob = async (req, res, next) => {
  try {
    const jobs = await Job.findById(req.params.id);
    if (!jobs) {
      return next(errorHandler(404, "Job not found"));
    }
    return res.status(200).json(jobs);
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

export const updateJobs = async (req, res, next) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    return next(errorHandler(404, "job not found sorry"));
  }
  try {
    const updatedJobs = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedJobs);
  } catch (err) {
    next(err);
  }
};
export const deleteListing = async (req, res, next) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return next(errorHandler(404, 'job not found!'));
  }

  // if (req.user.id !== listing.userRef) {
  //   return next(errorHandler(401, 'You can only delete your own listings!'));
  //}

  try {
    await Job.findByIdAndDelete(req.params.id);
    return res.status(200).json('job has been deleted!');
  } catch (error) {
    next(error);
  }
};

