import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchWeatherData = async () => {
  const response = await axios.get("/api/v1/weather");
  return response.data;
};

const ChartData = () => {
  const { data, isLoading, error } = useQuery(
    ["weatherData"],
    fetchWeatherData
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  // 여기에 날씨 데이터를 이용한 차트 또는 UI 컴포넌트를 렌더링합니다.
  return <div>{/* 차트 또는 데이터 표시 */}</div>;
};

export default ChartData;
