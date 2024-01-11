export const ScoreText = (score) => {
  switch (score) {
    case 5:
      return {
        title: '온실 관리가 매우 잘 되고 있어요.',
        content: '관리 노하우를 저한테도 알려주세요.',
      };
    case 4:
      return {
        title: '온실 관리가 잘 되는 편이에요,',
        content: '새벽 스크린 조절에만 신경써주시면 좋겠어요.',
      };
    case 3:
      return {
        title: '온실 관리 상태가 무난한 상태에요.',
        content: '광량과 온도 조절에 신경써주세요.',
      };
    case 2:
      return {
        title: '온실 관리 상태에 조금 신경써주세요.',
        content: '광량과 온도 조절에 신경써주세요.',
      };
    case 1:
      return {
        title: '온실 관리 상태가 매우 좋지 않아요.',
        content: '광량과 온도 조절에 신경써주세요.',
      };
    default:
      break;
  }
};

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
