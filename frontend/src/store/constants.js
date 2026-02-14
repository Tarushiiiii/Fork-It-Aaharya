import {
  Baby,
  BookOpen,
  Briefcase,
  Heart,
  Leaf,
  MessageCircle,
  Minus,
  Moon,
  Sprout,
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
