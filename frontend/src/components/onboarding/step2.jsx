import { Check } from "lucide-react";
import { cn } from "../../libs/utils";
import { lifeStages } from "../../store/constants";

export const Step2 = ({ selections, handleSelect }) => {
  return (
    <div>
      <h1 className="text-3xl font-serif text-center mb-6">Your life stage</h1>

      <div className="space-y-4" role="radiogroup">
        {lifeStages.map((o) => (
          <button
            key={o.id}
            role="radio"
            aria-checked={selections.lifeStage === o.id}
            onClick={() => handleSelect("lifeStage", o.id)}
            className={cn(
              "w-full p-6 rounded-2xl border-2 flex items-center gap-4",
              selections.lifeStage === o.id
                ? "border-primary bg-sage-50"
                : "border-sage-200",
            )}
          >
            <o.Icon className="w-8 h-8 text-primary" />
            <span className="flex-1">{o.label}</span>
            {selections.lifeStage === o.id && (
              <Check className="w-5 h-5 text-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
