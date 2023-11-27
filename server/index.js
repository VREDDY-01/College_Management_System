import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import adminRoutes from "../server/routes/adminRoutes.js";


const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello to college erp backend");
});


main().catch(err => console.log(err));

async function main() {
  await mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
 )
}
