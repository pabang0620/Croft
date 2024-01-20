export const TotalItems = [
  { id: "TotalScore", text: "종합 온실관리 평가 스코어", default: true },
  { id: "CroftGuide", text: "CROFT 온실 관리 가이드", default: true },
  { id: "GreenhouseTotal", text: "온실환경 종합", default: true },
  { id: "ResourceTotal", text: "자원사용량 종합", default: false },
];

export const GreenhouseItems = [
  { id: "DailyWaterSupply", text: "일일 급수 데이터", default: true },
  { id: "WeeklyTemp", text: "주간 평균 온도", default: true },
  { id: "DailyTempChange", text: "일일 온도 변화", default: false },
  { id: "DailyHumidityChange", text: "일일 습도 변화", default: false },
  { id: "DailySolarChange", text: "일일 광량 변화", default: false },
  { id: "DailyCO2Change", text: "일일 CO2 변화", default: false },
];

export const GrowthDir = [
  { id: "RTR", text: "RTR", default: true },
  { id: "DailyRTR", text: "일일 RTR 변화", default: false },
  { id: "DLI", text: "DLI", default: true },
  { id: "WeeklyDLI", text: "주간 DLI", default: false },
  { id: "PHOTOPERIOD", text: "PHOTOPERIOD", default: true },
  { id: "WeeklyPHOTOPERIOD", text: "주간 PHOTOPERIOD", default: false },
  { id: "VPD", text: "VPD", default: true },
  { id: "VPDDetail", text: "VPD 상세", default: false },
];

export const ResourceUse = [
  { id: "DailyElecUse", text: "일일 전기사용량", default: false },
  { id: "DailyGasUse", text: "일일 가스사용량", default: false },
  { id: "DailyWaterUse", text: "일일 물 사용량  ", default: false },
  { id: "DailyCO2Use", text: "일일 CO2 사용량  ", default: false },
];

export const itemArray = [TotalItems, GreenhouseItems, GrowthDir, ResourceUse];
export const titleArray = ["종합", "온실환경", "생장방향", "자원사용량"];
export const checkboxDefault = (type) => {
  switch (type) {
    case "total":
      return Array.from({ length: 4 }, (v, i) => TotalItems[i].default);
    case "green":
      return Array.from({ length: 6 }, (v, i) => GreenhouseItems[i].default);
    case "growth":
      return Array.from({ length: 8 }, (v, i) => GrowthDir[i].default);
    case "resource":
      return Array.from({ length: 4 }, (v, i) => ResourceUse[i].default);
    default:
      break;
  }
};
