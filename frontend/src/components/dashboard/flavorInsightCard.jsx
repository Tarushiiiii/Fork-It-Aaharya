export function FlavorInsightCard({ ingredients = [], craving }) {

  const getSwap = (ingredient, craving) => {
    if (craving === "sweet") return "dates / jaggery";
    if (craving === "salty") return "roasted chana";
    if (craving === "comfort") return "oats";
    return "healthier alternative";
  };

  return (
    <Card className="border-sage-200 shadow-soft overflow-hidden">
      <CardHeader className="pb-4 bg-gradient-to-r from-lavender-50 to-sage-50">
        <CardTitle className="font-serif text-xl flex items-center gap-2">
          <FlaskConical className="w-6 h-6 text-lavender-400" />
          Today’s Flavor Insight
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        {ingredients.map((ingredient, index) => (
          <div
            key={`${ingredient}-${index}`}
            className="p-4 rounded-xl bg-cream-50 border border-sage-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="line-through text-rose-600 text-sm">
                {ingredient}
              </span>

              <ArrowRight className="w-4 h-4 text-muted-foreground" />

              <span className="text-sage-700 text-sm font-medium">
                {getSwap(ingredient, craving)}
              </span>
            </div>

            <p className="text-sm font-medium">
              Better for your {craving ?? "health"}
            </p>

            <p className="text-xs italic text-muted-foreground">
              Similar flavor compounds, lighter on digestion ✨
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
