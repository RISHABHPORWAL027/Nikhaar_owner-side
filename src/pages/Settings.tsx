import React from 'react';

export default function Settings() {
  return (
    <div className="max-w-md mx-auto lg:max-w-4xl">
      <div className="mb-8 lg:mb-10">
        <h1 className="text-2xl lg:text-4xl font-bold lg:font-extrabold tracking-tight text-primary-container leading-none mb-2">Studio Config.</h1>
        <p className="text-on-surface-variant text-xs lg:text-sm font-medium">Manage your salon's global settings and preferences.</p>
      </div>

      <div className="space-y-4 lg:space-y-6">
        <SettingsSection title="General" description="Basic salon information and branding.">
          <SettingsItem label="Salon Name" value="Nikhaar Noir - The Curator" />
          <SettingsItem label="Location" value="Bandra West, Mumbai" />
          <SettingsItem label="Currency" value="INR (₹)" />
        </SettingsSection>

        <SettingsSection title="Availability" description="Configure your working hours and buffer times.">
          <SettingsItem label="Business Hours" value="9:00 AM - 8:00 PM" />
          <SettingsItem label="Buffer Time" value="15 mins" />
        </SettingsSection>

        <SettingsSection title="Notifications" description="Manage how you and your clients stay informed.">
          <SettingsItem label="SMS Alerts" value="Enabled" toggle />
          <SettingsItem label="Email Reports" value="Daily" />
        </SettingsSection>
      </div>
    </div>
  );
}

function SettingsSection({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 border border-outline-variant/10 shadow-sm">
      <div className="mb-4 lg:mb-6">
        <h2 className="text-lg lg:text-xl font-headline font-bold text-primary-container">{title}</h2>
        <p className="text-[10px] lg:text-xs text-on-surface-variant mt-1">{description}</p>
      </div>
      <div className="space-y-2 lg:space-y-4">
        {children}
      </div>
    </div>
  );
}

function SettingsItem({ label, value, toggle }: { label: string; value: string; toggle?: boolean }) {
  return (
    <div className="flex items-center justify-between py-3 lg:py-4 border-b border-outline-variant/5 last:border-0">
      <span className="text-on-surface-variant uppercase tracking-widest text-[9px] lg:text-[10px] font-bold">{label}</span>
      <div className="flex items-center gap-2 lg:gap-3">
        <span className="text-xs lg:text-sm font-bold text-primary-container">{value}</span>
        {toggle ? (
          <div className="w-8 h-4 lg:w-10 lg:h-5 bg-secondary rounded-full relative">
            <div className="absolute right-0.5 lg:right-1 top-0.5 lg:top-1 w-3 h-3 bg-white rounded-full"></div>
          </div>
        ) : (
          <span className="material-symbols-outlined text-on-surface-variant text-xs lg:text-sm">chevron_right</span>
        )}
      </div>
    </div>
  );
}
