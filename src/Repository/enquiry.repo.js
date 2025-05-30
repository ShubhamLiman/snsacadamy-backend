import User from "../Schema/Contacts.schema.js";

export const registerEnquiry = async (user) => {
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
  } = user;

  try {
    const existingEnquiry = await User.findOne({ email, phone });
    if (existingEnquiry) {
      return {
        success: false,
        message: "Enquiry already exists",
      };
    }

    const newEnquiry = new User({
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
    const savedEnquiry = await newEnquiry.save();
    return {
      success: true,
      message: "Enquiry Registered",
    };
  } catch (error) {
    console.log("Error in registerUser repository: ", error.message);
    return { success: false, message: error.message };
  }
};
