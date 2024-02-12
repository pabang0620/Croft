const IncreaseUpDown = ({ last, current }) => {
  let increase = 0;
  if (last === 0) {
    increase = Math.round(((current - last) / 1) * 100);
  } else {
    increase = Math.round(((current - last) / Math.abs(last)) * 100);
  }

  return (
    <div
      className={`flex gap-2 ${
        increase >= 0
          ? increase === 0
            ? 'text-info'
            : 'text-error'
          : 'text-accent'
      }`}
    >
      <div>
        {increase >= 0
          ? increase === 0
            ? '0'
            : `+${(current - last).toLocaleString('ko-KR')}`
          : `${(current - last).toLocaleString('ko-KR')}`}
      </div>
      <div>
        {increase >= 0 ? (increase === 0 ? '-' : '↑') : '↓'}
        {increase === 0 ? ' 0%' : `${Math.abs(increase)}%`}
      </div>
    </div>
  );
};

export default IncreaseUpDown;
