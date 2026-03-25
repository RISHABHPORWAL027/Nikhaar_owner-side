import React, { useState, useMemo } from 'react';
import { Search, Filter, Edit, Trash2, PlusCircle, X, Check, ChevronDown, Calendar as CalendarIcon, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface Service {
  id: string;
  title: string;
  price: number;
  category: string;
  meta: string;
  img: string;
  tag?: string;
  badge?: string;
}

const INITIAL_SERVICES: Service[] = [
  {
    id: '1',
    title: "Signature Fade",
    price: 1200,
    category: "Signature Cuts",
    meta: "45 mins • Level 4 Artist",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD04g4-kdlVaC2wqpUr_5ohBjqtA8LUeyB3JruiCYFw0utnMh1d5WsCvL4mKRmofAaMDNWdLCpFw8RGHIFYpORhCuWUi51puZ4dLteBIOsgTElT3xZGMB0eTQdut207pKVD64jpD8ekGXYQk0qlVnNABbvuRyb56MUQU7kQIP6IQ7h_dUo5vQoo9f4ogeWXFEyVs1SxxuO87vy7IJetFFVjJklYF0HiLcinrIZoyGOuVoZCFFFHtzMKNHzuXQ7Vw5BB_g9Kse6XVSXy",
    tag: "Premium"
  },
  {
    id: '2',
    title: "Executive Scissor Cut",
    price: 1500,
    category: "Signature Cuts",
    meta: "60 mins • Master Barber",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIk8GEoZGvgfO-v_Zr-7Uki07MqHNZbXIqbcFXhHtP0-Fd8ya5eJvJi1nsdODSr9DW0MdgTo73kq5a9JWtDjBqMR4KlyjPtkv3jZvHF_ES5bVOhvFdneJqZeXizjn5S3TKDJ1t399tE1VyAOkN5jaz7U2q4LBKrviqRJSdYf6ksk72vPqfEb0hrAT4SzGZ-XUJLBn-DsG4x7yPnspGsKXMl9wnE8MafxZtoROm5mJBlEr6UoUSbAOj2U4OhVc9cbGhu8Salpb5iAsy"
  },
  {
    id: '3',
    title: "Beard Sculpt",
    price: 800,
    category: "Grooming & Beard",
    meta: "30 mins • Includes Hot Towel",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDD5bbUYfWbS5RqNNRBrA28kc71oKTnCqxQcQCK_CcknMHZhBScrQbHHvpviO8cqe-sey1KGOMxHLibGVVFArr3QRA0I2i6SEurcqQIehOL6kPa7EkWasOwSvGGCv1wWAyIM_y9dQYtI8xfR8qjUKhqqYq3gxvdi2IyCzodAFVJ8ZKPkJBSHQuLw-Mypjd7hPs_Lm9ESeXD8BWy3dzYdgXIu7gizT3hjCedbPFYqk5-tUNAkMr4S7hCBrqlXcjxzQyOIWAdPcvRDp3L",
    badge: "Hot",
    tag: "Essential"
  },
  {
    id: '4',
    title: "The Royal Shave",
    price: 1800,
    category: "Grooming & Beard",
    meta: "50 mins • Luxury Ritual",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPRCC4YI3tuFPzs3JowkBF4LAL1Crqq0iy9zP2F9XyUs-YaznABQh_Go_ayrNvK6tiaCQcPjeUecCWEPAQFeTk-xak49VnUAROfVxTutlPLuido2CGsu21xgNN-isaVxL7VsSxZjDtTBYIxyNdbh9sMJHj4avSBY4o5WWgCJKJA0-9hMv0qgWG-LjUEYrCIyeMxgEtg9iC251u7NmEQLNaG_bKMGOZ1Y8hPGCiw2__0gPenJQY87TW0vYJQwbBqfaOH3kInsFwAkmX",
    tag: "Luxury"
  }
];

export default function Services() {
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  
  // Modal states
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; serviceId: string | null }>({ isOpen: false, serviceId: null });
  const [editModal, setEditModal] = useState<{ isOpen: boolean; service: Service | null }>({ isOpen: false, service: null });
  const [bookModal, setBookModal] = useState<{ isOpen: boolean; service: Service | null }>({ isOpen: false, service: null });

  const categories = useMemo(() => ['All', ...Array.from(new Set(services.map(s => s.category)))], [services]);

  const filteredAndSortedServices = useMemo(() => {
    return services
      .filter(s => {
        const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
        const matchesPrice = s.price >= priceRange[0] && s.price <= priceRange[1];
        return matchesSearch && matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.title.localeCompare(b.title);
        if (sortBy === 'price') return a.price - b.price;
        if (sortBy === 'category') return a.category.localeCompare(b.category);
        return 0;
      });
  }, [services, searchQuery, selectedCategory, sortBy, priceRange]);

  const handleDelete = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
    setDeleteModal({ isOpen: false, serviceId: null });
  };

  const handleUpdate = (updatedService: Service) => {
    setServices(prev => prev.map(s => s.id === updatedService.id ? updatedService : s));
    setEditModal({ isOpen: false, service: null });
  };

  const handleAdd = (newService: Omit<Service, 'id'>) => {
    const serviceWithId = { ...newService, id: Math.random().toString(36).substr(2, 9) };
    setServices(prev => [...prev, serviceWithId]);
    setEditModal({ isOpen: false, service: null });
  };

  return (
    <div className="max-w-2xl mx-auto lg:max-w-6xl">
      {/* Header Section */}
      <section className="mb-8 lg:mb-12 lg:flex lg:justify-between lg:items-end">
        <div>
          <span className="hidden lg:block text-secondary font-semibold text-sm tracking-widest uppercase mb-2">The Pristine Curator</span>
          <h2 className="font-headline font-bold text-2xl lg:text-4xl text-primary tracking-tight mb-2">Service Menu</h2>
          <p className="text-on-surface-variant font-body text-xs lg:text-sm max-w-md">Curate your premium grooming experiences and pricing.</p>
        </div>
        <button 
          onClick={() => setEditModal({ isOpen: true, service: null })}
          className="hidden lg:flex bg-primary text-on-primary px-8 py-4 rounded-xl font-bold items-center gap-3 hover:shadow-xl hover:shadow-primary/10 transition-all active:scale-95"
        >
          <PlusCircle size={20} />
          Add New Service
        </button>
      </section>

      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          {/* Search & Filter Area */}
          <div className="mb-8 space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 bg-surface-container-low rounded-xl px-4 py-3 flex items-center gap-3">
                <Search className="text-outline" size={20} />
                <input 
                  className="bg-transparent border-none focus:ring-0 text-sm font-body w-full placeholder-outline" 
                  placeholder="Search services..." 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative group">
                <button className="h-12 px-4 flex items-center gap-2 bg-surface-container-low rounded-xl text-secondary active:scale-95 transition-transform font-bold text-xs uppercase tracking-widest">
                  <Filter size={18} />
                  Sort: {sortBy}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-surface-container-high rounded-xl shadow-xl border border-outline-variant/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 p-2">
                  {(['name', 'price', 'category'] as const).map(option => (
                    <button 
                      key={option}
                      onClick={() => setSortBy(option)}
                      className={cn(
                        "w-full text-left px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors",
                        sortBy === option ? "bg-secondary text-white" : "hover:bg-surface-container-lowest"
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all",
                    selectedCategory === cat 
                      ? "bg-primary text-on-primary shadow-lg shadow-primary/20" 
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="bg-surface-container-low p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="5000" 
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-secondary"
              />
            </div>
          </div>

          {/* Service List */}
          <div className="space-y-6">
            {filteredAndSortedServices.length > 0 ? (
              filteredAndSortedServices.map(service => (
                <ServiceCard 
                  key={service.id}
                  service={service}
                  onEdit={() => setEditModal({ isOpen: true, service })}
                  onDelete={() => setDeleteModal({ isOpen: true, serviceId: service.id })}
                  onBook={() => setBookModal({ isOpen: true, service })}
                />
              ))
            ) : (
              <div className="text-center py-20 bg-surface-container-low rounded-3xl border-2 border-dashed border-outline-variant/20">
                <p className="text-on-surface-variant font-medium">No services found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block lg:col-span-4 space-y-8">
          <div className="bg-primary-container text-on-primary p-8 rounded-3xl relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-lg font-headline font-bold mb-4">Quick Insights</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-on-primary-container text-xs uppercase tracking-widest font-bold">Top Performing</p>
                  <p className="text-xl font-bold mt-1">Signature Fade</p>
                  <p className="text-sm text-teal-400 mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">trending_up</span> 
                    +12% bookings this month
                  </p>
                </div>
                <div className="h-[1px] bg-on-primary-container/20"></div>
                <div>
                  <p className="text-on-primary-container text-xs uppercase tracking-widest font-bold">Menu Revenue</p>
                  <p className="text-2xl font-black mt-1">₹1.4L <span className="text-sm font-normal text-on-primary-container">/ mo</span></p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span className="material-symbols-outlined text-[120px]">insights</span>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10">
            <h3 className="text-lg font-headline font-bold mb-6">Service Categories</h3>
            <div className="space-y-3">
              <CategoryItem label="Precision Cuts" count={12} />
              <CategoryItem label="Beard & Face" count={8} />
              <CategoryItem label="Luxury Spa" count={5} />
              <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant hover:text-secondary hover:border-secondary transition-all text-sm font-bold">
                <PlusCircle size={16} />
                Manage Categories
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {deleteModal.isOpen && (
          <Modal onClose={() => setDeleteModal({ isOpen: false, serviceId: null })}>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-error-container/20 text-error rounded-full flex items-center justify-center mx-auto mb-6">
                <Trash2 size={32} />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-2">Delete Service?</h3>
              <p className="text-on-surface-variant text-sm mb-8">This action cannot be undone. All associated data will be permanently removed.</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setDeleteModal({ isOpen: false, serviceId: null })}
                  className="flex-1 py-4 bg-surface-container-high rounded-xl font-bold text-sm"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => deleteModal.serviceId && handleDelete(deleteModal.serviceId)}
                  className="flex-1 py-4 bg-error text-white rounded-xl font-bold text-sm shadow-lg shadow-error/20"
                >
                  Delete
                </button>
              </div>
            </div>
          </Modal>
        )}

        {editModal.isOpen && (
          <Modal onClose={() => setEditModal({ isOpen: false, service: null })}>
            <EditServiceForm 
              service={editModal.service} 
              onSave={editModal.service ? handleUpdate : handleAdd}
              onCancel={() => setEditModal({ isOpen: false, service: null })}
            />
          </Modal>
        )}

        {bookModal.isOpen && bookModal.service && (
          <Modal onClose={() => setBookModal({ isOpen: false, service: null })}>
            <BookServiceForm 
              service={bookModal.service}
              onCancel={() => setBookModal({ isOpen: false, service: null })}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServiceCard({ service, onEdit, onDelete, onBook }: { service: Service; onEdit: () => void; onDelete: () => void; onBook: () => void; key?: string | number }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-4 lg:p-5 flex items-center justify-between shadow-[0px_12px_32px_rgba(25,28,29,0.06)] group hover:translate-y-[-2px] transition-all duration-300 border border-outline-variant/5">
      <div className="flex gap-3 lg:gap-4 items-center">
        <div className="w-14 h-14 lg:w-24 lg:h-24 rounded-xl overflow-hidden bg-surface-container-low relative">
          <img alt={service.title} className="w-full h-full object-cover" src={service.img} referrerPolicy="no-referrer" />
          {service.badge && (
            <div className="absolute top-1 right-1 bg-tertiary-container text-on-tertiary-container text-[7px] lg:text-[8px] font-bold px-1 lg:px-1.5 py-0.5 rounded-full uppercase">{service.badge}</div>
          )}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-0.5 lg:mb-1">
            <h4 className="font-headline font-bold text-on-surface text-sm lg:text-xl">{service.title}</h4>
            {service.tag && <span className="text-[8px] lg:text-[9px] font-bold bg-secondary/10 text-secondary px-1.5 lg:px-2 py-0.5 rounded-full uppercase tracking-tighter">{service.tag}</span>}
          </div>
          <p className="text-secondary font-bold text-base lg:text-lg mb-0.5 lg:mb-1">₹{service.price.toLocaleString()}</p>
          <span className="text-[9px] lg:text-[10px] text-on-surface-variant uppercase tracking-widest font-medium">{service.meta}</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <button 
          onClick={onBook}
          className="px-4 py-2 bg-primary text-on-primary rounded-xl text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Book Now
        </button>
        <div className="flex gap-1">
          <button 
            onClick={onEdit}
            className="p-2 text-on-surface-variant hover:text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"
          >
            <Edit size={18} />
          </button>
          <button 
            onClick={onDelete}
            className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-lg transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-surface-container-lowest w-full max-w-lg rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-surface-container-high rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>
        {children}
      </motion.div>
    </div>
  );
}

function EditServiceForm({ service, onSave, onCancel }: { service: Service | null; onSave: (s: any) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState<Omit<Service, 'id'>>(
    service ? { ...service } : { title: '', price: 0, category: 'Signature Cuts', meta: '', img: 'https://picsum.photos/seed/groom/400/400', tag: '', badge: '' }
  );

  return (
    <div className="p-6 lg:p-10">
      <h3 className="text-xl lg:text-2xl font-headline font-bold mb-6 lg:mb-8">{service ? 'Edit Service' : 'Add New Service'}</h3>
      <div className="space-y-5">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Service Title</label>
          <input 
            className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all font-medium" 
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g. Signature Fade"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Price (₹)</label>
            <input 
              type="number"
              className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all font-medium" 
              value={formData.price}
              onChange={e => setFormData({ ...formData, price: parseInt(e.target.value) })}
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Category</label>
            <select 
              className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all font-medium appearance-none"
              value={formData.category}
              onChange={e => setFormData({ ...formData, category: e.target.value })}
            >
              <option>Signature Cuts</option>
              <option>Grooming & Beard</option>
              <option>Luxury Spa</option>
            </select>
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Metadata (Duration, Artist Level)</label>
          <input 
            className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all font-medium" 
            value={formData.meta}
            onChange={e => setFormData({ ...formData, meta: e.target.value })}
            placeholder="e.g. 45 mins • Level 4 Artist"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Image URL</label>
          <input 
            className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all font-medium" 
            value={formData.img}
            onChange={e => setFormData({ ...formData, img: e.target.value })}
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Tag (Optional)</label>
            <input 
              className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all font-medium" 
              value={formData.tag}
              onChange={e => setFormData({ ...formData, tag: e.target.value })}
              placeholder="e.g. Premium"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Badge (Optional)</label>
            <input 
              className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all font-medium" 
              value={formData.badge}
              onChange={e => setFormData({ ...formData, badge: e.target.value })}
              placeholder="e.g. Hot"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-10">
        <button 
          onClick={onCancel}
          className="flex-1 py-4 bg-surface-container-high rounded-2xl font-bold text-sm"
        >
          Cancel
        </button>
        <button 
          onClick={() => onSave(service ? { ...formData, id: service.id } : formData)}
          className="flex-1 py-4 bg-primary text-on-primary rounded-2xl font-bold text-sm shadow-xl shadow-primary/20"
        >
          {service ? 'Save Changes' : 'Add Service'}
        </button>
      </div>
    </div>
  );
}

function BookServiceForm({ service, onCancel }: { service: Service; onCancel: () => void }) {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    artist: '',
    date: '',
    time: ''
  });

  const artists = ["Vikram Sharma", "Ananya Iyer", "Kabir Singh", "Rohan Malhotra"];
  const times = ["10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];

  if (isSuccess) {
    return (
      <div className="p-8 lg:p-10 text-center">
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
          <Check size={32} className="lg:hidden" />
          <Check size={40} className="hidden lg:block" />
        </div>
        <h3 className="text-xl lg:text-2xl font-headline font-bold mb-2">Ritual Confirmed!</h3>
        <p className="text-on-surface-variant text-xs lg:text-sm mb-6 lg:mb-8">
          Your appointment for <span className="font-bold text-primary">{service.title}</span> with <span className="font-bold text-primary">{bookingData.artist}</span> is set for <span className="font-bold text-primary">{bookingData.time}</span> today.
        </p>
        <button 
          onClick={onCancel}
          className="w-full py-3.5 lg:py-4 bg-primary text-on-primary rounded-2xl font-bold text-sm shadow-xl shadow-primary/20"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10">
      <div className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl overflow-hidden">
          <img src={service.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div>
          <h3 className="text-lg lg:text-xl font-headline font-bold">{service.title}</h3>
          <p className="text-[10px] lg:text-xs text-on-surface-variant uppercase tracking-widest font-bold">₹{service.price.toLocaleString()}</p>
        </div>
      </div>

      {step === 1 ? (
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Select Artist</label>
            <div className="grid grid-cols-2 gap-3">
              {artists.map(artist => (
                <button 
                  key={artist}
                  onClick={() => setBookingData({ ...bookingData, artist })}
                  className={cn(
                    "p-4 rounded-2xl border-2 transition-all text-left",
                    bookingData.artist === artist ? "border-secondary bg-secondary/5" : "border-outline-variant/20 hover:border-outline-variant"
                  )}
                >
                  <p className="text-sm font-bold">{artist}</p>
                  <p className="text-[10px] text-on-surface-variant">Available Today</p>
                </button>
              ))}
            </div>
          </div>
          <button 
            disabled={!bookingData.artist}
            onClick={() => setStep(2)}
            className="w-full py-5 bg-primary text-on-primary rounded-2xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
          >
            Next: Choose Time
            <ChevronDown className="-rotate-90" size={18} />
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Select Time Slot</label>
            <div className="grid grid-cols-3 gap-3">
              {times.map(time => (
                <button 
                  key={time}
                  onClick={() => setBookingData({ ...bookingData, time })}
                  className={cn(
                    "py-3 rounded-xl border-2 transition-all text-xs font-bold",
                    bookingData.time === time ? "border-secondary bg-secondary/5 text-secondary" : "border-outline-variant/20 hover:border-outline-variant"
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-low p-5 rounded-2xl space-y-3">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-on-surface-variant uppercase tracking-widest">Artist</span>
              <span>{bookingData.artist}</span>
            </div>
            <div className="flex justify-between text-xs font-bold">
              <span className="text-on-surface-variant uppercase tracking-widest">Service</span>
              <span>{service.title}</span>
            </div>
            <div className="flex justify-between text-xs font-bold">
              <span className="text-on-surface-variant uppercase tracking-widest">Time</span>
              <span>{bookingData.time || 'Not selected'}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setStep(1)}
              className="flex-1 py-4 bg-surface-container-high rounded-2xl font-bold text-sm"
            >
              Back
            </button>
            <button 
              disabled={!bookingData.time}
              onClick={() => setIsSuccess(true)}
              className="flex-1 py-4 bg-secondary text-on-secondary rounded-2xl font-bold text-sm shadow-xl shadow-secondary/20"
            >
              Confirm Ritual
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CategoryItem({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-xl hover:shadow-md transition-shadow cursor-pointer">
      <span className="text-sm font-medium">{label}</span>
      <span className="bg-secondary/10 text-secondary text-xs font-bold px-2 py-1 rounded">{count}</span>
    </div>
  );
}
