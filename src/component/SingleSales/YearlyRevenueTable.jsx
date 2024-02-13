import IncreaseUpDown from './IncreaseUpDown';
import { useChartData } from '../utils/api/Charts/ChartAPI';

const YearlyRevenue = ({ years, period }) => {
  //데이터 호출
  const { data, isLoading } = useChartData(
    `${
      process.env.REACT_APP_BASE_API_KEY
    }/v1/farms/comparison/revenue?period=yearly&year=${years - period}`,
    `comparison-revenue-yearly-${years}-${period}}`
  );

  return (
    <div className="flex flex-col h-fit bg-white rounded-[10px] pt-[18px] pl-[25px] pr-[14px] pb-[21px] gap-[15px] font-sans">
      <div className="text-lg font-bold">연간 월별 매출 현황</div>
      {!isLoading && (
        <div className="w-full">
          <table className="min-w-full text-sm divide-y divide-x divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info border border-[#B9B9B9]"
                >
                  연
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info  border border-[#B9B9B9]"
                >
                  매출
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info border border-[#B9B9B9]"
                >
                  순이익
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info  border border-[#B9B9B9]"
                >
                  순이익률
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info  border border-[#B9B9B9]"
                >
                  매출 증감
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
                    {item.year}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                    {item.revenue?.toLocaleString('ko-KR')}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                    {item.profit?.toLocaleString('ko-KR')}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                    {item.profit_margin?.toLocaleString('ko-KR')}%
                  </td>
                  <td className="px-4 py-2 min-w-[89px] whitespace-nowrap border border-[#B9B9B9]">
                    {item.revenue_increase || item.revenue_increase === 0 ? (
                      <IncreaseUpDown increase={item.revenue_increase} />
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default YearlyRevenue;
