export const handleDateChange = (date) => {
  
  const getISOWeek = (date) => {
    const dt = new Date(date.getTime());
    dt.setHours(dt.getHours() + 168); // 주의 시작일이 월요일이라서 7일을 더해줌
    dt.setHours(0, 0, 0);
    dt.setDate(dt.getDate() + 4 - (dt.getDay() || 7)); // 목요일로 이동

    const startOfYear = new Date(dt.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(((dt - startOfYear) / 86400000 + 1) / 7);

    return weekNumber;
  };

  // 정규표현식을 사용하여 yyyy.MM.DD 형태의 문자열을 분리
  const [year, month, day] = date.split('.');

  // JavaScript Date 객체 생성
  const inputDateObject = new Date(`${year}-${month}-${day}`);

  // 월과 주차 계산
  const monthValue = inputDateObject.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더함
  const weekNumber = getISOWeek(inputDateObject);

  // 결과 설정
  return `입력한 날짜(${date})는 ${monthValue}월 ${weekNumber}주차`;
};

// ISO 주차를 계산하는 함수
