import { Check } from "lucide-react";
import { cn } from "../../libs/utils";
import { pregnancyPhases } from "../../store/constants";

export const Step3 = ({ selections, handleSelect }) => {
  return (
    <div>
      <h1 className="text-3xl font-serif text-center mb-6">
        Pregnancy phase (optional)
      </h1>

      <div className="grid sm:grid-cols-2 gap-4" role="radiogroup">
        {pregnancyPhases.map((o) => (
          <button
            key={o.id}
            role="radio"
            aria-checked={selections.pregnancyPhase === o.id}
            onClick={() => handleSelect("pregnancyPhase", o.id)}
            className={cn(
              "p-6 rounded-2xl border-2 text-left",
              selections.pregnancyPhase === o.id
                ? "border-primary bg-sage-50"
                : "border-sage-200",
            )}
          >
            <o.Icon className="w-8 h-8 mb-2 text-primary" />
            <span>{o.label}</span>
            {selections.pregnancyPhase === o.id && (
              <Check className="w-5 h-5 mt-2 text-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
