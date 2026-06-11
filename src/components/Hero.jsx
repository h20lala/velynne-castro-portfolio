import StitchImageSection from './StitchImageSection';
import heroImage from '../../Screenshot 2026-06-11 145835.png';

export default function Hero() {
  return (
    <StitchImageSection
      id="hero"
      src={heroImage}
      alt="Social Media Manager hero section"
    />
  );
}
