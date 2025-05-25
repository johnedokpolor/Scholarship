// @desc   Create Applicant

import {
  sendPartnershipEmail,
  sendPartnershipReportEmail,
  sendPaymentConfirmationmail,
} from "../emails/emails.js";
import { Partner } from "../models/partner.js";

// @desc   Get All Partners
// @route  POST /api/partners
export const createPartner = async (req, res) => {
  const { name, email, number, referralCode, accountNumber, bankName, reason } =
    req.body;
  try {
    if (
      !name ||
      !email ||
      !number ||
      !referralCode ||
      !bankName ||
      !accountNumber ||
      !reason
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailAlreadyExists = await Partner.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({
        success: false,
        message: "This email is a partner already, please try another email.",
      });
    }
    const numberAlreadyExists = await Partner.findOne({ number });
    if (numberAlreadyExists) {
      return res.status(400).json({
        success: false,
        message: "This number is a partner already, please try another number.",
      });
    }
    const partner = new Partner({
      name,
      email,
      number,
      referralCode,
      accountNumber,
      bankName,
      reason,
    });

    sendPartnershipEmail(email, name, referralCode, accountNumber, bankName);
    sendPartnershipReportEmail(email, name);
    await partner.save();
    res.status(201).json({
      success: true,
      message: "You've Applied Successfully",
      Partner: {
        // returns everything in the partner model
        ...partner._doc,
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
// @desc   Get All Partners
// @route  GET /api/partners
export const getPartners = async (req, res) => {
  const partners = await Partner.find({});

  res.status(200).json({
    success: true,
    partners,
  });
};

// @desc   Delete  Partner
// @route  DELETE /api/partners/:id
export const deletePartner = async (req, res) => {
  const { id } = req.params;
  try {
    // attempt to find and delete the Partner
    const partner = await Partner.findByIdAndDelete(id);
    if (!partner) {
      res.status(404).json({ success: false, message: "Partner not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Partner deleted successfully" });
  } catch (error) {
    throw new Error(error.message);
  }
};

// @desc   Send Payment Email to All Partners
// @route  GET /api/payment-confirmation
export const paymentConfirmationEmail = async (req, res) => {
  try {
    // attempt to find partners with amountGenerated greater than 0
    const partners = await Partner.find({ amountGenerated: { $gt: 0 } });

    // map through the partners and send payment confirmation email
    partners.forEach((partner) => {
      const { email, name, referralCode, accountNumber, bankName } = partner;
      sendPaymentConfirmationmail(
        email,
        name,
        referralCode,
        accountNumber,
        bankName
      );
    });

    res.status(200).json({
      success: true,
      partners,
      message: "Payment Email Sent Successfully",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
