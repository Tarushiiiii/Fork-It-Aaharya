import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Clock,
  Flame,
  Heart,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";

export function RecipeRecommendations({ recipes }) {
  const uiRecipes = recipes.map((recipe) => ({
    ...recipe,
    icon: UtensilsCrossed,
    iconColor: "text-primary",
    time: "20 min",
    tags: ["Recommended", "Healthy"],
    phaseMatch: true,
    moodMatch: true,
  }));

  return (
    <Card className="border-sage-200 shadow-soft">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="font-serif text-xl flex items-center gap-2">
            <UtensilsCrossed className="w-6 h-6 text-primary" />
            Recipes For You Today
          </CardTitle>
          <Badge variant="secondary" className="bg-sage-100 text-sage-700">
            Powered by RecipeDB
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          Curated based on your cycle phase, mood, and nutritional needs
        </p>
      </CardHeader>

      <CardContent>
        {!recipes.length && (
          <p className="text-sm text-muted-foreground text-center py-8">
            No recommendations yet. Try selecting a mood 🌱
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          {uiRecipes.map((recipe) => {
            const RecipeIcon = recipe.icon;
            return (
              <div
                key={recipe.id}
                className="group p-4 rounded-2xl border border-sage-200 bg-card hover:shadow-soft hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`p-2 rounded-xl bg-sage-50 ${recipe.iconColor}`}
                  >
                    <RecipeIcon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {recipe.title}
                    </h4>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {recipe.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        {recipe.calories} cal
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {recipe.reason}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {recipe.phaseMatch && (
                    <Badge className="bg-lavender-100 text-lavender-500 border-0 text-xs">
                      <Heart className="w-3 h-3 mr-1" />
                      Phase Match
                    </Badge>
                  )}

                  {recipe.moodMatch && (
                    <Badge className="bg-amber-100 text-amber-600 border-0 text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Mood Match
                    </Badge>
                  )}

                  {recipe.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-sage-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <button className="w-full mt-4 py-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          View All Recommendations →
        </button>
      </CardContent>
    </Card>
  );
}
