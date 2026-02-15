import { useState } from "react";
import { WelcomeHeader } from "../components/dashboard/welcomeHeader";
import { CyclePhaseCard } from "../components/dashboard/cyclePhaseCard";
import { MoodCravingSelector } from "../components/dashboard/moodCravingSelector";
import { RecipeRecommendations } from "../components/dashboard/recipeRecommendations";
import { FlavorInsightCard } from "../components/dashboard/flavorInsightCard";
import { GamificationBadge } from "../components/dashboard/gamificationBadge";
import { getRecommendations } from "../services/recommendation.service";
import axios from "axios";

export const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [cycleInfo, setCycleInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [missingIngredient, setMissingIngredient] = useState("");

  const handleMoodCravingSubmit = async (mood, craving) => {
    setLoading(true);
    setError(null);

    try {
      // 3 parallel API calls
      const responses = await Promise.all([
        getRecommendations({ mood, craving }),
        getRecommendations({ mood, craving }),
        getRecommendations({ mood, craving }),
      ]);

      // Combine all recipes into one array
      const allRecipes = responses.flatMap((res) => res?.recipes || []);

      // (Optional) remove duplicates by recipe_id / title
      const uniqueRecipes = Array.from(
        new Map(allRecipes.map((r) => [r.recipe_id ?? r.title, r])).values(),
      );

      // Use context from first response (or merge if needed)
      setRecipes(uniqueRecipes);
      setCycleInfo(responses[0]?.context ?? null);
    } catch (err) {
      console.error(err);
      setError("Could not fetch recommendations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-8 min-h-[calc(100vh-5rem)]">
      <div className="container mx-auto lg:px-8 px-[3px]">
        <WelcomeHeader />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* LEFT */}
          <div className="lg:col-span-1 space-y-6">
            <CyclePhaseCard
              phase={cycleInfo?.phase}
              dayInPhase={cycleInfo?.dayInPhase}
              totalDaysInPhase={cycleInfo?.totalDaysInPhase}
            />
            <GamificationBadge />
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 space-y-6">
            <MoodCravingSelector
              onSubmit={handleMoodCravingSubmit}
              loading={loading}
            />

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <RecipeRecommendations recipes={recipes} loading={loading} />

            {/* Flavor Insight Inputs */}
            <div className="p-4 rounded-xl border border-sage-100 bg-cream-50 space-y-3">
              <p className="text-sm font-medium text-sage-700">
                Flavor Insight
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {/* Flavor Input */}
                <input
                  type="text"
                  placeholder="Enter flavor (e.g. sweet, spicy, comfort)"
                  value={selectedFlavor}
                  onChange={(e) => setSelectedFlavor(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-sage-200 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-300"
                />

                {/* Missing Ingredient Input */}
                <input
                  type="text"
                  placeholder="Missing ingredient (e.g. sugar, cream, butter)"
                  value={missingIngredient}
                  onChange={(e) => setMissingIngredient(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-sage-200 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-300"
                />
              </div>

              <p className="text-xs text-muted-foreground">
                We’ll suggest a healthier swap with similar flavor compounds ✨
              </p>
            </div>

            <FlavorInsightCard
              flavor={selectedFlavor}
              missingIngredient={missingIngredient}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
