import { Moon, Sun, Sparkles, Leaf } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const phaseData = {
  menstrual: {
    name: "Menstrual Phase",
    icon: Moon,
    color: "text-lavender-400",
    bgColor: "bg-lavender-100",
    days: "Days 1-5",
    description:
      "Your body is renewing. Focus on iron-rich, comforting foods.",
    needs: [
      "Iron-rich foods",
      "Warm soups",
      "Dark chocolate",
      "Gentle hydration",
    ],
    tip: "This is a time for rest and nourishment. Listen to your body's cravings.",
  },
  follicular: {
    name: "Follicular Phase",
    icon: Leaf,
    color: "text-primary",
    bgColor: "bg-sage-100",
    days: "Days 6-14",
    description:
      "Energy is rising. Your body loves fresh, vibrant foods now.",
    needs: [
      "Fresh vegetables",
      "Lean proteins",
      "Fermented foods",
      "Light meals",
    ],
    tip: "Great time to try new recipes! Your energy and creativity are peaking.",
  },
  ovulation: {
    name: "Ovulation Phase",
    icon: Sun,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    days: "Days 15-17",
    description:
      "Peak energy! Support your body with antioxidant-rich foods.",
    needs: [
      "Fiber-rich foods",
      "Antioxidants",
      "Light proteins",
      "Raw veggies",
    ],
    tip: "You might feel more social. Perfect time for lighter, refreshing meals.",
  },
  luteal: {
    name: "Luteal Phase",
    icon: Sparkles,
    color: "text-rose-400",
    bgColor: "bg-rose-50",
    days: "Days 18-28",
    description:
      "Cravings may increase. Choose magnesium-rich comfort foods.",
    needs: [
      "Complex carbs",
      "Magnesium-rich foods",
      "Healthy fats",
      "Warm meals",
    ],
    tip: "Cravings are normal! We'll help you find satisfying, nourishing options.",
  },
};

export function CyclePhaseCard({
  phase = "follicular",
  dayInPhase = 1,
  totalDaysInPhase = 28,
}) {
  const currentPhase = phaseData[phase] || phaseData.follicular;
  const Icon = currentPhase.icon;

  return (
    <Card className="overflow-hidden border-sage-200 shadow-soft">
      <div
        className={`${currentPhase.bgColor} px-6 py-4 border-b border-sage-100`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-full bg-background/80 ${currentPhase.color}`}
          >
            <Icon className="w-5 h-5" />
          </div>

          <div>
            <h3 className="font-serif font-semibold text-foreground">
              {currentPhase.name}
            </h3>

            <p className="text-sm text-muted-foreground">
              {currentPhase.days} • Day {dayInPhase} of {totalDaysInPhase}
            </p>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <p className="text-foreground mb-4">
          {currentPhase.description}
        </p>

        <div className="mb-4">
          <p className="text-sm font-medium text-foreground mb-2">
            What your body needs today:
          </p>

          <div className="flex flex-wrap gap-2">
            {currentPhase.needs.map((need) => (
              <span
                key={need}
                className="px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-700"
              >
                {need}
              </span>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-cream-100 border border-sage-100">
          <p className="text-sm text-muted-foreground italic">
            {currentPhase.tip}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
