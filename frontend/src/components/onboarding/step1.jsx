import { lifeSituations } from "../../store/constants";
import { Button } from "../ui/button";
import { cn } from "../../libs/utils";
import { Check } from "lucide-react";

export const Step1 = ({ selections, handleSelect }) => {
  return (
    <div>
      <h1 className="text-3xl font-serif text-center mb-6">
        Tell us about yourself
      </h1>

      <div className="grid sm:grid-cols-2 gap-4" role="radiogroup">
        {lifeSituations.map((o) => (
          <button
            key={o.id}
            role="radio"
            aria-checked={selections.lifeSituation === o.id}
            onClick={() => handleSelect("lifeSituation", o.id)}
            className={cn(
              "p-6 rounded-2xl border-2 text-left",
              selections.lifeSituation === o.id
                ? "border-primary bg-sage-50"
                : "border-sage-200",
            )}
          >
            <o.Icon className="w-8 h-8 mb-2 text-primary" />
            <span>{o.label}</span>
            {selections.lifeSituation === o.id && (
              <Check className="w-5 h-5 mt-2 text-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
