export const single1 = {
  critical: { temp: true, humidity: false, solar: true, co2: false },
  warning: false,
};
export const single2 = {
  critical: { temp: false, humidity: false, solar: false, co2: false },
  warning: true,
};
export const single3 = {
  critical: { temp: false, humidity: false, solar: false, co2: false },
  warning: false,
};
export const single4 = {
  critical: { temp: false, humidity: false, solar: false, co2: false },
  warning: true,
};
export const single5 = {
  critical: { temp: false, humidity: false, solar: false, co2: false },
  warning: false,
};

export const CriticalSeq = (critical) => {
  const criticalSeq = [
    critical.temp,
    critical.humidity,
    critical.solar,
    critical.co2,
  ];
  return criticalSeq;
};

export const iconSeq = ['temp', 'humidity', 'solar', 'co2'];
