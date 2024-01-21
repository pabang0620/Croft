import { useState, useEffect } from 'react';
import { ItemsCheck } from '../utils/Icons';
import {
  checkboxDefault,
  itemArray,
  titleArray,
} from '../utils/Data/ItemsData';
const EditItems = ({ setOpenModal, removeComponent, addComponent }) => {
  const [items, setItems] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedTotal, setIsCheckedTotal] = useState(
    checkboxDefault('total')
  );
  const [isCheckedGreen, setIsCheckedGreen] = useState(
    checkboxDefault('green')
  );
  const [isCheckedGrowth, setIsCheckedGrowth] = useState(
    checkboxDefault('growth')
  );
  const [isCheckedResource, setIsCheckedResource] = useState(
    checkboxDefault('resource')
  );
  const stateArray = [
    isCheckedTotal,
    isCheckedGreen,
    isCheckedGrowth,
    isCheckedResource,
  ];
  const setStateArray = [
    setIsCheckedTotal,
    setIsCheckedGreen,
    setIsCheckedGrowth,
    setIsCheckedResource,
  ];

  const handleCheckboxChange = (state, setState, idx, key) => {
    let temp = state;
    temp[idx] = !temp[idx];
    setState(temp);
    if (temp === true) removeComponent(key);
    else addComponent(key);
  };

  useEffect(() => {
    setIsCheckedTotal(isCheckedTotal);
    setIsCheckedGreen(isCheckedGreen);
    setIsCheckedGrowth(isCheckedGrowth);
    setIsCheckedResource(isCheckedResource);
  }, [isChecked]);

  const handleTitle = (title) => {
    return <div className=" text-base font-semibold mb-[5px]">{title}</div>;
  };
  return (
    <div className="w-screen h-screen bg-black/20 flex items-center justify-center relative">
      <div
        className="absolute top-0 left-0 w-screen h-screen"
        onClick={() => setOpenModal(false)}
      />
      <div className="w-[386px] h-[50vh] flex flex-col bg-white shadow-lg rounded-[10px] text-info py-[10px] px-[15px] z-20 relative">
        <div className="flex justify-between">
          <div className="text-bold text-lg">대시보드 아이템 편집</div>
          <img
            className="w-[20px]"
            src="/assets/images/DashBoard/GuideCloseBtn.svg"
            alt=""
            onClick={() => setOpenModal(false)}
          />
        </div>

        <div className="flex flex-col overflow-auto scrollbar-hide pl-[16px] pr-[13px] mt-[20px] ">
          {titleArray.map((title, i) => (
            <div className="mb-[24px]">
              <>{handleTitle(title)}</>
              <div className="flex flex-col gap-[8px]">
                {itemArray[i].map((item, idx) => (
                  <label
                    className="flex items-center space-x-2 cursor-pointer rounded-[10px] bg-base200 w-[327px] h-[38px]"
                    key={item.id}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={isChecked}
                      onClick={() => setIsChecked(!isChecked)}
                      onChange={() =>
                        handleCheckboxChange(
                          stateArray[i],
                          setStateArray[i],
                          idx,
                          item.chartKey
                        )
                      }
                    />
                    <div>
                      {/* {ItemsCheck(isCheckedTotal[idx] ? 'black' : '#B7B7B7')} */}
                      {ItemsCheck(stateArray[i][idx] ? 'black' : '#B7B7B7')}
                    </div>
                    <span className="text-xs">{item.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditItems;
