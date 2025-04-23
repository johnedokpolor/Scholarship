import { sendApplicationEmail } from "../emails/emails.js";
import { Applicant } from "../models/applicant.js";

// @desc   Create Applicant
// @route  POST /api/apply
const createApplicant = async (req, res) => {
  const {
    name,
    email,
    number,
    institution,
    haveLaptop,
    hearAboutUs,
    referredBy,
    reason,
  } = req.body;
  try {
    if (
      !name ||
      !email ||
      !number ||
      !institution ||
      !haveLaptop ||
      !hearAboutUs ||
      !referredBy ||
      !reason
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const applicantAlreadyExists = await Applicant.findOne({ email });
    if (applicantAlreadyExists) {
      return res.status(400).json({
        success: false,
        message: "You've already applied for the scholarship",
      });
    }
    const applicant = new Applicant({
      name,
      email,
      number,
      institution,
      haveLaptop,
      hearAboutUs,
      referredBy,
      reason,
    });

    await applicant.save();
    res.status(201).json({
      success: true,
      message: "You've Applied Successfully",
      Applicant: {
        // returns everything in the applicant model
        ...applicant._doc,
      },
    });
    sendApplicationEmail(email, name);
  } catch (error) {
    throw new Error(error.message);
  }
};
// @desc   Get All Applicants
// @route  GET /api/apply
const getApplicants = async (req, res) => {
  const applicants = await Applicant.find({});

  res.status(200).json({
    success: true,
    applicants,
  });
};

const deleteApplicant = async (req, res) => {
  const { id } = req.params;
  try {
    // attempt to find and delete the Applicant
    const applicant = await Applicant.findByIdAndDelete(id);
    if (!applicant) {
      res.status(404).json({ success: false, message: "Applicant not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Applicant deleted successfully" });
  } catch (error) {
    throw new Error(error.message);
  }
};
// @desc   Verify Applicant
// @route  PATCH /api/verify
const verifyApplicant = async (req, res) => {
  const { email } = req.body;
  try {
    // attempt to find and verify the Applicant
    const applicant = await Applicant.findOne({ email });
    if (!applicant) {
      return res.status(404).json({
        success: false,
        message: "You didn't apply for the bootcamp, try another email",
      });
    }

    applicant.paid = true;
    applicant.save();

    // send verification email
    res
      .status(200)
      .json({ success: true, message: "Applicant verified successfully" });
  } catch (error) {
    throw new Error(error.message);
  }
};

// @desc   Get Aderoju's Applicants
// @route  GET /api/aderoju
const getAderojuApplicant = async (req, res) => {
  const applicants = await Applicant.find({
    referredBy: "Mr Aderoju",
    paid: true,
  });

  res.status(200).json({
    success: true,
    applicants,
  });
};

export {
  createApplicant,
  getApplicants,
  deleteApplicant,
  verifyApplicant,
  getAderojuApplicant,
};
