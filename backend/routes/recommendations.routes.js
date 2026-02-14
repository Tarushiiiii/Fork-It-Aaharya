import { Router } from "express";
import Profile from "../models/profile.js";
import { getRecipesByCategories } from "../services/foodoscope.services.js";
import { nutrientsForPhase } from "../utils/cycle.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { mood, craving } = req.body;

    const profile = await Profile.findOne().sort({ createdAt: -1 });

    if (!profile) {
      return res.status(400).json({ message: "Profile not found" });
    }

    const phase = profile.cycleInfo?.phase;

    if (!phase) {
      return res.status(400).json({ message: "Cycle phase missing" });
    }

    const nutrients = nutrientsForPhase(phase);

    const excludeIngredients = [];

    if (craving === "spicy" && nutrients.includes("iron")) {
      excludeIngredients.push("cinnamon");
    }

    const recipe = await getRecipesByCategories({
      excludeIngredients,
    });

    return res.json({
      context: {
        phase,
        dayInPhase: profile.cycleInfo.dayInPhase,
        totalDaysInPhase: profile.cycleInfo.totalDaysInPhase,
        dayOfCycle: profile.cycleInfo.dayOfCycle,
        mood,
        craving,
        focusNutrients: nutrients,
      },
      recommended_recipes: recipe ? [recipe] : [],
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Recommendation failed" });
  }
});

export default router;
