import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './layout/Layout';
import GlobalDashBoard from './pages/GlobalDashBoard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<GlobalDashBoard />} />
          </Routes>
        </Router>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
