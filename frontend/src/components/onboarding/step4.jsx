import { cn } from "../../libs/utils";
import { Button } from "../ui/button";

export const Step4 = ({ selections, handleSelect }) => {
  const cycleLengthNumber = Number(selections.cycleLength);
  const isCycleValid =
    !selections.cycleLength ||
    (cycleLengthNumber >= 20 && cycleLengthNumber <= 40);

  return (
    <div>
      <h1 className="text-3xl font-serif text-center mb-6">
        Cycle information
      </h1>

      <div className="p-8 rounded-2xl border space-y-6">
        <input
          type="date"
          value={selections.lastPeriod}
          onChange={(e) => handleSelect("lastPeriod", e.target.value)}
          className="w-full p-3 border rounded-xl"
        />

        <input
          type="number"
          placeholder="Cycle length (20–40 days)"
          value={selections.cycleLength}
          onChange={(e) => handleSelect("cycleLength", e.target.value)}
          className={cn(
            "w-full p-3 border rounded-xl",
            !isCycleValid && "border-red-400",
          )}
        />

        {!isCycleValid && (
          <p className="text-sm text-red-500">
            Cycle length must be between 20 and 40 days
          </p>
        )}
      </div>
    </div>
  );
};
