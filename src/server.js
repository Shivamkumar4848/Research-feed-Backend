import express from "express";
import cors from "cors";
import summarizeRoute from "./routes/summarize.js";
import errorHandler from "./middlewares/errorHandler.js";
import { config } from "./config.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/summarize", summarizeRoute);
app.use(express.static("public"));
// Error handling
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`🚀 Backend running on http://localhost:${config.port}`);
});
