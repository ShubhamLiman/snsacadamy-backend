import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
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
    age: {
      type: Number,
      required: true,
    },
    grade: {
      type: Number,
    },
    father: {
      type: String,
    },
    fatheroccupation: {
      type: String,
    },
    mother: {
      type: String,
    },
    motheroccupation: {
      type: String,
    },
    courseinterest: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", enquirySchema);

export default User;
