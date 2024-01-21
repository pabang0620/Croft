export const TotalItems = [
  { id: "TotalScore", text: "종합 온실관리 평가 스코어", default: true, chartKey: 1 },
  { id: "CroftGuide", text: "CROFT 온실 관리 가이드", default: true , chartKey: 2},
  { id: "GreenhouseTotal", text: "온실환경 종합", default: true , chartKey: 3},
  { id: "ResourceTotal", text: "자원사용량 종합", default: false , chartKey: 4},
];

export const GreenhouseItems = [
  { id: "DailyWaterSupply", text: "일일 급수 데이터", default: true , chartKey: 5},
  { id: "WeeklyTemp", text: "주간 평균 온도", default: true , chartKey: 6},
  { id: "DailyTempChange", text: "일일 온도 변화", default: false , chartKey: 7},
  { id: "DailyHumidityChange", text: "일일 습도 변화", default: false , chartKey: 8},
  { id: "DailySolarChange", text: "일일 광량 변화", default: false , chartKey: 9},
  { id: "DailyCO2Change", text: "일일 CO2 변화", default: false , chartKey: 10},
];

export const GrowthDir = [
  { id: "RTR", text: "RTR", default: true , chartKey: 11},
  { id: "DailyRTR", text: "일일 RTR 변화", default: false , chartKey: 12},
  { id: "DLI", text: "DLI", default: true , chartKey: 13},
  { id: "WeeklyDLI", text: "주간 DLI", default: false , chartKey: 14},
  { id: "PHOTOPERIOD", text: "PHOTOPERIOD", default: true , chartKey: 15},
  { id: "WeeklyPHOTOPERIOD", text: "주간 PHOTOPERIOD", default: false , chartKey: 16},
  { id: "VPD", text: "VPD", default: true , chartKey: 17},
  { id: "VPDDetail", text: "VPD 상세", default: false , chartKey: 18},
];

export const ResourceUse = [
  { id: "DailyElecUse", text: "일일 전기사용량", default: false , chartKey: 19},
  { id: "DailyGasUse", text: "일일 가스사용량", default: false , chartKey: 20},
  { id: "DailyWaterUse", text: "일일 물 사용량  ", default: false , chartKey: 21},
  { id: "DailyCO2Use", text: "일일 CO2 사용량  ", default: false , chartKey: 22},
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
