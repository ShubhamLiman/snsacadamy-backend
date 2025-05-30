import express from "express";
import { enrollSubmission } from "../Controllers/Enroll.contriller.js";
const EnrollRouter = express.Router();

EnrollRouter.post("/enrollUser", enrollSubmission);

export default EnrollRouter;
