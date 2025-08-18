import express from "express";
import { getSummary } from "../services/openaiService.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { abstract } = req.body;
    if (!abstract)
      return res.status(400).json({ error: "Abstract is required" });

    const summary = await getSummary(abstract); // call service
    res.json({ summary });
  } catch (err) {
    next(err);
  }
});

export default router;
