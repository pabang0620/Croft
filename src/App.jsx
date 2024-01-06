import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './layout/Layout';
import GlobalDashBoard from './pages/GlobalDashBoard';
import GlobalReport from './pages/GlobalReport';
import SingleDashBoard from './pages/SingleDashBoard';
import SingleFarmTotal from './pages/SingleFarm/SingleFarmTotal';
import SingleFarmRTR from './pages/SingleFarm/SingleFarmRTR';
import SingleFarmDLI from './pages/SingleFarm/SingleFarmDLI';
import SingleFarmVPD from './pages/SingleFarm/SingleFarmVPD';
import SingleFarmPP from './pages/SingleFarm/SingleFarmPP';
import SingleSales from './pages/SingleSales';
import SingleResource from './pages/SingleResource';
import SingleReport from './pages/SingleReport';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout sub="basic" />}>
          <Route path="/" element={<GlobalDashBoard />} />

          {/* 환경설정의 route 부분은 현재 기획에 포함되어 있지 않아 생략 */}
          <Route path="/farm/environment/total" element={<SingleFarmTotal />} />
          <Route path="/farm/environment/RTR" element={<SingleFarmRTR />} />
          <Route path="/farm/environment/DLI" element={<SingleFarmDLI />} />
          <Route path="/farm/environment/VPD" element={<SingleFarmVPD />} />
          <Route path="/farm/environment/PP" element={<SingleFarmPP />} />
          <Route path="/single-sales" element={<SingleSales />} />
          <Route path="/single-resource" element={<SingleResource />} />
          <Route path="/single-report" element={<SingleReport />} />
        </Route>
        <Route element={<Layout sub="report" />}>
          <Route path="/global-report" element={<GlobalReport />} />
        </Route>
        <Route element={<Layout sub="dash" />}>
          <Route path="/farm" element={<SingleDashBoard />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
