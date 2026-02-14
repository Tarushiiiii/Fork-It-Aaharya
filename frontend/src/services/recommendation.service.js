import axios from "axios";

export const getRecommendations = async ({ mood, craving }) => {
  try {
    const res = await axios.get("http://localhost:8000/recommendations", {
      params: { mood, craving },
    });

    console.log("REAL BACKEND RESPONSE:", res.data);

    return {
      recipes: res.data.recommended_recipe.data,
      context: res.data.context,
    };
  } catch (error) {
    console.error("Recommendation API error:", error);
    throw error;
  }
};
