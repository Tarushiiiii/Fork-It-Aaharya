import { Card, CardContent } from "../ui/card";
import { Trophy, Star, Flame, Heart } from "lucide-react";

const badges = [
  {
    id: "first-recipe",
    name: "First Recipe",
    icon: <Star className="w-5 h-5" />,
    color: "text-amber-500",
    bgColor: "bg-amber-100",
    earned: true,
  },
  {
    id: "craving-conqueror",
    name: "Smart Craver",
    icon: <Flame className="w-5 h-5" />,
    color: "text-rose-500",
    bgColor: "bg-rose-100",
    earned: false,
  },
  {
    id: "cycle-sync",
    name: "Cycle Sync",
    icon: <Heart className="w-5 h-5" />,
    color: "text-lavender-400",
    bgColor: "bg-lavender-100",
    earned: false,
  },
  {
    id: "champion",
    name: "Champion",
    icon: <Trophy className="w-5 h-5" />,
    color: "text-primary",
    bgColor: "bg-sage-100",
    earned: false,
  },
];

export function GamificationBadge() {
  const earnedCount = badges.filter((b) => b.earned).length;

  return (
    <Card className="border-sage-200 shadow-soft">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-serif font-semibold text-lg text-foreground">
              Your Achievements
            </h3>
            <p className="text-sm text-muted-foreground">
              {earnedCount} of {badges.length} badges earned
            </p>
          </div>

          <div className="text-right">
            <span className="text-2xl font-bold text-primary">
              {earnedCount}
            </span>
            <span className="text-muted-foreground">/{badges.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`flex flex-col items-center p-3 rounded-xl ${
                badge.earned
                  ? `${badge.bgColor} shadow-soft`
                  : "bg-muted/30 opacity-50"
              }`}
            >
              <div
                className={`p-2 rounded-full ${
                  badge.earned
                    ? `${badge.bgColor} ${badge.color}`
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {badge.icon}
              </div>

              <span className="text-xs font-medium text-center mt-2 text-foreground line-clamp-1">
                {badge.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-lavender-50 to-sage-50 border border-sage-100">
          <p className="text-sm text-center text-foreground">
            <span className="font-medium">Great start!</span> You're building
            healthy habits one recipe at a time.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
