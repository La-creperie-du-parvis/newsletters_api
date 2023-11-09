import express from "express";
import { transporter } from "../controllers/SendController.js";

const router = express.Router();
router.post("/send-email", transporter);

export default router;
