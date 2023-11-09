import express from "express";
import { transporter } from "../controllers/SendController.js";

const router = express.Router();
router.post("/nouvelle_recette", transporter);
router.post("/offre_du_soir", transporter);
router.post("/repas_de_noel", transporter);

export default router;
