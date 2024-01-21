import { useState } from 'react';
import { useOutletContext } from 'react-router';
import WonhoGrid from '../component/utils/DND/WonhoGrid';
import EditLayout from '../component/utils/DND/EditLayout';

const SingleDashBoard = () => {
  const [editMode, setEditMode] = useState(false); // 수정 모드 상태

  return (
    <div className="pr-[12rem]">
      <WonhoGrid />
    </div>
    // <div className="pr-[12rem]">
    //   <EditLayout editMode={editMode} setEditMode={setEditMode} />
    // </div>
  );
};

export default SingleDashBoard;
