export const ScoreImg = (score) => {
  switch (score) {
    case 5:
      return (
        <img src="/assets/images/DashBoard/PottedPlant5.svg" alt="plant" />
      );
    case 4:
      return (
        <img src="/assets/images/DashBoard/PottedPlant4.svg" alt="plant" />
      );
    case 3:
      return (
        <img src="/assets/images/DashBoard/PottedPlant3.svg" alt="plant" />
      );
    case 2:
      return (
        <img src="/assets/images/DashBoard/PottedPlant2.svg" alt="plant" />
      );
    case 1:
      return (
        <img src="/assets/images/DashBoard/PottedPlant1.svg" alt="plant" />
      );
    default:
      break;
  }
};
