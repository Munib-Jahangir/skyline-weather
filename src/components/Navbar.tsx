import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Info, Settings } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-2 flex items-center gap-2 shadow-2xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-4 rounded-full transition-all duration-300 relative group ${
              isActive ? 'bg-white text-sky-500 shadow-lg' : 'text-white hover:bg-white/10'
            }`
          }
        >
          <Home size={24} />
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-sky-500 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">Home</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `p-4 rounded-full transition-all duration-300 relative group ${
              isActive ? 'bg-white text-sky-500 shadow-lg' : 'text-white hover:bg-white/10'
            }`
          }
        >
          <Info size={24} />
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-sky-500 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">About</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `p-4 rounded-full transition-all duration-300 relative group ${
              isActive ? 'bg-white text-sky-500 shadow-lg' : 'text-white hover:bg-white/10'
            }`
          }
        >
          <Settings size={24} />
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-sky-500 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">Settings</span>
        </NavLink>
      </div>
    </nav>
  );
};
