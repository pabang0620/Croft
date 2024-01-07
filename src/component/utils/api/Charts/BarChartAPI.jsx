// BarChartAPI.jsx
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async (apiPath) => {
    const { data } = await axios.get(apiPath);
    return data;
  };
  
  export const useChartData = (apiPath, queryKey) => {
    return useQuery({
      queryKey: [queryKey],
      queryFn: () => fetchData(apiPath),
    });
  };

