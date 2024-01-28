const IncreaseUpDown = ({ increase }) => {
  return (
    <div
      className={`${
        increase >= 0
          ? increase === 0
            ? 'text-info'
            : 'text-accent'
          : 'text-error'
      }`}
    >
      {increase >= 0 ? (increase === 0 ? '-' : '↑') : '↓'}
      {increase === 0 ? ' 0%' : `${Math.abs(increase)}%`}
    </div>
  );
};

export default IncreaseUpDown;
