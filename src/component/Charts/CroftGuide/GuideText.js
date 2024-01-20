export const GuideLimit = (data, limit) => {
  let MAX = 3;
  if (limit) MAX = 3;
  else MAX = 100;
  return data.slice(0, MAX).map((item, idx) => ({
    id: idx,
    text: item,
    state: true,
  }));
};
