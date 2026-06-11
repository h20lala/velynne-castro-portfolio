import connectImage from '../../Screenshot 2026-06-11 150224.png';

const contactLinks = [
  { label: 'Call 63 907 462 8471', href: 'tel:+639074628471', top: '56.5%' },
  { label: 'Open Instagram itsvelynn.e', href: 'https://instagram.com/itsvelynn.e', top: '65.2%' },
  { label: 'Email jackylynjanedcastro@gmail.com', href: 'mailto:jackylynjanedcastro@gmail.com', top: '73.9%' },
];

export default function Connect() {
  return (
    <section id="connect" className="w-full overflow-hidden bg-[#FFF8F5]">
      <div className="relative mx-auto w-full max-w-[1303px]">
        <img
          src={connectImage}
          alt="Connect with me section"
          className="enhanced-image block w-full h-auto select-none"
          loading="lazy"
          decoding="async"
        />
        {contactLinks.map((item) => (
          <a
            key={item.label}
            aria-label={item.label}
            title={item.label}
            className="absolute left-[4%] h-[8%] w-[54%] cursor-pointer rounded-lg outline-none transition hover:bg-primary/5 focus-visible:bg-primary/5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            style={{ top: item.top }}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
          />
        ))}
      </div>
    </section>
  );
}
