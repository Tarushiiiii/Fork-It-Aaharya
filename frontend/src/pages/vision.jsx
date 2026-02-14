import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, Quote, MessageCircle, Flower2, Smile } from "lucide-react";

export const Vision = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Our <span className="text-primary">Vision</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A world where food adapts to women — not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Main Quote */}
            <div className="relative p-8 rounded-3xl bg-card border shadow-card mb-16">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-sage-200" />
              <blockquote className="text-xl font-serif text-center pt-8">
                A non-judgmental, craving-aware, life-stage-aware nutrition companion
                that adapts to body, mood, resources, and reality.
              </blockquote>
            </div>

            {/* Core Beliefs */}
            <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
              What We Believe
            </h2>

            <div className="space-y-6 mb-16">
              <div className="p-6 rounded-2xl border hover:shadow-soft transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  Cravings Are Signals, Not Weaknesses
                </h3>
                <p className="text-muted-foreground">
                  When you crave chocolate before your period or need something crunchy
                  after a stressful day, your body is communicating.
                </p>
              </div>

              <div className="p-6 rounded-2xl border hover:shadow-soft transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 flex items-center gap-3">
                  <Flower2 className="w-5 h-5" />
                  Food Should Adapt to Women's Bodies
                </h3>
                <p className="text-muted-foreground">
                  From menarche to menopause, pregnancy to postpartum — your
                  nutritional needs are constantly evolving.
                </p>
              </div>

              <div className="p-6 rounded-2xl border hover:shadow-soft transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 flex items-center gap-3">
                  <Smile className="w-5 h-5" />
                  Healthy Eating Should Still Feel Tasty
                </h3>
                <p className="text-muted-foreground">
                  Healthy should not mean bland. Nourishing food should also
                  feel comforting and enjoyable.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/onboarding">
                <Button className="gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
