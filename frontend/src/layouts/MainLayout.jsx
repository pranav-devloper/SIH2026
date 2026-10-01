import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import DemoBanner from '../components/DemoBanner';
import {
  Plane,
  LayoutDashboard,
  TrendingUp,
  GitCommit,
  Calendar,
  Grid3X3,
  Database,
  CheckCircle2,
  Cpu,
  BarChart2,
  FileCode2,
  User,
  Menu,
  X
} from 'lucide-react';

export default function MainLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Airfare Index', path: '/index-explorer', icon: TrendingUp },
    { name: 'Route Analytics', path: '/routes', icon: GitCommit },
    { name: 'Airline Analytics', path: '/airlines', icon: BarChart2 },
    { name: 'Booking Windows', path: '/booking-windows', icon: Calendar },
    { name: 'Route Heatmap', path: '/heatmap', icon: Grid3X3 },
    { name: 'Historical Data', path: '/historical', icon: Database },
    { name: 'Data Quality', path: '/data-quality', icon: CheckCircle2 },
    { name: 'Data Collection', path: '/data-collection', icon: Cpu },
    { name: 'Backtesting', path: '/backtesting', icon: TrendingUp },
    { name: 'API Docs', path: '/api-docs', icon: FileCode2 },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <DemoBanner />

      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link to="/dashboard" className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-sky-600 flex items-center justify-center text-white shadow-md shadow-sky-600/20">
                  <Plane className="w-5 h-5 -rotate-45" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-lg tracking-tight text-slate-900">AirIndex</span>
                    <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-sky-100 text-sky-800">INDIA</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Aviation Price Intelligence</p>
                </div>
              </Link>
            </div>

            {/* Right Side: Profile */}
            <div className="hidden xl:flex items-center gap-2">
              <Link
                to="/profile"
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:border-sky-300 hover:text-sky-700 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex xl:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold ${
                    isActive ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-500">Demo access enabled</p>
            </div>
          </div>
        )}
      </header>

      <div className="flex flex-1">
        {/* Desktop Navigation Sidebar */}
        <aside className="hidden xl:flex w-64 shrink-0 flex-col bg-white border-r border-slate-200 sticky top-16 h-[calc(100vh-4rem)]">
          <div className="px-5 pt-6 pb-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Workspace</p>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 pb-6 space-y-1" aria-label="Application navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-600' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">AirIndex India</span>
            <span>— Real-Time Aviation Price Index & Statistical Intelligence Platform</span>
          </div>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-slate-800">About</Link>
            <Link to="/methodology" className="hover:text-slate-800">Methodology</Link>
            <Link to="/api-docs" className="hover:text-slate-800">API Documentation</Link>
            <a href="/docs" target="_blank" rel="noreferrer" className="hover:text-slate-800">Swagger OpenAPI</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
