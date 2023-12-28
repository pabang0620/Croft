export const CriticalOrWarn = ({ critical, warning }) => {
  if (critical) {
    return (
      <img
        className="w-[20px] h-[20px]"
        src={`${process.env.PUBLIC_URL}/assets/images/Control/WarningIcon.svg`}
        alt=""
      />
    );
  } else if (warning) {
    return (
      <img
        className="w-[20px] h-[20px]"
        src={`${process.env.PUBLIC_URL}/assets/images/Control/WarningIcon.svg`}
        alt=""
      />
    );
  } else {
    return <></>;
  }
};
