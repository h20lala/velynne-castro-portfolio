export default function StitchImageSection({ id, src, alt, className = '', children }) {
  return (
    <section id={id} className={`relative w-full overflow-hidden bg-[#FFF8F5] ${className}`}>
      <img
        src={src}
        alt={alt}
        className="enhanced-image block w-full max-w-[1308px] h-auto mx-auto select-none"
        loading={id === 'hero' ? 'eager' : 'lazy'}
        decoding="async"
      />
      {children}
    </section>
  );
}
