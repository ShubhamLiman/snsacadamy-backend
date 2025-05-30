import mongoose from "mongoose";

const enrollSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    whatsapp: {
      type: String,
    },
    school: {
      type: String,
      required: true,
    },
    grade: {
      type: Number,
    },
    courseinterest: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Enroll = mongoose.model("Enroll", enrollSchema);

export default Enroll;
