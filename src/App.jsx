import React from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./layout/Layout";
import GlobalDashBoard from "./pages/GlobalDashBoard";
import GlobalReport from "./pages/GlobalReport";
import SingleDashBoard from "./pages/SingleDashBoard";
import SingleFarmTotal from "./pages/SingleFarm/SingleFarmTotal";
import SingleFarmRTR from "./pages/SingleFarm/SingleFarmRTR";
import SingleFarmDLI from "./pages/SingleFarm/SingleFarmDLI";
import SingleFarmVPD from "./pages/SingleFarm/SingleFarmVPD";
import SingleFarmPP from "./pages/SingleFarm/SingleFarmPP";
import SingleSales from "./pages/SingleSales";
import SingleSalesNYear from "./pages/SingleSalesNYear";
import SingleResource from "./pages/SingleResource";
import SingleReport from "./pages/SingleReport";
import GridLayoutTest from "./component/utils/DND/grid";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<GlobalDashBoard />} />
          {/* 환경설정의 route 부분은 현재 기획에 포함되어 있지 않아 생략 */}
          <Route path="/dash" element={<SingleDashBoard />} />
          <Route path="/dash/environment/total" element={<SingleFarmTotal />} />
          <Route path="/dash/environment/RTR" element={<SingleFarmRTR />} />
          <Route path="/dash/environment/DLI" element={<SingleFarmDLI />} />
          <Route path="/dash/environment/VPD" element={<SingleFarmVPD />} />
          <Route path="/dash/environment/PP" element={<SingleFarmPP />} />
          <Route path="/global-report" element={<GlobalReport />} />
          <Route path="/single-sales" element={<SingleSales />} />
          <Route
            path="/single-sales/years/:year"
            element={<SingleSalesNYear />}
          />
          <Route path="/single-resource" element={<SingleResource />} />
          <Route path="/single-report" element={<SingleReport />} />
          <Route path="/grid" element={<GridLayoutTest />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
