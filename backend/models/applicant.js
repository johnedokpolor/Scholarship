import mongoose from "mongoose";

// Create a Book Schema
const applicantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    haveLaptop: {
      type: String,
      required: true,
    },
    hearAboutUs: {
      type: String,
      required: true,
    },
    referredBy: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    paid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create an Appicant Model
export const Applicant = mongoose.model("Applicant", applicantSchema);
