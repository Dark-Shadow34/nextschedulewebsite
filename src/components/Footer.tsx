export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-brand-600 to-blue-500 flex items-center justify-center">
            <div className="w-3 h-3 bg-white mask-calendar" />
          </div>
          <span className="font-display font-bold text-lg text-white">NextSchedule</span>
        </div>
        
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} NextSchedule. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Flippa Listing</a>
          <a href="mailto:johannes.ittner@gmail.com" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
