const CommentBox = ({ text }) => {
  return (
    <div className="flex w-full m-h-[90px] h-fit py-[10px] bg-base200 rounded-md">
      <img
        className="ml-[12px] mr-[23px] w-[31px] h-[31px]"
        src={`${process.env.PUBLIC_URL}/assets/images/Report/CommentIcon.svg`}
        alt=""
      />
      <div className="w-[949px] text-wrap whitespace-pre-wrap text-base font-normal">
        {text}
      </div>
    </div>
  );
};

export default CommentBox;
