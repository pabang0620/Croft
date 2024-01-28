import IncreaseUpDown from './IncreaseUpDown';
import { useChartData } from '../utils/api/Charts/ChartAPI';

const LastYearProfit = ({ years }) => {
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/farms/comparison/last-year-profit`,
    'LastYearProfit'
  );

  return (
    <div className="flex flex-col w-[485px] min-h-[543px] bg-white rounded-[10px] pt-[18px] pl-[25px] pr-[14px] pb-[21px] gap-[15px] font-sans">
      <div className="text-lg font-bold">전년 대비 월별 순이익 현황</div>
      <div className="w-full">
        <table className="min-w-full text-sm divide-y divide-x divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info border border-[#B9B9B9]"
              >
                월
              </th>
              <th
                scope="col"
                className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info  border border-[#B9B9B9]"
              >
                {years - 1}년
              </th>
              <th
                scope="col"
                className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info border border-[#B9B9B9]"
              >
                {years}년
              </th>
              <th
                scope="col"
                className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info border border-[#B9B9B9]"
              >
                증감
              </th>
              <th
                scope="col"
                className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info  border border-[#B9B9B9]"
              >
                순이익률
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data?.data.map((item, index) => (
              <tr
                key={index}
                className="divide-x divide-[#B9B9B9] border border-[#B9B9B9]"
              >
                <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                  {item.month}월
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                  {item.last_year_profit?.toLocaleString('ko-KR')}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                  {item.this_year_profit?.toLocaleString('ko-KR')}
                </td>
                <td className="px-4 py-2 min-w-[89px] whitespace-nowrap border border-[#B9B9B9]">
                  {item.increase ? (
                    <IncreaseUpDown increase={item.increase} />
                  ) : (
                    <></>
                  )}
                </td>
                <td className="px-4 py-2 min-w-[89px] whitespace-nowrap border border-[#B9B9B9]">
                  {item.profit_margin
                    ? `${item.profit_margin}%`
                    : item.profit_margin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LastYearProfit;
