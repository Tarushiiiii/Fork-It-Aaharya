export const nutrientsForPhase = (phase) => {
  return (
    {
      menstrual: ["iron"],
      follicular: ["protein"],
      ovulation: ["fiber"],
      luteal: ["magnesium"],
    }[phase] || []
  );
};

export const getCyclePhaseInfo = (lastPeriod, cycleLength) => {
  const last = new Date(lastPeriod);
  const today = new Date();

  const diff = Math.floor(
    (today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)
  );

  const safeDiff = ((diff % cycleLength) + cycleLength) % cycleLength;
  const dayOfCycle = safeDiff + 1;

  if (dayOfCycle <= 5) {
    return {
      phase: "menstrual",
      dayInPhase: dayOfCycle,
      totalDaysInPhase: 5,
      dayOfCycle,
    };
  }

  if (dayOfCycle <= 14) {
    return {
      phase: "follicular",
      dayInPhase: dayOfCycle - 5,
      totalDaysInPhase: 9,
      dayOfCycle,
    };
  }

  if (dayOfCycle <= 17) {
    return {
      phase: "ovulation",
      dayInPhase: dayOfCycle - 14,
      totalDaysInPhase: 3,
      dayOfCycle,
    };
  }

  return {
    phase: "luteal",
    dayInPhase: dayOfCycle - 17,
    totalDaysInPhase: cycleLength - 17,
    dayOfCycle,
  };
};
