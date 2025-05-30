import express from "express";
import { enquirySubmission } from "../Controllers/ContactFormsubmit.controller.js";
const ContactRouter = express.Router();

ContactRouter.post("/enquire", enquirySubmission);

export default ContactRouter;
