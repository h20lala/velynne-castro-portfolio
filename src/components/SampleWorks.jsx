import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import graphicDesignsImage from '../../Screenshot 2026-06-11 150143.png';
import videoCreationsImage from '../../Screenshot 2026-06-11 150209.png';

const samples = [
  {
    src: graphicDesignsImage,
    alt: 'Sample works graphic designs section',
    label: 'Graphic Designs',
  },
  {
    src: videoCreationsImage,
    alt: 'Sample works video creations section',
    label: 'Video Creations',
  },
];

export default function SampleWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  const goToSlide = (index) => {
    const nextIndex = (index + samples.length) % samples.length;
    const track = trackRef.current;

    if (track) {
      track.scrollTo({
        left: nextIndex * track.clientWidth,
        behavior: 'smooth',
      });
    }

    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const handleScroll = () => {
      const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
      setActiveIndex(Math.min(samples.length - 1, Math.max(0, nextIndex)));
    };

    track.addEventListener('scroll', handleScroll, { passive: true });

    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="sample-works" className="relative w-full overflow-hidden bg-[#FFF8F5]">
      <div
        ref={trackRef}
        className="no-scrollbar flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
        aria-label="Sample works carousel"
      >
        {samples.map((sample) => (
          <div key={sample.label} className="relative min-w-full snap-center">
            <img
              src={sample.src}
              alt={sample.alt}
              className="enhanced-image block w-full max-w-[1304px] h-auto mx-auto select-none"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex items-center justify-center gap-3 sm:bottom-6">
        <button
          type="button"
          onClick={() => goToSlide(activeIndex - 1)}
          className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-white/90 text-primary shadow-md ring-1 ring-primary/15 transition hover:bg-white active:scale-95"
          aria-label="Show previous sample work"
        >
          <ChevronLeft size={22} strokeWidth={2.4} aria-hidden="true" />
        </button>

        <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-md ring-1 ring-primary/15">
          {samples.map((sample, index) => (
            <button
              key={sample.label}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index ? 'w-7 bg-primary' : 'w-2.5 bg-primary/35 hover:bg-primary/60'
              }`}
              aria-label={`Show ${sample.label}`}
              aria-current={activeIndex === index ? 'true' : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-white/90 text-primary shadow-md ring-1 ring-primary/15 transition hover:bg-white active:scale-95"
          aria-label="Show next sample work"
        >
          <ChevronRight size={22} strokeWidth={2.4} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
