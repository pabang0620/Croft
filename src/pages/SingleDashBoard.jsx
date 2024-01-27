import { useState, useEffect } from "react";
import WonhoGrid from "../component/utils/DND/WonhoGrid";
import DashSubBar from "../layout/NavBar/SubNavBar/DashSubBar";

const SingleDashBoard = () => {
  const [editMode, setEditMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [gridKey, setGridKey] = useState(0);

  useEffect(() => {
    if (!openModal) {
      // openModal이 false일 때 WonhoGrid 컴포넌트를 새로고침
      setGridKey((prevKey) => prevKey + 1);
    }
  }, [openModal]);

  return (
    <div className="flex flex-col scrollbar-hide">
      <DashSubBar
        editMode={editMode}
        setEditMode={setEditMode}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <div className="pr-[12rem] overflow-auto">
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
