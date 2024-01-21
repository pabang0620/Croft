import { useEffect } from "react";
import { useOutletContext } from "react-router";
import WonhoGrid from "../component/utils/DND/WonhoGrid";

const SingleDashBoard = () => {
  // const navigate = useNavigate();
  const { container, setContainer } = useOutletContext();
  useEffect(() => {
    setContainer("옥수수 컨테이너");
  }, []);

  return (
    <div className="pr-[12rem]">
      <WonhoGrid />
    </div>
  );
};

export default SingleDashBoard;
