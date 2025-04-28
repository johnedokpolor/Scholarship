import express from "express";
import {
  createPartner,
  deletePartner,
  getPartners,
} from "../controllers/partner.js";

const router = express.Router();

router.route("/partners").get(getPartners).post(createPartner);
router.delete("/partners/:id", deletePartner);

export default router;
