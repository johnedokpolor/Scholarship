import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import applicantRoutes from "./routes/applicant.js";

const app = express();
const port = process.env.PORT;

// CORS Policy Middleware
app.use(cors());
// JSON Parser Middleware
app.use(express.json());
// connect to the database
await connectDB();

app.use("/api", applicantRoutes);
app.listen(port, async () => {
  console.log("Server is listening on " + port + "...");
});
