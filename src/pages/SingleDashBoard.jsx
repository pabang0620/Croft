import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useOutletContext } from "react-router";
import { ComponentWrapper } from "../component/utils/DND/ComponentWrapper";
import TempDashPage from "../component/utils/DND/TempDashPage";
import WonhoGrid from "../component/utils/DND/WonhoGrid";

const SingleDashBoard = () => {
  // const navigate = useNavigate();
  const { container, setContainer } = useOutletContext();
  useEffect(() => {
    setContainer("옥수수 컨테이너");
  }, []);

  return (
    <div className="pr-[12rem]">
      {/* <div className="p-4 flex flex-row flex-wrap gap-[10px]">
        <DndProvider backend={HTML5Backend}>
          <ComponentWrapper />
        </DndProvider>
      </div> */}
      {/* <TempDashPage /> */}
      <WonhoGrid />
    </div>
  );
};

export default SingleDashBoard;
