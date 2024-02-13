import { useChartData } from '../utils/api/Charts/ChartAPI';

const YearlyTotalCost = ({ years, period }) => {
  //데이터 호출
  const { data, isLoading } = useChartData(
    `${
      process.env.REACT_APP_BASE_API_KEY
    }/v1/farms/comparison/expense?period=yearly&year=${years - period}`,
    `comparison-expense-yearly-${years}-${period}}`
  );

  return (
    <div className="flex flex-col h-fit min-w-[650px] bg-white rounded-[10px] pt-[18px] pl-[25px] pr-[14px] pb-[21px] gap-[15px] font-sans">
      <div className="text-lg font-bold">연간 비용 현황</div>
      {!isLoading && (
        <div className="w-full">
          <table className="min-w-full text-sm divide-y divide-x divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info border border-[#B9B9B9]"
                >
                  연도
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info  border border-[#B9B9B9]"
                >
                  인건비
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info border border-[#B9B9B9]"
                >
                  고정비
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info  border border-[#B9B9B9]"
                >
                  전기요금
                </th>
                {/* <th
                  scope="col"
                  className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info  border border-[#B9B9B9]"
                >
                  가스요금
                </th> */}
                <th
                  scope="col"
                  className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info  border border-[#B9B9B9]"
                >
                  수도요금
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info  border border-[#B9B9B9]"
                >
                  총계
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
                    {item.personnel_expense?.toLocaleString('ko-KR')}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                    {item.fixed_cost?.toLocaleString('ko-KR')}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                    {item.electricity_bill?.toLocaleString('ko-KR')}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                    {item.water_bill?.toLocaleString('ko-KR')}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                    {item.total?.toLocaleString('ko-KR')}
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

export default YearlyTotalCost;
