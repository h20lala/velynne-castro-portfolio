import heroWoman from '../assets/hero_woman.png';

function Flower({ className = '' }) {
  return (
    <svg
      className={`pointer-events-none absolute text-primary opacity-25 ${className}`}
      fill="currentColor"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <path d="M50 0C55 25 75 25 75 50C75 75 55 75 50 100C45 75 25 75 25 50C25 25 45 25 50 0Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[calc(100svh-73px)] items-center justify-center overflow-hidden bg-cream px-5 pb-10 pt-14 sm:px-8 md:pb-16 md:pt-20"
    >
      <Flower className="right-5 top-14 h-24 w-24 md:right-12 md:top-20 md:h-32 md:w-32" />
      <Flower className="bottom-28 left-4 h-20 w-20 md:bottom-36 md:left-12 md:h-24 md:w-24" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <h1 className="select-none font-headline font-black uppercase leading-[0.82] text-primary">
          <span className="block text-[4.25rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem]">
            SOCIAL MEDIA
          </span>
          <span className="block text-[4.75rem] sm:text-[6.75rem] md:text-[9rem] lg:text-[10rem]">
            MANAGER
          </span>
        </h1>

        <div className="relative z-20 -mt-12 w-[92%] max-w-[620px] sm:-mt-20 md:-mt-28 md:max-w-[760px] lg:-mt-36 lg:max-w-[900px]">
          <img
            src={heroWoman}
            alt="Velynne Castro, social media manager"
            className="silhouette-outline-lg mx-auto h-auto w-full select-none"
            loading="eager"
            decoding="async"
          />
        </div>

        <p className="relative z-30 mt-4 max-w-[320px] self-start text-left font-body text-xs font-semibold leading-tight text-primary sm:absolute sm:bottom-28 sm:left-8 sm:mt-0 md:bottom-36 md:text-sm lg:left-10">
          Elevate brand presence through strategic content, audience engagement,
          and digital innovation
        </p>
      </div>
    </section>
  );
}
