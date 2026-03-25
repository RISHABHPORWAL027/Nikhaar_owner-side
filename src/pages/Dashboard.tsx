import React from 'react';
import { TrendingUp, BarChart as Analytics, Armchair as EventSeat, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Dashboard() {
  return (
    <div className="max-w-md mx-auto lg:max-w-none">
      {/* Dashboard Header */}
      <div className="mb-6 lg:mb-10">
        <p className="font-label text-on-surface-variant text-xs lg:text-sm uppercase tracking-widest mb-1">Thursday, Oct 24</p>
        <h1 className="text-2xl lg:text-4xl font-bold lg:font-extrabold tracking-tight text-primary-container leading-none">Studio Flow.</h1>
      </div>

      {/* Metrics Bento Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-8 mb-8 lg:mb-12">
        {/* Large Hero Metric */}
        <div className="col-span-2 lg:col-span-4 bg-primary-container rounded-xl lg:rounded-[2rem] p-5 lg:p-8 text-white overflow-hidden relative group hover:shadow-xl transition-all duration-500">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-between items-start mb-4 lg:mb-6">
                <div className="p-2.5 lg:p-3 bg-white/10 text-white rounded-2xl">
                  <span className="material-symbols-outlined text-xl lg:text-2xl">currency_rupee</span>
                </div>
                <span className="text-[10px] lg:text-xs font-bold text-secondary-fixed bg-teal-50/10 px-2 lg:px-3 py-1 rounded-full">+14.2%</span>
              </div>
              <p className="font-label text-on-primary-container text-[10px] lg:text-xs uppercase tracking-widest mb-1">Daily Revenue</p>
              <h3 className="text-3xl lg:text-4xl font-headline font-bold">₹42,850</h3>
            </div>
            <div className="mt-8 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-3/4 rounded-full"></div>
            </div>
          </div>
          {/* Abstract Tonal Background Element */}
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        {/* Total Bookings */}
        <div className="col-span-1 lg:col-span-4 bg-surface-container-lowest rounded-xl lg:rounded-[2rem] p-4 lg:p-8 shadow-[0px_12px_32px_rgba(25,28,29,0.03)] flex flex-col justify-between min-h-[7rem] lg:h-auto group hover:shadow-xl transition-shadow">
          <div className="flex justify-between items-start mb-4 lg:mb-0">
            <div className="p-2.5 lg:p-3 bg-secondary/10 text-secondary rounded-2xl">
              <span className="material-symbols-outlined text-xl lg:text-2xl">analytics</span>
            </div>
            <span className="hidden lg:block text-xs font-bold text-secondary-container px-3 py-1 bg-secondary/5 rounded-full">Peak Hours</span>
          </div>
          <div>
            <p className="text-2xl lg:text-4xl font-extrabold text-primary-container leading-none mb-1">24</p>
            <p className="text-[10px] lg:text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Bookings</p>
            <p className="hidden lg:block mt-2 text-on-surface-variant text-xs">4 new since 8:00 AM</p>
          </div>
        </div>

        {/* Remaining Slots */}
        <div className="col-span-1 lg:col-span-4 bg-tertiary-container rounded-xl lg:rounded-[2rem] p-4 lg:p-8 shadow-[0px_12px_32px_rgba(25,28,29,0.03)] flex flex-col justify-between min-h-[7rem] lg:h-auto border-l-4 border-tertiary-container lg:border-none text-on-tertiary-container">
          <div className="flex justify-between items-start mb-4 lg:mb-0">
            <div className="p-2.5 lg:p-3 bg-on-tertiary-container/10 text-on-tertiary-container rounded-2xl">
              <span className="material-symbols-outlined text-xl lg:text-2xl">event_seat</span>
            </div>
          </div>
          <div>
            <p className="text-2xl lg:text-4xl font-extrabold text-primary-container leading-none mb-1">08</p>
            <p className="text-[10px] lg:text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider opacity-80">Slots Left</p>
            <div className="hidden lg:flex gap-1 mt-4">
              <div className="h-2 w-2 rounded-full bg-on-tertiary-container"></div>
              <div className="h-2 w-2 rounded-full bg-on-tertiary-container"></div>
              <div className="h-2 w-2 rounded-full bg-on-tertiary-container/30"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:gap-12">
        {/* Upcoming Rituals Section */}
        <section className="mb-6 lg:mb-8 lg:flex-1">
          <div className="flex justify-between items-end mb-4 lg:mb-6">
            <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-primary-container">Upcoming Rituals</h2>
            <button className="text-secondary text-[10px] lg:text-xs font-semibold hover:underline uppercase tracking-wider">View All</button>
          </div>
          <div className="space-y-4">
            <RitualCard 
              name="Meera Varma" 
              service="Royal Beard Grooming" 
              time="11:30 AM" 
              status="In 15m" 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuDW9WgVh_ZFTgxG-oa-EogQv4WNJjk65HSvnWB5NJetvmUXN2OE7WepBaa67QIGlXGIK_OKH1CelZVucVDxNEuiTfa4fUlIZxmF9oI2AtZCR4GmZVl-CIjUB8fryq40F-ycyFl5ernmg1Jye1IIGTBZCBSeU7kLip-oHttrMyNYuZV0ZFR18ekooQya8RGe3uVGYZKTHQc1aogU31pHaqlqGWVa1eU-UmRt2kqFb2TFm9izn-NquNFkYcbiGnJn366XRjDWnaoEvBe9"
              tag="Luxury"
            />
            <RitualCard 
              name="Arjun Kapur" 
              service="Signature Haircut" 
              time="01:00 PM" 
              status="Confirmed" 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuChPbjtbIWgvNeZePOV7HUcrpAaJCpN6prBO9pofYx8ZDB6kH1bBPWGLepJmeozbh6m6kDZbK5ah3jCUF1wrMBgUV_qT-r8pTg6UwrJZgM2m4zbQFZcoidXkvG33Jj74bvRJK8gmA9-4A3M8ozXv0cHUByCD-m2HSSqLHXAf_xjtYl91hnWTvGMKa2LU1lim-yiGRIsDBcd5TIA5kOu8d50FwFPHvuZvWhXHARx09mw_ytbAl4vkBJRjgG5en-9PM3021b3ijvqLtHa"
              tag="Standard"
            />
            <RitualCard 
              name="Vikram Sethi" 
              service="Detox Facial Ritual" 
              time="02:30 PM" 
              status="Premium" 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ87WZVz0V4rZzoGmFxfUeQmnB6_Sps_9tchh-p-haT4iijZDPwNhp184G2qyUr4YiFvWFFKefvNa_kDA-BN2RaxDlaNBegzu5op5-MTLwBkDBRjhZvCWo8o2QEyfGyyBPdVjxP6HNxBW0MBgYJlbaL8gO9p7UdhOFrOG_MqE6P9g5OEFv0ROeAYFmwEXG4Lp_d6b2gCRn-tV3f8NS8PVvru2IHzUIn54xYIQq29vQuEIyDYeCErOGQCfHmJYRHCKvsam-PAhgjgkF"
              tag="Premium"
              isVip
            />
          </div>
        </section>

        {/* Quick Action Sidebar (Desktop Only) */}
        <aside className="hidden lg:block w-80 space-y-8">
          <div>
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <QuickAction icon="add_circle" label="New Sale" />
              <QuickAction icon="person_add" label="Add Artist" />
              <QuickAction icon="inventory_2" label="Stock Check" />
              <QuickAction icon="bar_chart" label="Reports" />
            </div>
          </div>

          <div className="bg-surface-container-low p-6 rounded-[2rem]">
            <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6">Artist Status</h4>
            <ul className="space-y-4">
              <ArtistStatus name="Vikram S." color="bg-green-500" img="https://lh3.googleusercontent.com/aida-public/AB6AXuAqc7wbnl3UNqHD-uH_9kckK1qedwmgiIM4dwHZW6GFcYipkviQYjz7qEzdb0_eXjMlL5OZNlKkAyWxQvIfbT5cZHOTAnAFaMiy3t8IVr9dH6hhFVtEGQ5EjJVyyDOILa3WNkG2OkBYJ5f73bTaZHA9-x1uut7eq96cDGUrYSGdiiruBcTHjnLUQLscllvnkAphDrF5Gc457PNqA3J-0GsOKn1VnODJnNidOk-fxOk6hYsa3KdJFa2cvImvy8XLikwXtDFfkNHLUxA2" />
              <ArtistStatus name="Ananya K." color="bg-orange-400" img="https://lh3.googleusercontent.com/aida-public/AB6AXuBUfCtkHlSBMZFpaTn-vluSLC2MP0aUB4WdMeuv1HLthZf1pzzzqYhdqfncW-0bqGadmzeGb9HQica3f5ZJA1ulS5ocLCSLHLMbv5kuau6H_HupknNo690Ghvm8WWZ_vt_6qvLYgFMdhSjlQGrPz94Zvhtb-7rx7olz3Q9i4jxVFv_wv6JNPjzYkVP0ju6OEyTyoLPNL1k2jSFFQ8rY6e3sRkFOlaKJdU2QTrU-0FG08azZZ0RTKuY2lIF5W0--8ne0ZcpsBaJHmZJf" />
              <ArtistStatus name="Kabir J." color="bg-slate-300" img="https://lh3.googleusercontent.com/aida-public/AB6AXuDghb0n_HclvcgM8i371R7SXWo74cotCUQg4-Vbo1ESft0pwzlyOLoaSo-sfYOVY74IglZnptvgkCTPPzQcq15_fTTEgtF1RpUqEjzQayHaTlt4rkldmxsy3Suykw6veMLqAOWbvjuOWDzD2Q-N8oXq3HvB_9KD3_sapffYasPts4k4mg2YgcMRqDb1eS05JP0iVzRouNynHfwQWWs8ci0QgX2B3Ink3pVqAadSy1CLoYkGOHOYRFTKekMGtEfM7SQziMecDHAPVinP" />
            </ul>
          </div>
        </aside>

        {/* Mobile Quick Action */}
        <div className="lg:hidden bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-primary-container">Team is Busy</h4>
            <p className="text-xs text-on-surface-variant">4 specialists currently active.</p>
          </div>
          <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-transform active:scale-95">
            Staff View
          </button>
        </div>
      </div>
    </div>
  );
}

function RitualCard({ name, service, time, status, img, tag, isVip }: { name: string; service: string; time: string; status: string; img: string; tag: string; isVip?: boolean }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-3 lg:p-6 flex items-center justify-between group hover:bg-surface-container-highest transition-colors">
      <div className="flex items-center gap-3 lg:gap-6">
        <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-lg lg:rounded-xl overflow-hidden bg-surface-container relative">
          <img alt={name} className="w-full h-full object-cover" src={img} referrerPolicy="no-referrer" />
          {isVip && (
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[8px] lg:text-xs fill-1">star</span>
            </div>
          )}
        </div>
        <div>
          <h3 className="font-bold text-primary-container leading-tight text-sm lg:text-lg">{name}</h3>
          <p className="text-[10px] lg:text-sm text-on-surface-variant">{service}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-primary-container text-xs lg:text-base">{time}</p>
        {status === 'In 15m' ? (
          <div className="flex items-center justify-end gap-1 mt-1">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">{status}</span>
          </div>
        ) : (
          <span className={cn(
            "inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter mt-1",
            tag === 'Premium' ? "bg-tertiary-fixed text-on-tertiary-fixed" : "text-on-surface-variant/60"
          )}>
            {tag === 'Premium' ? 'Premium' : 'Confirmed'}
          </span>
        )}
      </div>
    </div>
  );
}

function QuickAction({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="flex flex-col items-center justify-center p-6 bg-surface-container-low rounded-3xl hover:bg-secondary/10 hover:text-secondary transition-all group border border-transparent hover:border-secondary/20">
      <span className="material-symbols-outlined mb-3 text-3xl transition-transform group-hover:scale-110">{icon}</span>
      <span className="text-xs font-bold">{label}</span>
    </button>
  );
}

function ArtistStatus({ name, color, img }: { name: string; color: string; img: string }) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden">
          <img alt={name} className="w-full h-full object-cover" src={img} referrerPolicy="no-referrer" />
        </div>
        <span className="text-sm font-medium">{name}</span>
      </div>
      <span className={cn("flex h-2 w-2 rounded-full", color)}></span>
    </li>
  );
}
