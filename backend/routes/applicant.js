import express from "express";
import {
  createApplicant,
  deleteApplicant,
  getAderojuApplicant,
  getApplicants,
  verifyApplicant,
} from "../controllers/applicant.js";

const router = express.Router();

router.route("/apply").get(getApplicants).post(createApplicant);
router.patch("/verify", verifyApplicant);
router.delete("/apply/:id", deleteApplicant);
router.get("/aderoju", getAderojuApplicant);

export default router;
