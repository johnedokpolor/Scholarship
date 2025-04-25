import express from "express";
import {
  createApplicant,
  deleteApplicant,
  getAderojuApplicant,
  getApplicants,
  validateApplicant,
} from "../controllers/applicant.js";

const router = express.Router();

router.route("/apply").get(getApplicants).post(createApplicant);
router.patch("/validate", validateApplicant);
router.delete("/apply/:id", deleteApplicant);
router.get("/aderoju", getAderojuApplicant);

export default router;
