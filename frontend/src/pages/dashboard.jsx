import { WelcomeHeader } from "../components/dashboard/welcomeHeader";
import { CyclePhaseCard } from "../components/dashboard/cyclePhaseCard";
import { MoodCravingSelector } from "../components/dashboard/moodCravingSelector";
import { RecipeRecommendations } from "../components/dashboard/recipeRecommendations";
import { FlavorInsightCard } from "../components/dashboard/flavorInsightCard";
import { GamificationBadge } from "../components/dashboard/gamificationBadge";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [cycleInfo, setCycleInfo] = useState(null);

  const handleMoodCravingChange = async (mood, craving) => {
    // add API call here later
  };

  // useEffect(() => {
  //   fetchInitialRecommendations();
  // }, []);

  return (
    <div>
      <section className="py-8 min-h-[calc(100vh-5rem)]">
        <div className="container mx-auto lg:px-8 px-[3px]">
          <WelcomeHeader />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1 space-y-6">
              <CyclePhaseCard
                phase={cycleInfo?.phase}
                dayInPhase={cycleInfo?.dayInPhase}
                totalDaysInPhase={cycleInfo?.totalDaysInPhase}
              />
              <GamificationBadge />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <MoodCravingSelector onSelectionChange={handleMoodCravingChange} />
              <RecipeRecommendations recipes={recipes} />
              <FlavorInsightCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
