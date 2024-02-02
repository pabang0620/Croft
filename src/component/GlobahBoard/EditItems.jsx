import { useState, useEffect } from "react";
import { ItemsCheck } from "../utils/Icons";
import { itemArray, titleArray } from "../utils/Data/ItemsData";

const EditItems = ({ setOpenModal }) => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const savedItems = localStorage.getItem("checkedItems");
    const parsedItems = savedItems ? JSON.parse(savedItems) : [];
    console.log("초기 로컬 스토리지 데이터:", parsedItems); // 초기 데이터 출력
    return parsedItems;
  });
  const handleCheckboxChange = (item) => {
    const newCheckedItems = checkedItems.includes(item.id)
      ? checkedItems.filter((id) => id !== item.id)
      : [...checkedItems, item.id];

    setCheckedItems(newCheckedItems);
    localStorage.setItem("checkedItems", JSON.stringify(newCheckedItems));
    console.log("업데이트된 로컬 스토리지 데이터:", newCheckedItems); // 업데이트된 데이터 출력
  };
  // -------------------------------------------------
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
        <div className="flex flex-col overflow-auto scrollbar-hide pl-[16px] pr-[13px] mt-[20px]">
          {titleArray.map((title, i) => (
            <div className="mb-[24px]">
              {handleTitle(title)}
              <div className="flex flex-col gap-[8px]">
                {itemArray[i].map((item) => (
                  <label
                    className="flex items-center space-x-2 cursor-pointer rounded-[10px] bg-base200 w-[327px] h-[38px]"
                    key={item.id}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={checkedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item)}
                    />
                    <div>
                      {ItemsCheck(
                        checkedItems.includes(item.id) ? "black" : "#B7B7B7"
                      )}
                    </div>
                    <span className="text-xs">{item.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default EditItems;
