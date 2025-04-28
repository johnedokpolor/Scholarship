import mongoose from "mongoose";

// Create a Partner Schema
const partnerSchema = new mongoose.Schema(
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
      type: Number,
      required: true,
    },
    referralCode: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create an Partner Model
export const Partner = mongoose.model("Partner", partnerSchema);
