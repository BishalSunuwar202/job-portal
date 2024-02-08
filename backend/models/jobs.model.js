import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
    companyImage: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
        unique: true,
    },
    jobDescribtion: {
        tyoe: String,
        required: true,
    },
    jobSkills: {
        type: String,
        required: true,
    }

}, { timestamps: true });

export const Job = mongoose.model("Job", jobSchema);
