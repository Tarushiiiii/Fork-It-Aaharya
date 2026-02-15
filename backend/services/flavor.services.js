import axios from "axios";

const BASE_URL = "http://cosylab.iiitd.edu.in:6969/flavordb";

/**
 * 🎯 Get flavor swap using FlavorDB
 */
export const getFlavorSwap = async ({ missingIngredient }) => {
  try {
    const ingredient = missingIngredient?.toLowerCase();

    if (!ingredient) {
      return { success: false, message: "Missing ingredient required" };
    }

    // 🔥 Directly call food pairing endpoint
    const res = await axios.get(
      `${BASE_URL}/food/by-alias`,
      {
        params: { food_pair: ingredient },
        timeout: 5000,
      }
    );

    const pairings = res.data?.data || [];

    if (!pairings.length) {
      return {
        success: false,
        message: "No flavor pairings found",
      };
    }

    const pairingNames = pairings
      .slice(0, 5)
      .map((p) => p.entity_alias_readable);

    // 🧠 healthy preference list
    const healthyPriority = [
      "jaggery",
      "dates",
      "banana",
      "dark chocolate",
      "paneer",
      "hung curd",
      "curd",
      "nuts",
    ];

    const healthier = pairingNames.find((item) =>
      healthyPriority.includes(item.toLowerCase())
    );

    const replacement = healthier || pairingNames[0];

    return {
      success: true,
      original: ingredient,
      replacement,
      flavorPairings: pairingNames,
      reason: `Shares similar flavor compounds with ${ingredient}`,
    };
  } catch (err) {
    console.warn("⚠️ FlavorDB offline — using fallback");

    // 🔁 fallback (only if API fails)
    return {
      success: true,
      original: missingIngredient,
      replacement: "jaggery",
      flavorPairings: ["jaggery", "dates", "banana"],
      reason: "Healthy natural sweetener with similar taste",
      source: "fallback",
    };
  }
};
