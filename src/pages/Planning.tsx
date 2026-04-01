import { useState } from 'react';
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Planning() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const dayNames = ["Mg", "Sn", "Sl", "Rb", "Km", "Jm", "Sb"];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10 md:h-12 md:w-12"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = selectedDate?.getDate() === i && selectedDate?.getMonth() === currentDate.getMonth() && selectedDate?.getFullYear() === currentDate.getFullYear();
      const isToday = new Date().getDate() === i && new Date().getMonth() === currentDate.getMonth() && new Date().getFullYear() === currentDate.getFullYear();
      
      days.push(
        <button
          key={i}
          onClick={(e) => {
            e.preventDefault();
            handleDateClick(i);
          }}
          className={`h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center text-sm transition-all duration-300
            ${isSelected ? 'bg-primary text-on-primary' : 'hover:bg-surface-container-high text-on-surface'}
            ${isToday && !isSelected ? 'border border-primary text-primary' : ''}
          `}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Calendar */}
          <div>
            <h1 className="font-headline italic text-4xl md:text-5xl text-primary mb-6">Pilih Tanggal</h1>
            <p className="text-on-surface/70 font-body font-light mb-12">
              Tentukan tanggal istimewa Anda. Pilih dari ketersediaan kalender kami untuk memulai perjalanan Anda.
            </p>
            
            <div className="bg-surface-container-low p-6 md:p-8 rounded-sm border border-outline-variant">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-headline text-2xl text-primary">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex gap-2">
                  <button onClick={prevMonth} className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-on-surface/70 hover:text-primary">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextMonth} className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-on-surface/70 hover:text-primary">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 md:gap-2 mb-4 justify-items-center">
                {dayNames.map(day => (
                  <div key={day} className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center font-label text-xs uppercase tracking-widest text-on-surface/50">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1 md:gap-2 justify-items-center">
                {renderCalendarDays()}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div>
            <h2 className="font-headline italic text-3xl text-primary mb-6 mt-4 lg:mt-0">Detail Acara</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface/70">Nama Pasangan</label>
                  <input type="text" className="w-full bg-surface-container-low border border-outline-variant p-4 rounded-sm focus:outline-none focus:border-primary transition-colors" placeholder="Romeo & Juliet" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface/70">Email</label>
                  <input type="email" className="w-full bg-surface-container-low border border-outline-variant p-4 rounded-sm focus:outline-none focus:border-primary transition-colors" placeholder="email@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface/70">Tanggal Terpilih</label>
                <input 
                  type="text" 
                  readOnly 
                  value={selectedDate ? selectedDate.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Belum ada tanggal yang dipilih'}
                  className="w-full bg-surface-container-low border border-outline-variant p-4 rounded-sm focus:outline-none focus:border-primary transition-colors text-on-surface/70 italic" 
                />
              </div>

              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface/70">Ceritakan Visi Anda</label>
                <textarea rows={5} className="w-full bg-surface-container-low border border-outline-variant p-4 rounded-sm focus:outline-none focus:border-primary transition-colors" placeholder="Kami memimpikan pernikahan yang..."></textarea>
              </div>
              <button type="button" className="bg-primary text-on-primary px-10 py-4 text-sm font-label uppercase tracking-widest hover:bg-on-surface transition-colors duration-500 rounded-sm w-full">
                Kirim Permintaan
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
