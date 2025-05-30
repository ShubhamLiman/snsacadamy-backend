import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./Utils/DbConfig.js";
import ContactRouter from "./Routes/enquiry.route.js";
import EnrollRouter from "./Routes/Enroll.route.js";
dotenv.config();
const port = process.env.PORT;
export const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true, // Allow cookies to be sent from the frontend
  })
);
// Middleware to parse JSON bodies

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use(cookieParser());
// Basic route
app.use("/api/contact", ContactRouter);
app.use("/api/enroll", EnrollRouter);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
(async () => {
  await connectDB();
  app.listen(port, () => {
    console.log("Listening on port" + port);
  });
})();
