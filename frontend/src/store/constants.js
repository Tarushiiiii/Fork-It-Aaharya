import {
  AlertCircle,
  Baby,
  BookOpen,
  Brain,
  Briefcase,
  Candy,
  Cloud,
  Cookie,
  Droplet,
  Flame,
  Heart,
  Leaf,
  MessageCircle,
  Minus,
  Moon,
  Pizza,
  Smile,
  Soup,
  Sprout,
  Zap,
} from "lucide-react";

export const lifeSituations = [
  { id: "student", label: "Student", Icon: BookOpen },
  { id: "working", label: "Working Professional", Icon: Briefcase },
  { id: "married", label: "Married", Icon: Heart },
  { id: "childcare", label: "Managing Childcare", Icon: Baby },
];

export const lifeStages = [
  { id: "menarche", label: "Menarche (First Periods)", Icon: Sprout },
  { id: "regular", label: "Regular Menstruation", Icon: Moon },
  { id: "menopause", label: "Menopause", Icon: Leaf },
];

export const pregnancyPhases = [
  { id: "none", label: "Not Applicable", Icon: Minus },
  { id: "pre", label: "Trying to Conceive", Icon: MessageCircle },
  { id: "during", label: "Currently Pregnant", Icon: Heart },
  { id: "post", label: "Postpartum", Icon: Baby },
];

export const MOODS = [
  { id: "happy", label: "Happy", icon: Smile },
  { id: "tired", label: "Tired", icon: Moon },
  { id: "stressed", label: "Stressed", icon: AlertCircle },
  { id: "anxious", label: "Anxious", icon: Brain },
  { id: "calm", label: "Calm", icon: Cloud },
  { id: "energetic", label: "Energetic", icon: Zap },
];

export const CRAVINGS = [
  { id: "sweet", label: "Sweet", icon: Candy },
  { id: "spicy", label: "Spicy", icon: Flame },
  { id: "salty", label: "Salty", icon: Droplet },
  { id: "cheesy", label: "Cheesy", icon: Pizza },
  { id: "crunchy", label: "Crunchy", icon: Cookie },
  { id: "comfort", label: "Comfort", icon: Soup },
];
