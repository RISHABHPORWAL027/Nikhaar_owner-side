import React from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, User, Scissors } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Calendar() {
  const hours = Array.from({ length: 12 }, (_, i) => i + 9); // 9 AM to 8 PM

  return (
    <div className="max-w-md mx-auto lg:max-w-none">
      {/* Calendar Header */}
      <div className="mb-6 lg:mb-8 lg:flex lg:justify-between lg:items-center">
        <div className="mb-4 lg:mb-0">
          <p className="font-label text-on-surface-variant text-[10px] lg:text-sm uppercase tracking-widest mb-1">October 2024</p>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl lg:text-4xl font-bold lg:font-extrabold tracking-tight text-primary-container leading-none">The Schedule.</h1>
            <div className="hidden lg:flex items-center gap-2 bg-surface-container-low p-1 rounded-xl">
              <button className="p-2 hover:bg-white rounded-lg transition-colors"><ChevronLeft size={20} /></button>
              <span className="text-sm font-bold px-4">Today</span>
              <button className="p-2 hover:bg-white rounded-lg transition-colors"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2 hide-scrollbar lg:pb-0">
          <FilterChip label="All Artists" active />
          <FilterChip label="Vikram S." />
          <FilterChip label="Ananya K." />
          <FilterChip label="Kabir J." />
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Date Strip (Mobile) / Mini Calendar (Desktop) */}
        <div className="lg:col-span-3 space-y-8">
          <div className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar lg:grid lg:grid-cols-1 lg:gap-2 lg:overflow-visible">
            <DateCard day="Mon" date="21" />
            <DateCard day="Tue" date="22" />
            <DateCard day="Wed" date="23" />
            <DateCard day="Thu" date="24" active />
            <DateCard day="Fri" date="25" />
            <DateCard day="Sat" date="26" />
          </div>

          <div className="hidden lg:block bg-primary-container text-white p-8 rounded-[2rem] shadow-xl">
            <h3 className="text-lg font-headline font-bold mb-6">Daily Summary</h3>
            <div className="space-y-4">
              <SummaryItem label="Total Hours" value="18.5h" />
              <SummaryItem label="Utilization" value="84%" />
              <SummaryItem label="Cancellations" value="2" />
            </div>
            <button className="w-full mt-8 py-4 bg-secondary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
              Download Day Report
            </button>
          </div>
        </div>

        {/* Time Grid */}
        <div className="lg:col-span-9">
          <div className="bg-surface-container-lowest rounded-[2rem] p-5 lg:p-10 shadow-[0px_12px_32px_rgba(25,28,29,0.06)] border border-outline-variant/10">
            <div className="space-y-8 lg:space-y-12 relative">
              {/* Vertical Timeline Line (Desktop) */}
              <div className="hidden lg:block absolute left-[100px] top-0 bottom-0 w-[1px] bg-outline-variant/20"></div>

              {hours.map((hour) => (
                <div key={hour} className="flex gap-4 lg:gap-12 relative">
                  <div className="w-14 lg:w-20 pt-1">
                    <p className="text-xs lg:text-sm font-bold text-primary-container">{hour > 12 ? hour - 12 : hour}:00 {hour >= 12 ? 'PM' : 'AM'}</p>
                    <p className="text-[9px] lg:text-[10px] text-on-surface-variant font-medium uppercase tracking-tighter">Available</p>
                  </div>
                  
                  <div className="flex-1 space-y-3 lg:space-y-4">
                    {hour === 11 && (
                      <BookingCard 
                        name="Meera Varma" 
                        service="Royal Beard Grooming" 
                        duration="45m" 
                        artist="Vikram S." 
                        type="Luxury"
                      />
                    )}
                    {hour === 13 && (
                      <BookingCard 
                        name="Arjun Kapur" 
                        service="Signature Haircut" 
                        duration="60m" 
                        artist="Ananya K." 
                        type="Standard"
                      />
                    )}
                    {hour === 14 && (
                      <BookingCard 
                        name="Vikram Sethi" 
                        service="Detox Facial Ritual" 
                        duration="90m" 
                        artist="Kabir J." 
                        type="Premium"
                      />
                    )}
                    
                    {/* Empty Slot Placeholder */}
                    {![11, 13, 14].includes(hour) && (
                      <div className="h-16 border-2 border-dashed border-outline-variant/20 rounded-2xl flex items-center justify-center group hover:border-secondary/40 transition-colors cursor-pointer">
                        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest group-hover:text-secondary transition-colors">Open Slot</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <button className={cn(
      "px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-[10px] lg:text-xs font-bold whitespace-nowrap transition-all",
      active 
        ? "bg-primary-container text-white shadow-lg shadow-primary/10" 
        : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
    )}>
      {label}
    </button>
  );
}

function DateCard({ day, date, active }: { day: string; date: string; active?: boolean }) {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center min-w-[64px] lg:min-w-[72px] h-20 lg:h-24 lg:w-full lg:h-auto lg:flex-row lg:justify-between lg:px-6 lg:py-4 rounded-2xl transition-all cursor-pointer",
      active 
        ? "bg-secondary text-white shadow-xl shadow-secondary/20 scale-105 lg:scale-100" 
        : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
    )}>
      <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest mb-0.5 lg:mb-0">{day}</span>
      <span className="text-xl lg:text-xl font-black">{date}</span>
      <div className={cn("hidden lg:block w-2 h-2 rounded-full", active ? "bg-white" : "bg-secondary/20")}></div>
    </div>
  );
}

function BookingCard({ name, service, duration, artist, type }: { name: string; service: string; duration: string; artist: string; type: string }) {
  return (
    <div className={cn(
      "p-3 lg:p-6 rounded-2xl border-l-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer",
      type === 'Luxury' ? "bg-secondary/5 border-secondary" : 
      type === 'Premium' ? "bg-tertiary-fixed/10 border-tertiary" : "bg-surface-container-low border-outline-variant"
    )}>
      <div className="flex justify-between items-start mb-2 lg:mb-3">
        <div>
          <h4 className="font-bold text-primary-container text-sm lg:text-lg">{name}</h4>
          <p className="text-[10px] lg:text-xs text-on-surface-variant">{service}</p>
        </div>
        <span className={cn(
          "text-[8px] lg:text-[9px] font-bold px-1.5 lg:px-2 py-0.5 rounded-full uppercase tracking-tighter",
          type === 'Luxury' ? "bg-secondary text-white" : 
          type === 'Premium' ? "bg-tertiary text-white" : "bg-outline-variant text-on-surface-variant"
        )}>
          {type}
        </span>
      </div>
      <div className="flex items-center gap-3 lg:gap-4 text-[9px] lg:text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
        <div className="flex items-center gap-1">
          <Clock size={10} className="lg:hidden" />
          <Clock size={12} className="hidden lg:block" />
          {duration}
        </div>
        <div className="flex items-center gap-1">
          <User size={10} className="lg:hidden" />
          <User size={12} className="hidden lg:block" />
          {artist}
        </div>
      </div>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs text-on-primary-container/60 uppercase tracking-widest">{label}</span>
      <span className="text-lg font-bold">{value}</span>
    </div>
  );
}
