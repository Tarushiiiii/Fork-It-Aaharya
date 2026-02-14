import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "../../libs/utils";
import {
  Sparkles,
  Smile,
  Moon,
  AlertCircle,
  Brain,
  CloudSun,
  Zap,
  Candy,
  Flame,
  Droplets,
  CircleDot,
  Cookie,
  Soup,
  Theater,
} from "lucide-react";

const moods = [
  { id: "happy", icon: Smile, label: "Happy" },
  { id: "tired", icon: Moon, label: "Tired" },
  { id: "stressed", icon: AlertCircle, label: "Stressed" },
  { id: "anxious", icon: Brain, label: "Anxious" },
  { id: "calm", icon: CloudSun, label: "Calm" },
  { id: "energetic", icon: Zap, label: "Energetic" },
];

const cravings = [
  { id: "sweet", icon: Candy, label: "Sweet" },
  { id: "spicy", icon: Flame, label: "Spicy" },
  { id: "salty", icon: Droplets, label: "Salty" },
  { id: "cheesy", icon: CircleDot, label: "Cheesy" },
  { id: "crunchy", icon: Cookie, label: "Crunchy" },
  { id: "comfort", icon: Soup, label: "Comfort" },
];

export function MoodCravingSelector({ onSelectionChange }) {
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedCraving, setSelectedCraving] = useState("");

  const handleSubmit = () => {
    if (selectedMood && selectedCraving) {
      onSelectionChange?.(selectedMood, selectedCraving);
    }
  };

  return (
    <Card className="border-sage-200 shadow-soft">
      <CardHeader className="pb-4">
        <CardTitle className="font-serif text-xl flex items-center gap-2">
          <Theater className="w-6 h-6 text-lavender-400" />
          How are you feeling today?
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <p className="text-sm font-medium text-foreground mb-3">
            Your current mood:
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {moods.map((mood) => {
              const Icon = mood.icon;
              return (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={cn(
                    "flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all hover:shadow-soft",
                    selectedMood === mood.id
                      ? "border-primary bg-sage-50"
                      : "border-sage-200 bg-card hover:border-sage-300"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-6 h-6",
                      selectedMood === mood.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  />
                  <span className="text-xs font-medium text-muted-foreground">
                    {mood.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground mb-3">
            What are you craving?
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {cravings.map((craving) => {
              const Icon = craving.icon;
              return (
                <button
                  key={craving.id}
                  onClick={() => setSelectedCraving(craving.id)}
                  className={cn(
                    "flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all hover:shadow-soft",
                    selectedCraving === craving.id
                      ? "border-lavender-400 bg-lavender-50"
                      : "border-sage-200 bg-card hover:border-sage-300"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-6 h-6",
                      selectedCraving === craving.id
                        ? "text-lavender-400"
                        : "text-muted-foreground"
                    )}
                  />
                  <span className="text-xs font-medium text-muted-foreground">
                    {craving.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {selectedMood && selectedCraving && (
          <div className="pt-2 animate-fade-up">
            <Button
              variant="hero"
              className="w-full gap-2"
              onClick={handleSubmit}
            >
              <Sparkles className="w-4 h-4" />
              Find My Perfect Recipes
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-2">
              We'll suggest recipes that match your mood and satisfy your craving
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
