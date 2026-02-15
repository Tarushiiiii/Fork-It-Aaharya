import api from "./api";

export const getSwaps = async ({ flavor, missingIngredient }) => {
  try {
    const res = await api.post("/flavor/swap", {
      params: { flavor, missingIngredient },
    });

    console.log("REAL BACKEND RESPONSE:", res.data);

    return {
      replacement: [res.data] || []
    };
  } catch (error) {
    console.error("Recommendation API error:", error);
    throw error;
  }
};
