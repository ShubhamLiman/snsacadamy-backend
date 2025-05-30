import { registerEnroll } from "../Repository/Enroll.repo.js";
export const enrollSubmission = async (req, res) => {
  try {
    const { email, fullName, phone, whatsapp, school, grade, courseinterest } =
      req.body;

    if (!fullName || !phone || !school) {
      return res
        .status(400)
        .json({ success: false, message: "Fill all the required fields" });
    }
    const enroll = await registerEnroll({
      email,
      fullName,
      phone,
      whatsapp,
      school,
      grade,
      courseinterest,
    });

    if (enroll.success) {
      return res.status(201).json({ success: true, message: enroll.message });
    } else {
      return res.status(500).json({ success: false, message: enroll.message });
    }
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
