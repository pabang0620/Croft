import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useNavigate } from 'react-router-dom';
import { ComponentWrapper } from '../component/utils/DND/ComponentWrapper';

const SingleDashBoard = () => {
  // const navigate = useNavigate();
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
