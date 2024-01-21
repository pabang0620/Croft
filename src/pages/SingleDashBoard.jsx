import { useState } from 'react';
import { useOutletContext } from 'react-router';
import WonhoGrid from '../component/utils/DND/WonhoGrid';
import DashSubBar from '../layout/NavBar/SubNavBar/DashSubBar';
import EditLayout from '../component/utils/DND/EditLayout';

const SingleDashBoard = () => {
  const [editMode, setEditMode] = useState(false); // 수정 모드 상태

  return (
    <div className="flex flex-col w-full h-full ">
      <div className="w-full max-h-full ">
        <EditLayout editMode={editMode} setEditMode={setEditMode} />
      </div>
      {/* <DashSubBar setEditMode={setEditMode} /> */}
    </div>
    // <div className="pr-[12rem]">
    //   <WonhoGrid />
    // </div>
  );
};

export default SingleDashBoard;
