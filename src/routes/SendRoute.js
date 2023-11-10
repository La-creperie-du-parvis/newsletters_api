import express from "express";
import { transporter } from "../controllers/SendController.js";
import { getTypeOfNewsletters } from "../libs/GetTypeOfNewsletters.js";

const router = express.Router();

router.post("/nouvelle_recette", transporter);
router.post("/offre_du_soir", transporter);
router.post("/repas_de_noel", transporter);

// Get the type for sending newletters
router.get("/*", getTypeOfNewsletters)

export default router;
