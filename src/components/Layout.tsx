import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Scissors, Calendar, Settings, Plus } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-surface">
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-slate-200/10 bg-slate-50 flex-col z-50 lg:flex dark:bg-slate-950">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
              <Scissors className="text-white w-5 h-5" />
            </div>
            <h1 className="font-headline font-black text-2xl tracking-tighter text-slate-900 dark:text-white uppercase">Elite Grooming</h1>
          </div>
          <p className="text-[10px] tracking-widest text-on-surface-variant/60 uppercase mt-1 px-1">Management Suite</p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <NavItem to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <NavItem to="/team" icon={<Users size={20} />} label="Artists" />
          <NavItem to="/services" icon={<Scissors size={20} />} label="Services" />
          <NavItem to="/calendar" icon={<Calendar size={20} />} label="Calendar" />
          <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
        </nav>

        <div className="p-6">
          <button className="w-full py-4 bg-primary text-on-primary rounded-xl font-headline font-bold text-sm tracking-tight active:scale-95 transition-transform shadow-lg shadow-primary/10">
            Book New Appointment
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface lg:hidden dark:bg-[#0d1b2a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/20">
            <img 
              alt="Salon Owner Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiDMH3B4gPII4BnFux0FHC64PTleg35smWXRGS9LCiuQHZ9fbUXfQJKK6jCkZQFyZxlfhYhSBaUtNCrcScVdZQ4A2WaTlvxe0PxcLZ72b1sMyQgaylzMKNhQQMoOolqXcmjW18XYU_ee74VDj3-URnOMg3TxUmlRGlPZNiwKCuoYmRokURGBFTJf-J2oG9gCA65SixdZpWMbyP0THoRQDW8G9Zny2dOAb_Mly61whC001NFkxKNEFBLbKEE_jogzRfr2yzJuw_TgUo"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-primary-container dark:text-white text-2xl font-black tracking-tighter">The Curator</h1>
        </div>
        <button className="text-primary-container dark:text-surface hover:opacity-80 transition-opacity active:scale-95 duration-200">
          <span className="material-symbols-outlined">swap_horiz</span>
        </button>
      </header>

      {/* Desktop Top Bar */}
      <header className="fixed top-0 right-0 hidden w-[calc(100%-16rem)] z-40 h-16 px-8 bg-white/70 backdrop-blur-xl lg:flex justify-between items-center border-b border-slate-200/20 dark:bg-slate-900/70">
        <div className="flex items-center gap-4">
          <h2 className="font-headline font-bold text-lg text-slate-900 dark:text-slate-50 tracking-tight">The Pristine Curator</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative flex items-center bg-surface-container-low px-4 py-2 rounded-full focus-within:ring-2 focus-within:ring-secondary/30 transition-all">
            <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-on-surface-variant" placeholder="Search..." type="text" />
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div className="h-8 w-[1px] bg-outline-variant/20 mx-1"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-bold text-slate-900 dark:text-white">Arjun Mehta</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Salon Manager</p>
              </div>
              <img 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_8SpqFOd_hiCdC3ypPRVBCLkZMYUFOn0s4JSNONl5WtaOJtulxo6wUe1iKGiag8erLb9REJk0g8e1Y9_6hwPWL8iaPkExyyhsdzWF_djGYQoE5SNdmu4L6g_qhvljnqkcF8nYU3fvm1gLki3Ks7Fyo4_VIm6FRQnhficCZn5GPY0kjima57biUXJkDA9vyibKNykKKYhCa1iW530Nspt3CQQL-Y5PuhVjeDoRJK4sDMThHl7RDTw9M_Y710ML1iT5foKBr9OHuiip"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={cn(
        "pt-18 px-4 pb-24 lg:ml-64 lg:pt-24 lg:px-12 lg:pb-12",
        "max-w-7xl mx-auto"
      )}>
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-2 pb-4 pt-2 bg-white/70 backdrop-blur-xl border-t border-[#0f1c2c]/10 shadow-[0px_-12px_32px_rgba(25,28,29,0.06)] rounded-t-3xl lg:hidden dark:bg-[#0d1b2a]/70 dark:border-white/10">
        <MobileNavItem to="/" icon="dashboard" label="Dashboard" />
        <MobileNavItem to="/team" icon="group" label="Team" />
        <MobileNavItem to="/services" icon="content_cut" label="Services" />
        <MobileNavItem to="/calendar" icon="calendar_month" label="Calendar" />
      </nav>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-4 py-3 transition-all rounded-lg font-body text-sm font-medium",
        isActive 
          ? "text-teal-700 bg-teal-50/50 border-r-4 border-teal-700 dark:text-teal-400 dark:bg-teal-900/20" 
          : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/50"
      )}
    >
      {icon}
      {label}
    </NavLink>
  );
}

function MobileNavItem({ to, icon, label }: { to: string; icon: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        "flex flex-col items-center justify-center px-3 py-1.5 transition-all",
        isActive 
          ? "bg-[#0f1c2c] text-white rounded-full scale-105 px-4 dark:bg-[#f8f9fa] dark:text-[#0d1b2a]" 
          : "text-[#0f1c2c]/60 dark:text-[#f8f9fa]/60 hover:text-[#006a6a]"
      )}
    >
      {({ isActive }) => (
        <>
          <span className={cn("material-symbols-outlined", isActive && "fill-1")}>{icon}</span>
          <span className="font-body text-[9px] font-bold tracking-wide uppercase mt-0.5">{label}</span>
        </>
      )}
    </NavLink>
  );
}
