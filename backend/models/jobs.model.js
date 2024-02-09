import mongoose from "mongoose";
const { Schema } = mongoose

const jobSchema = new Schema({
    companyImage: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true,
    },
    companyDescription: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
        unique: true,
    },
    jobInformation: {
        type: String,
        required: true,
    },
    jobSpecification: {
        type: String,
    },
    jobDescription:{
        type: String,
        required: true,
    }

}, { timestamps: true });

export const Job = mongoose.model("Job", jobSchema);
