const OnOffToggle = ({ click, setClick, type }) => {
  if (type === 'big') {
    return (
      <div className="flex items-center">
        <button
          className={`w-[30px] h-[17px] flex items-center rounded-full p-[2.5px] transition-colors duration-300 focus:outline-none ${
            click ? 'bg-accent' : 'bg-base400'
          }`}
          onClick={() => setClick(!click)}
        >
          <span
            className={`w-[14px] h-[14px] bg-white rounded-full shadow-md transform transition-transform ${
              click ? 'translate-x-[11.5px]' : 'translate-x-0'
            }`}
          ></span>
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        <button
          className={`w-[24px] h-[14px] flex items-center rounded-full p-[2px] transition-colors duration-300 focus:outline-none ${
            click ? 'bg-accent' : 'bg-base400'
          }`}
          onClick={() => setClick(!click)}
        >
          <span
            className={`w-[11px] h-[11px] bg-white rounded-full shadow-md transform transition-transform ${
              click ? 'translate-x-[9.5px]' : 'translate-x-0'
            }`}
          ></span>
        </button>
      </div>
    );
  }
};

export default OnOffToggle;
