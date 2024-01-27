import React from 'react';
import SliderDiv from '../../../component/Graphs/VentSliderDiv';
import { useChartData } from '../../../component/utils/api/Charts/ChartAPI';

export function NavBarModalVent() {
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/farms/measurement/current`,
    'Current5MinData'
  );
  if (data?.data.obj_data && !isLoading) {
    return (
      <div className="w-[295px] h-[92px] shrink-0 rounded-lg bg-[#F1F1F1] my-5 flex justify-around flex-col text-sm font-semibold leading-normal pl-[15px]">
        <div>Vent</div>
        <div className="flex flex-row gap-2">
          <div>
            {/* Climate5_VentPos_LeeSide */}
            <SliderDiv
              width="130px"
              currentValue={data.data.obj_data.Climate5_VentPos_LeeSide}
              reverse={true}
            />
            <div className="text-center">LEE</div>
          </div>
          <div>
            {/* Climate5_VentPos_WindSide */}
            <SliderDiv
              width="130px"
              currentValue={data.data.obj_data.Climate5_VentPos_WindSide}
              reverse={false}
            />
            <div className="text-center">WIND</div>
          </div>
        </div>
      </div>
    );
  }
}
