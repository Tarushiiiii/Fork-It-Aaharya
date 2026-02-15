import { Router } from "express";
import { getFlavorSwap } from "../services/flavor.services.js";

const router = Router();

router.post("/swap", async (req, res) => {
  try {
    const { missingIngredient } = req.body;

    if (!missingIngredient) {
      return res.status(400).json({
        success: false,
        message: "missingIngredient is required",
      });
    }

    const result = await getFlavorSwap({ missingIngredient });

    return res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Flavor swap failed" });
  }
});

export default router;
