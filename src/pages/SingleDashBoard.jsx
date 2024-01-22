import { useState } from 'react';
import { useOutletContext } from 'react-router';
import WonhoGrid from '../component/utils/DND/WonhoGrid';
import DashSubBar from '../layout/NavBar/SubNavBar/DashSubBar';
import EditLayout from '../component/utils/DND/EditLayout';

const SingleDashBoard = () => {
  const [editMode, setEditMode] = useState(false); // 수정 모드 상태

  return (
    <div className="flex flex-col scrollbar-hide">
      <DashSubBar editMode={editMode} setEditMode={setEditMode} />
      <div className="pr-[12rem] overflow-auto">
        <WonhoGrid editMode={editMode} setEditMode={setEditMode} />
      </div>
    </div>
    // <div className="pr-[12rem]">
    //   <EditLayout editMode={editMode} setEditMode={setEditMode} />
    // </div>
  );
};

export default SingleDashBoard;
