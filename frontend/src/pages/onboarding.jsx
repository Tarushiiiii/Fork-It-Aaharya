import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { cn } from "../libs/utils";
import { Step1 } from "../components/onboarding/step1";
import { Step2 } from "../components/onboarding/step2";
import { Step3 } from "../components/onboarding/step3";
import { Step4 } from "../components/onboarding/step4";
// import { saveProfile } from "@/services/profile.api";

export const Onboarding = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selections, setSelections] = useState({
    lifeSituation: "",
    lifeStage: "",
    pregnancyPhase: "none",
    lastPeriod: "",
    cycleLength: "",
  });

  const handleSelect = (field, value) => {
    setSelections((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    if (currentStep === 1) return !!selections.lifeSituation;
    if (currentStep === 2) return !!selections.lifeStage;
    if (currentStep === 3) return true;
    if (currentStep === 4) return isCycleValid;
    return false;
  };

  const nextStep = () => {
    if (!canProceed()) return;
    if (currentStep < 4) setCurrentStep((s) => s + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const cycleLengthNumber = Number(selections.cycleLength);
  const isCycleValid =
    !selections.cycleLength ||
    (cycleLengthNumber >= 20 && cycleLengthNumber <= 40);

  const handleFinalSubmit = async () => {
    if (loading || !isCycleValid) return;

    setLoading(true);
    setError(null);

    try {
      await saveProfile({
        lifeSituation: selections.lifeSituation,
        lifeStage: selections.lifeStage,
        pregnancyPhase: selections.pregnancyPhase,
        lastPeriod: selections.lastPeriod || undefined,
        cycleLength: selections.cycleLength ? cycleLengthNumber : undefined,
      });

      navigate("/dashboard");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 min-h-[calc(100vh-5rem)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="flex justify-center gap-2 mb-12">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={cn(
                  "w-12 h-2 rounded-full",
                  step <= currentStep ? "bg-primary" : "bg-sage-200",
                )}
              />
            ))}
          </div>

          {/* STEP 1 */}
          {currentStep === 1 && (
            <Step1 selections={selections} handleSelect={handleSelect} />
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <Step2 selections={selections} handleSelect={handleSelect} />
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <Step3 selections={selections} handleSelect={handleSelect} />
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <Step4 selections={selections} handleSelect={handleSelect} />
          )}

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          {/* Navigation */}
          <div className="flex justify-between mt-12">
            <Button
              variant="soft"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={cn(currentStep === 1 && "opacity-0")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            {currentStep < 4 ? (
              <Button onClick={nextStep} disabled={!canProceed()}>
                Continue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleFinalSubmit}
                disabled={loading || !isCycleValid}
              >
                {loading ? "Setting things up..." : "Get Started"}
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
