import {
  Database,
  Sparkles,
  Heart,
  Users,
  Smile,
  HeartHandshake,
  Leaf,
} from "lucide-react";

export const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center stagger-children">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6">
              About <span className="text-primary">Aaharya</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              A life-stage-aware, craving-aware food companion designed
              exclusively for women.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">
                Our Core Identity
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Aaharya is more than just a recipe app — it's your personal food
                companion that truly understands what it means to be a woman
                navigating nutrition through every phase of life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Powered by <strong className="text-foreground">RecipeDB</strong>{" "}
                and <strong className="text-foreground">FlavorDB</strong>, we
                combine cutting-edge computational gastronomy with deep empathy
                for women's unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="p-8 rounded-2xl bg-card border border-sage-200 shadow-soft">
                <Database className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Flavor Science
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Using FlavorDB's comprehensive database of flavor compounds to
                  understand what your cravings really mean and find satisfying
                  alternatives.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-sage-200 shadow-soft">
                <Sparkles className="w-10 h-10 text-lavender-400 mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Ingredient Intelligence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  RecipeDB's vast recipe knowledge helps us suggest meals based
                  on what you already have, saving time and reducing waste.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-sage-200 shadow-soft">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Hormonal Phase Awareness
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that your nutritional needs change throughout
                  your cycle and adjust our suggestions accordingly.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-sage-200 shadow-soft">
                <Users className="w-10 h-10 text-lavender-400 mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Real-Life Constraints
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a busy professional, a student in a hostel, or
                  a new mom, we adapt to your real-world limitations.
                </p>
              </div>
            </div>

            <div className="p-8 lg:p-12 rounded-3xl gradient-soft border border-sage-200">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-6 text-center">
                Our Promise to You
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage-100 flex items-center justify-center">
                    <Smile className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-serif font-semibold text-foreground mb-2">
                    Supportive
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We're here to help, not to lecture or restrict.
                  </p>
                </div>

                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-lavender-100 flex items-center justify-center">
                    <HeartHandshake className="w-8 h-8 text-lavender-400" />
                  </div>
                  <h4 className="font-serif font-semibold text-foreground mb-2">
                    Non-Judgmental
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    No guilt-tripping, no shame — just understanding.
                  </p>
                </div>

                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage-100 flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-sage-600" />
                  </div>
                  <h4 className="font-serif font-semibold text-foreground mb-2">
                    Never Restrictive
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We believe in balance, not deprivation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
