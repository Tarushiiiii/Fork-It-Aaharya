import axios from "axios";

const FOODOSCOPE_BASE =
  "https://api.foodoscope.com/recipe2-api/recipe/recipe-day/with-ingredients-categories";

if (!process.env.FOOD_API_KEY) {
  console.warn("⚠️ FOOD_API_KEY missing — using mock fallback");
}

export const getRecipesByCategories = async ({
  excludeIngredients = [],
  excludeCategories = [],
}) => {
  try {
    const res = await axios.get(FOODOSCOPE_BASE, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FOOD_API_KEY}`,
      },
      params: {
        excludeIngredients: excludeIngredients.join(","),
        excludeCategories: excludeCategories.join(","),
      },
    });

    return res.data.payload;
  } catch (err) {
    console.error(
      "Foodoscope error:",
      err.response?.status,
      err.response?.data
    );

    // 🔁 Mock fallback for demo
    return {
      id: "mock-1",
      title: "Dark Chocolate Oats",
      calories: 220,
      reason: "Magnesium-rich for luteal cravings",
    };
  }
};
