import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from './hooks/useAuth';
import Spinner from './components/atoms/Spinner';

// Admin Pages
import AdminLogin from './pages/Login';
import Dashboard from './pages/Dashboard';
import ScreeningManual from './pages/ScreeningManual';
import ScreeningOnline from './pages/ScreeningOnline';
import Monitoring from './pages/Monitoring';
import Officers from './pages/Officers';
import History from './pages/History';

// Frontend User Pages
import HomeScreen from './frontend/pages/HomeScreen';
import Education from './frontend/pages/Education';
import UserScreening from './frontend/pages/UserScreening';
import UserProfile from './frontend/pages/UserProfile';

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  return user ? children : <Navigate to="/admin/login" />;
};

function App() {
  useAuth();
  const { user } = useSelector((state) => state.auth);

  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Frontend User Routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/education" element={<Education />} />
        <Route path="/user-screening" element={<UserScreening />} />
        <Route path="/user-profile" element={<UserProfile />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
        {/* Redirect /dashboard ke /admin/dashboard */}
        <Route path="/dashboard" element={<Navigate to="/admin/dashboard" replace />} />
        
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/screening-manual"
          element={
            <PrivateRoute>
              <ScreeningManual />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/screening-online"
          element={
            <PrivateRoute>
              <ScreeningOnline />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/monitoring"
          element={
            <PrivateRoute>
              <Monitoring />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/officers"
          element={
            <PrivateRoute>
              <Officers />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />

        {/* Catch all - redirect ke home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;