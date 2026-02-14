import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight, Sparkles, FlaskConical, Lightbulb } from "lucide-react";

const todaySwaps = [
  {
    original: "Processed Cheese",
    replacement: "Fresh Paneer",
    benefit: "Lower sodium, higher protein",
    flavorNote: "Same creamy satisfaction, better nourishment",
  },
  {
    original: "Refined Sugar",
    replacement: "Jaggery or Dates",
    benefit: "Rich in iron, slower energy release",
    flavorNote: "Natural sweetness with warm, caramel notes",
  },
  {
    original: "Cream",
    replacement: "Hung Curd",
    benefit: "Probiotics, less fat, more protein",
    flavorNote: "Similar tang and richness in recipes",
  },
];

export function FlavorInsightCard() {
  return (
    <Card className="border-sage-200 shadow-soft overflow-hidden">
      <CardHeader className="pb-4 bg-gradient-to-r from-lavender-50 to-sage-50 border-b border-sage-100">
        <div className="flex items-center justify-between">
          <CardTitle className="font-serif text-xl flex items-center gap-2">
            <FlaskConical className="w-6 h-6 text-lavender-400" />
            Today's Flavor Swaps
          </CardTitle>

          <Badge className="bg-lavender-200 text-lavender-500 border-0">
            <Sparkles className="w-3 h-3 mr-1" />
            FlavorDB
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          Smart substitutions that keep the taste you love
        </p>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          {todaySwaps.map((swap, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-cream-50 border border-sage-100 hover:border-sage-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-medium line-through">
                  {swap.original}
                </span>

                <ArrowRight className="w-4 h-4 text-muted-foreground" />

                <span className="px-3 py-1 rounded-full bg-sage-200 text-sage-700 text-sm font-medium">
                  {swap.replacement}
                </span>
              </div>

              <p className="text-sm text-foreground font-medium mb-1">
                {swap.benefit}
              </p>

              <p className="text-xs text-muted-foreground italic flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {swap.flavorNote}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl gradient-soft border border-sage-100">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground text-sm mb-1">
                How it works
              </p>
              <p className="text-xs text-muted-foreground">
                FlavorDB matches ingredients by their flavor compounds. When we
                suggest a swap, it's because the replacement shares similar
                taste molecules — so you won't miss the original!
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
