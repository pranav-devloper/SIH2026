import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import MainLayout from './layouts/MainLayout';

// Public Pages
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import MethodologyPage from './pages/MethodologyPage';

// Protected Pages
import DashboardPage from './pages/DashboardPage';
import AirfareIndexPage from './pages/AirfareIndexPage';
import RouteAnalyticsPage from './pages/RouteAnalyticsPage';
import AirlineAnalyticsPage from './pages/AirlineAnalyticsPage';
import BookingWindowPage from './pages/BookingWindowPage';
import HeatmapPage from './pages/HeatmapPage';
import HistoricalDataPage from './pages/HistoricalDataPage';
import DataQualityPage from './pages/DataQualityPage';
import ScraperStatusPage from './pages/ScraperStatusPage';
import BacktestingPage from './pages/BacktestingPage';
import ApiDocsPage from './pages/ApiDocsPage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/methodology" element={<MethodologyPage />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/index-explorer" element={<AirfareIndexPage />} />
            <Route path="/routes" element={<RouteAnalyticsPage />} />
            <Route path="/airlines" element={<AirlineAnalyticsPage />} />
            <Route path="/booking-windows" element={<BookingWindowPage />} />
            <Route path="/heatmap" element={<HeatmapPage />} />
            <Route path="/historical" element={<HistoricalDataPage />} />
            <Route path="/data-quality" element={<DataQualityPage />} />
            <Route path="/data-collection" element={<ScraperStatusPage />} />
            <Route path="/backtesting" element={<BacktestingPage />} />
            <Route path="/api-docs" element={<ApiDocsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
