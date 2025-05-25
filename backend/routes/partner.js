import express from "express";
import {
  createPartner,
  deletePartner,
  getPartners,
  paymentConfirmationEmail,
} from "../controllers/partner.js";

const router = express.Router();

router.route("/partners").get(getPartners).post(createPartner);
router.get("/payment-confirmation", paymentConfirmationEmail);
router.delete("/partners/:id", deletePartner);

export default router;
