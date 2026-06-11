export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-8 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-outline-variant mt-12 select-none">
      {/* Brand Branding */}
      <a 
        href="#hero" 
        className="font-headline text-2xl md:text-3xl text-primary uppercase font-black tracking-wide hover:opacity-85 transition-opacity"
      >
        Velynne Castro
      </a>

      {/* Role Title */}
      <p className="max-w-[360px] font-body text-[10px] sm:text-xs text-on-surface-variant font-extrabold text-center uppercase tracking-[0.22em] leading-relaxed">
        Social Media Manager | Content Creation (Graphics & Reels)
      </p>

      {/* Privacy / Terms Links */}
      <div className="flex gap-8 font-body text-xs text-on-surface-variant uppercase tracking-widest font-bold">
        <a href="#" className="hover:text-primary transition-colors duration-200">
          Privacy
        </a>
        <a href="#" className="hover:text-primary transition-colors duration-200">
          Terms
        </a>
      </div>
    </footer>
  );
}
