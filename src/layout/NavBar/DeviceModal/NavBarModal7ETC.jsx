import React from 'react';
import NavBarModal7ETCItem from './NavBarModal7ETCItem';
import { useChartData } from '../../../component/utils/api/Charts/ChartAPI';

export function NavBarModal7ETC() {
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/farms/measurement/current`,
    'Current5MinData'
  );

  const fansData = [
    {
      id: 1,
      name: 'Fan',
      isOn: true,
      disconnect: false,
      data: data?.data.obj_data.PadFan5_Pump_Active,
      unit: '',
    }, //"PadFan5_Pump_Active"
    {
      id: 2,
      name: 'FCU',
      isOn: false,
      disconnect: false,
      data: data?.data.obj_data.HeatingFCU5_Pump_Actuation,
      unit: '',
    }, //"HeatingFCU5_Pump_Actuation"
    {
      id: 3,
      name: 'Fogging',
      isOn: true,
      disconnect: true,
      data: null,
      unit: '',
    }, //none
    { id: 4, name: 'LED', isOn: false, disconnect: true, data: null, unit: '' }, //none
    {
      id: 5,
      name: 'CO2 Valve',
      isOn: true,
      disconnect: false,
      data: data?.data.obj_data.Co2Control5_Release,
      unit: '',
    }, //Co2Control5_Release
    {
      id: 6,
      name: 'Irrigation Pump',
      isOn: false,
      disconnect: false,
      data: data?.data.obj_data.Unit5_Pump_Actuation,
      unit: '',
    }, //Unit5_Pump_Actuation
    {
      id: 7,
      name: 'Heating Pipe',
      isOn: true,
      disconnect: false,
      data: data?.data.obj_data.HeatingRail5_Pump_Actuation,
      unit: '',
    }, //HeatingRail5_Pump_Actuation
  ];

  if (data?.data.obj_data && !isLoading) {
    return (
      <>
        {fansData.map((fan) => (
          <NavBarModal7ETCItem
            key={fan.id}
            name={fan.name}
            isOn={fan.isOn}
            disconnect={fan.disconnect}
            data={fan.data}
            unit={fan.unit}
          />
        ))}
      </>
    );
  }
}
