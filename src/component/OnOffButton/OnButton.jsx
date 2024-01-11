import React from 'react';
import OnOffToggle from '../../layout/NavBar/AIControlModal/OnOffToggle';

const OnButton = ({ fontSize, click, setClick }) => {
  return (
    <div className="flex flex-row">
      <div className={`${fontSize} mt-0.5 font-semibold leading-normal mr-2`}>
        {click ? '자동' : '수동'}
      </div>
      <OnOffToggle click={click} setClick={setClick} type="small" />
    </div>
  );
};

export default OnButton;
