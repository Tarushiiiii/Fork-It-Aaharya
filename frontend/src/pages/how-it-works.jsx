import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  User,
  Calendar,
  Brain,
  Heart,
  Briefcase,
  Moon,
  Baby,
  Clock,
  Zap,
  BookOpen,
  Salad,
  CircleDot,
  Sprout,
  Sun,
  Leaf,
  Smile,
  Frown,
  Angry,
  BatteryLow,
  HeartPulse,
  Flame,
  Pizza,
  Candy,
  Grip,
  Soup,
  Apple
} from "lucide-react";

const moods = [
  { label: "Calm", icon: Smile },
  { label: "Low", icon: Frown },
  { label: "Stressed", icon: Angry },
  { label: "Tired", icon: BatteryLow },
  { label: "Happy", icon: HeartPulse },
  { label: "Emotional", icon: Heart }
];

const cravings = [
  { label: "Spicy", icon: Flame },
  { label: "Cheesy", icon: Pizza },
  { label: "Sweet", icon: Candy },
  { label: "Crunchy", icon: Grip },
  { label: "Warm", icon: Soup },
  { label: "Fresh", icon: Apple }
];

export const HowItWorks = () => {
  return (
    <PageLayout>
      {/* Your full JSX remains exactly the same */}
    </PageLayout>
  );
};

const Phase = ({ icon: Icon, label, desc }) => (
  <div className="p-4 bg-card rounded-xl border text-center">
    <Icon className="w-6 h-6 mx-auto mb-2" />
    <p className="text-sm font-medium">{label}</p>
    <p className="text-xs text-muted-foreground">{desc}</p>
  </div>
);

const Card = ({ title, icon: Icon, children, className }) => (
  <div className="p-8 rounded-2xl bg-card border shadow-soft">
    <h3 className="text-xl font-serif font-semibold mb-4 flex items-center gap-2">
      {Icon && <Icon className={className || "w-5 h-5"} />}
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">{children}</div>
  </div>
);

const Chip = ({ icon: Icon, label }) => (
  <span className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm">
    <Icon className="w-4 h-4" />
    {label}
  </span>
);