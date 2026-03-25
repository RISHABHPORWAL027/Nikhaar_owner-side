import React from 'react';
import { UserPlus, Mail, Shield, Star, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Team() {
  return (
    <div className="max-w-md mx-auto lg:max-w-6xl">
      {/* Header */}
      <div className="mb-8 lg:mb-16">
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-primary-container leading-none mb-2">Grow Your Tribe.</h1>
        <p className="text-on-surface-variant text-xs lg:text-sm font-medium">Invite elite specialists to join Nikhaar Noir.</p>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Invitation Form */}
        <div className="lg:col-span-7">
          <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-[0px_12px_32px_rgba(25,28,29,0.06)] border border-outline-variant/10">
            <h2 className="text-lg lg:text-xl font-headline font-bold mb-6 lg:mb-8 flex items-center gap-2">
              <UserPlus className="text-secondary" size={20} />
              Artist Invitation
            </h2>
            
            <form className="space-y-4 lg:space-y-6">
              <div className="space-y-1.5 lg:space-y-2">
                <label className="text-[10px] lg:text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Artist Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-xl">person</span>
                  <input className="w-full bg-surface-container-low border-none rounded-2xl py-3.5 lg:py-4 pl-12 pr-4 focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-sm lg:text-base" placeholder="e.g. Rohan Sharma" type="text" />
                </div>
              </div>

              <div className="space-y-1.5 lg:space-y-2">
                <label className="text-[10px] lg:text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-xl">mail</span>
                  <input className="w-full bg-surface-container-low border-none rounded-2xl py-3.5 lg:py-4 pl-12 pr-4 focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-sm lg:text-base" placeholder="rohan@example.com" type="email" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="space-y-1.5 lg:space-y-2">
                  <label className="text-[10px] lg:text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Specialization</label>
                  <select className="w-full bg-surface-container-low border-none rounded-2xl py-3.5 lg:py-4 px-4 focus:ring-2 focus:ring-secondary/20 transition-all font-medium appearance-none text-sm lg:text-base">
                    <option>Master Barber</option>
                    <option>Hair Stylist</option>
                    <option>Skin Specialist</option>
                    <option>Colorist</option>
                  </select>
                </div>
                <div className="space-y-1.5 lg:space-y-2">
                  <label className="text-[10px] lg:text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Artist Level</label>
                  <select className="w-full bg-surface-container-low border-none rounded-2xl py-3.5 lg:py-4 px-4 focus:ring-2 focus:ring-secondary/20 transition-all font-medium appearance-none text-sm lg:text-base">
                    <option>Level 4 (Elite)</option>
                    <option>Level 3 (Senior)</option>
                    <option>Level 2 (Junior)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 lg:pt-4">
                <button className="w-full py-4 lg:py-5 rounded-2xl hero-gradient text-white font-headline font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all text-sm lg:text-base">
                  Generate Secure Invite
                  <ChevronRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Desktop Sidebar: Benefits & Active Invites */}
        <div className="hidden lg:block lg:col-span-5 space-y-8">
          <div className="bg-secondary-container text-on-secondary-container p-8 rounded-3xl">
            <h3 className="text-lg font-headline font-bold mb-6">Why join Nikhaar Noir?</h3>
            <ul className="space-y-4">
              <BenefitItem icon={<Shield size={18} />} text="Secure Digital Portfolio" />
              <BenefitItem icon={<Star size={18} />} text="Premium Client Access" />
              <BenefitItem icon={<CheckCircle2 size={18} />} text="Automated Scheduling" />
            </ul>
          </div>

          <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Pending Invites</h3>
              <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-0.5 rounded-full">2 Active</span>
            </div>
            <div className="space-y-4">
              <PendingInvite name="Ananya Iyer" email="ananya.i@gmail.com" time="2h ago" />
              <PendingInvite name="Kabir Singh" email="k.singh@outlook.com" time="1d ago" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Benefits (Visible only on small screens) */}
      <div className="mt-8 lg:hidden">
        <h3 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] text-center mb-4">Artist Benefits</h3>
        <div className="grid grid-cols-3 gap-3">
          <MobileBenefit icon="verified_user" label="Secure" />
          <MobileBenefit icon="auto_awesome" label="Premium" />
          <MobileBenefit icon="schedule" label="Smart" />
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-3">
      <div className="p-2 bg-white/20 rounded-lg">
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </li>
  );
}

function PendingInvite({ name, email, time }: { name: string; email: string; time: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/5">
      <div>
        <p className="font-bold text-sm">{name}</p>
        <p className="text-[10px] text-on-surface-variant">{email}</p>
      </div>
      <div className="text-right">
        <p className="text-[10px] font-bold text-secondary uppercase">{time}</p>
        <button className="text-[10px] font-bold text-on-surface-variant hover:text-error mt-1">Revoke</button>
      </div>
    </div>
  );
}

function MobileBenefit({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 p-3 bg-surface-container-low rounded-2xl">
      <span className="material-symbols-outlined text-secondary text-xl">{icon}</span>
      <span className="text-[9px] font-bold uppercase tracking-tighter">{label}</span>
    </div>
  );
}
