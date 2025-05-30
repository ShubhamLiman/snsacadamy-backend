import Enroll from "../Schema/Enroll.schema.js";

export const registerEnroll = async (user) => {
  const { email, fullName, phone, whatsapp, school, grade, courseinterest } =
    user;

  try {
    const existingEnroll = await Enroll.findOne({ email, phone });
    if (existingEnroll) {
      return {
        success: false,
        message: "Enquiry already exists",
      };
    }

    const newEnroll = new Enroll({
      email,
      fullName,
      phone,
      whatsapp,
      school,
      grade,
      courseinterest,
    });
    await newEnroll.save();
    return {
      success: true,
      message: "Enrollment Registered",
    };
  } catch (error) {
    console.log("Error in Enroll repository: ", error.message);
    return { success: false, message: error.message };
  }
};
