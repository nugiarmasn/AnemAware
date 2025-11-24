import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, ClipboardList, CheckSquare, Activity, Users, History, LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/screening-manual', icon: ClipboardList, label: 'Skrining Manual' },
    { path: '/admin/screening-online', icon: CheckSquare, label: 'Skrining Online' },
    { path: '/admin/monitoring', icon: Activity, label: 'Live Monitoring' },
    { path: '/admin/officers', icon: Users, label: 'Manajemen Petugas' },
    { path: '/admin/history', icon: History, label: 'Riwayat Skrining' }
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate('/admin/login');
  };

  return (
    <aside className="w-64 bg-dark-light border-r border-gray-800 flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-accent">AnemAware</h1>
        <p className="text-sm text-gray-400 mt-1">Admin Panel</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="sidebar-link w-full text-danger hover:bg-danger/10"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;