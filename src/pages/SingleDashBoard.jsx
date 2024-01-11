import { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router';
import { ComponentWrapper } from '../component/utils/DND/ComponentWrapper';

const SingleDashBoard = () => {
  // const navigate = useNavigate();
  const { setTitle } = useOutletContext();
  useEffect(() => {
    setTitle('옥수수 컨테이너');
  }, []);

  return (
    <div>
      <div className="p-4 flex flex-row flex-wrap gap-[10px]">
        <DndProvider backend={HTML5Backend}>
          <ComponentWrapper />
        </DndProvider>
      </div>
    </div>
  );
};

export default SingleDashBoard;
