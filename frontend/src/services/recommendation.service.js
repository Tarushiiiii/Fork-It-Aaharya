import api from "./api";

export const getRecommendations = async ({ mood, craving }) => {
  try {
    const res = await api.post("/recommendations", {
      params: { mood, craving },
    });

    console.log("REAL BACKEND RESPONSE:", res.data);

    return {
      recipes: [res.data.recommended_recipe] || [],
      context: res.data.context,
    };
  } catch (error) {
    console.error("Recommendation API error:", error);
    throw error;
  }
};
