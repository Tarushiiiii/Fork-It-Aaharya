import { useState } from "react";
import { cn } from "../../libs/utils";
import {
  Smile,
  Moon,
  AlertCircle,
  Brain,
  Cloud,
  Zap,
  Candy,
  Flame,
  Droplet,
  Cheese,
  Cookie,
  Soup,
  Sparkles,
} from "lucide-react";

const MOODS = [
  { id: "happy", label: "Happy", icon: Smile },
  { id: "tired", label: "Tired", icon: Moon },
  { id: "stressed", label: "Stressed", icon: AlertCircle },
  { id: "anxious", label: "Anxious", icon: Brain },
  { id: "calm", label: "Calm", icon: Cloud },
  { id: "energetic", label: "Energetic", icon: Zap },
];

const CRAVINGS = [
  { id: "sweet", label: "Sweet", icon: Candy },
  { id: "spicy", label: "Spicy", icon: Flame },
  { id: "salty", label: "Salty", icon: Droplet },
  { id: "cheesy", label: "Cheesy", icon: Cheese },
  { id: "crunchy", label: "Crunchy", icon: Cookie },
  { id: "comfort", label: "Comfort", icon: Soup },
];

export const MoodCravingSelector = ({ onSubmit, loading }) => {
  const [mood, setMood] = useState(null);
  const [craving, setCraving] = useState(null);

  const canSubmit = mood && craving;

  return (
    <div className="rounded-2xl border border-sage-200 p-6 space-y-10 bg-white">
      {/* MOOD */}
      <div>
        <h3 className="text-xl font-semibold mb-1">
          How are you feeling today?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">Your current mood:</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {MOODS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setMood(id)}
              disabled={loading}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-xl border transition",
                mood === id
                  ? "border-primary bg-primary/5"
                  : "border-sage-200 hover:border-primary/40",
              )}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CRAVING */}
      <div>
        <h3 className="text-xl font-semibold mb-4">What are you craving?</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {CRAVINGS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCraving(id)}
              disabled={loading}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-xl border transition",
                craving === id
                  ? "border-purple-400 bg-purple-50"
                  : "border-sage-200 hover:border-purple-300",
              )}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pt-4">
        <button
          disabled={!canSubmit || loading}
          onClick={() => onSubmit(mood, craving)}
          className={cn(
            "w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white text-lg font-semibold transition",
            canSubmit
              ? "bg-emerald-700 hover:bg-emerald-800"
              : "bg-emerald-300 cursor-not-allowed",
          )}
        >
          <Sparkles className="w-5 h-5" />
          {loading ? "Finding recipes..." : "Find My Perfect Recipes"}
        </button>

        <p className="text-sm text-center text-muted-foreground mt-3">
          We'll suggest recipes that match your mood and satisfy your craving
        </p>
      </div>
    </div>
  );
};
