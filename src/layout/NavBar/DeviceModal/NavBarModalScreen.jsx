import React from 'react';
import SliderDiv from '../../../component/Graphs/ModalScreenSlider';
import { useChartData } from '../../../component/utils/api/Charts/ChartAPI';

export function NavBarModalScreen() {
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/farms/measurement/current`,
    'Current5MinData'
  );
  if (data?.data.obj_data && !isLoading) {
    return (
      <div className="w-[295px] shrink-0 rounded-lg bg-[#F1F1F1] my-5 flex justify-around flex-col text-sm font-semibold leading-normal">
        <div className='ml-[15px] mt-[8px]'>SCREEN</div>
        <div className="flex flex-col justify-around items-center">
          <div className="my-2">
            {/* Com5_Screen_Realized_Up */}
            <SliderDiv
              width="269px"
              currentValue={data.data.obj_data.Com5_Screen_Realized_Up}
              closed={false}
            />
          </div>
          <div className="my-2">
            {/* Com5_Screen_Realized_Down */}
            <SliderDiv
              width="269px"
              currentValue={data.data.obj_data.Com5_Screen_Realized_Down}
              closed={false}
            />
          </div>
          <div className="my-2">
            <SliderDiv width="269px" currentValue={0} closed={true} />
          </div>
          <div className="my-2">
            <SliderDiv width="269px" currentValue={0} closed={true} />
          </div>
        </div>
      </div>
    );
  }
}
