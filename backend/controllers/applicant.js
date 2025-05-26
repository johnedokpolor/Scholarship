import {
  sendApplicationEmail,
  sendScholarshipEmail,
} from "../emails/emails.js";
import { Applicant } from "../models/applicant.js";
import { Partner } from "../models/partner.js";

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
const correctEmails = [
  {
    name: "Shoyebo Peter",
    email: "petershoyebo@gmail.com",
  },
  {
    name: "Buhari Imaran",
    email: "imranburahi4@gmail.com",
  },
  {
    name: "Zainab Ololade",
    email: "zainabologunro@gmail.com",
  },
  {
    name: "Mubarak",
    email: "moonbreak727@gmail.com",
  },
  {
    name: "Kabirat Oluwadamilola",
    email: "kabiratoluwadamilola206@gmail.com",
  },
  {
    name: "Adekale Emmanuel ",
    email: "adekaleemmanuel12@gmail.com",
  },
  {
    name: "Isa Bashir",
    email: "isabashir27@gmail.com",
  },
  {
    name: "John Edokpolor",
    email: "johnedokpolor@gmail.com",
  },
];

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

    const emailAlreadyExists = await Applicant.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({
        success: false,
        message:
          "This email has applied for the bootcamp already, please try another email.",
      });
    }
    const numberAlreadyExists = await Applicant.findOne({ number });
    if (numberAlreadyExists) {
      return res.status(400).json({
        success: false,
        message:
          "This number has applied for the bootcamp already, please try another number.",
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

// @desc   Send Scholarship emails
// @route  GET /api/reminder
const sendReminder = async (req, res) => {
  // const { index } = req.body;
  const applicants = await Applicant.find({});
  const chuckedApplicants = applicants.map((applicant) => ({
    name: applicant.name,
    email: applicant.email,
  }));

  // chunck the applicants array into arrays of 20 arguments each
  const chunked = chunkArray(chuckedApplicants, 50);
  const emailsToSendto = chunked[5];
  applicants.map((email) => {
    sendScholarshipEmail(email.email, email.name);
  });
  correctEmails.map((email) => {
    sendScholarshipEmail(email.email, email.name);
  });

  res.status(200).json({
    success: true,
    chunckArrayLength: chunked.length,
    chunckArrays: applicants,
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
// @desc   Validate Applicant
// @route  PATCH /api/validate
const validateApplicant = async (req, res) => {
  const { email } = req.body;
  try {
    // attempt to find and validate the Applicant
    const applicant = await Applicant.findOne({ email });
    // const partner = await Partner.findOne({ email });

    if (!applicant) {
      return res.status(404).json({
        success: false,
        message:
          "This email didn't apply for the bootcamp, please try another email.",
      });
    }
    // partner.amountGenerated = 250; //
    // partner.save(); // save the partner with the updated amountGenerated
    // find the partner that referred the applicant, and number of applicants the partner has referred
    // Dont forget to add this code later
    if (applicant.paid) {
      return res.status(400).json({
        success: false,
        message: "You're already validated",
      });
    }
    applicant.paid = true;

    applicant.save();

    // send verification email
    res.status(200).json({
      success: true,
      message: "You've been validated successfully",
      // partner,
    });
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
  validateApplicant,
  getAderojuApplicant,
  sendReminder,
};

// Set isAdmin: true for all users
// await User.updateMany({}, { $set: { isAdmin: true } });
