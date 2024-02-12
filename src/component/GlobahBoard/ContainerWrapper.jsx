import SingleContainer from './SingleContainer';
import { useChartData } from '../utils/api/Charts/ChartAPI';
import {
  single1,
  single2,
  single3,
  single4,
  single5,
} from '../utils/Data/ContainerData';

const ContainerWrapper = ({ setContainer }) => {
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/farms/container-list`,
    'container-list'
  );

  // 임의로 아래와 같이 구성해둠
  return (
    <>
      {!isLoading ? (
        <div className="flex flex-wrap gap-[30px]">
          <SingleContainer
            data={data?.data[0]}
            disconnect={false}
            critical={single1.critical}
            warning={single1.warning}
            setContainer={setContainer}
          />
          <SingleContainer
            data={data?.data[1]}
            disconnect={false}
            critical={single2.critical}
            warning={single2.warning}
            setContainer={setContainer}
          />
          <SingleContainer
            data={data?.data[2]}
            disconnect={false}
            critical={single3.critical}
            warning={single3.warning}
            setContainer={setContainer}
          />
          <SingleContainer
            data={data?.data[3]}
            disconnect={false}
            critical={single4.critical}
            warning={single4.warning}
            setContainer={setContainer}
          />
          <SingleContainer
            data={data?.data[4]}
            disconnect={true}
            critical={single5.critical}
            warning={single5.warning}
            setContainer={setContainer}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ContainerWrapper;
