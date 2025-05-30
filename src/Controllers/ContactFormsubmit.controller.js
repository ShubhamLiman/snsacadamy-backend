import { registerEnquiry } from "../Repository/enquiry.repo.js";
export const enquirySubmission = async (req, res) => {
  try {
    const {
      email,
      fullName,
      phone,
      whatsapp,
      school,
      age,
      grade,
      father,
      fatheroccupation,
      mother,
      motheroccupation,
      courseinterest,
    } = req.body;

    if (!fullName || !email || !phone || !school || !age) {
      return res
        .status(400)
        .json({ success: false, message: "Fill all the required fields" });
    }
    const enquiry = await registerEnquiry({
      email,
      fullName,
      phone,
      whatsapp,
      school,
      age,
      grade,
      father,
      fatheroccupation,
      mother,
      motheroccupation,
      courseinterest,
    });

    if (enquiry.success) {
      return res.status(201).json({ success: true, message: enquiry.message });
    } else {
      return res.status(500).json({ success: false, message: enquiry.message });
    }
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// email: {
//       type: String,
//       unique: true,
//     },
//     fullName: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     whatsapp: {
//       type: String,
//     },
//     school: {
//       type: String,
//       required: true,
//     },
//     age: {
//       type: Number,
//       required: true,
//     },
//     grade: {
//       type: Number,
//     },
//     father: {
//       type: String,
//     },
//     fatheroccupation: {
//       type: String,
//     },
//     mother: {
//       type: String,
//     },
//     motheroccupation: {
//       type: String,
//     },
//     courseinterest: {
//       type: String,
//     },
