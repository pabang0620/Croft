import { useState, useEffect } from "react";
import WonhoGrid from "../component/utils/DND/WonhoGrid";
import DashSubBar from "../layout/NavBar/SubNavBar/DashSubBar";

const SingleDashBoard = () => {
  const [editMode, setEditMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [gridKey, setGridKey] = useState(0); // WonhoGrid 컴포넌트의 key를 위한 상태

  useEffect(() => {
    // openModal 상태가 변경될 때마다 gridKey를 업데이트하여 WonhoGrid 재렌더링 유도
    console.log(openModal);
    if (!openModal) {
      setGridKey((prevKey) => prevKey + 1);
    }
  }, [openModal]);

  return (
    <div className="flex flex-col scrollbar-hide">
      <DashSubBar
        setEditMode={setEditMode}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <div className="pr-[12rem] overflow-auto">
        {/* key 속성을 사용하여 WonhoGrid 컴포넌트 재렌더링 유도 */}
        <WonhoGrid
          key={gridKey}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </div>
    </div>
  );
};

export default SingleDashBoard;
