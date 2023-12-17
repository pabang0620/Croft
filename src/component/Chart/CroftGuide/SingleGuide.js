const SingleGuide = ({ id, text, currentGuide, setCurrentGuide }) => {
  const imgSrc = '/assets/images/DashBoard/GuideCloseBtn.svg';
  const handleRemove = (id) => {
    setCurrentGuide(currentGuide.filter((item) => item.id !== id));
  };

  return (
    <div className="flex items-center relative bg-base200 w-[618px] h-[38px] rounded-[10px]">
      <div className="flex text-xs  pl-[23px]">{text}</div>

      <div className="absolute right-[11px]" onClick={() => handleRemove(id)}>
        <img src={imgSrc} alt=""></img>
      </div>
    </div>
  );
};

export default SingleGuide;
