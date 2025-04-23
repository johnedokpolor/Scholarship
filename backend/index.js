import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import applicantRoutes from "./routes/applicant.js";

const app = express();
const port = process.env.PORT;

// JSON Parser Middleware
app.use(express.json());
// connect to the database
await connectDB();

// CORS Policy Middleware
const allowedOrigins = [process.env.CLIENT_URL, process.env.DEVELOPMENT_URL];
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use("/api", applicantRoutes);
app.listen(port, async () => {
  console.log("Server is listening on " + port + "...");
});
