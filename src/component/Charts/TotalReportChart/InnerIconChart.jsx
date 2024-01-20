import { useChartData } from '../../utils/api/Charts/ChartAPI';
import NavBarModalHeader from '../../../layout/NavBar/DeviceModal/NavBarModalHeader';

const InnerIconChart = ({ size }) => {
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/farms/measurement/current`,
    'Current5MinData'
  );

  if (data?.data.obj_data && !isLoading) {
    return (
      <div className="w-full h-full grid grid-cols-4 gap-4">
        <NavBarModalHeader
          imgName="temp"
          detail={`${data.data.obj_data.Climate5_GreenhouseTemp}℃`}
          warning={true}
          size={size}
        />
        <NavBarModalHeader
          imgName="humidity"
          detail={`${data.data.obj_data.Climate5_RH}%`}
          warning={false}
          size={size}
        />
        <NavBarModalHeader
          imgName="solar"
          detail={`${data.data.obj_data.Meteo_Radiation}w/m²`}
          warning={false}
          size={size}
        />
        <NavBarModalHeader
          imgName="co2"
          detail={`${data.data.obj_data.Co2Control5_Measurement}ppm`}
          warning={false}
          size={size}
        />
      </div>
    );
  }
};

export default InnerIconChart;
