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

            <FlavorInsightCard />
          </div>
        </div>
      </div>
    </section>
  );
};
