import StitchImageSection from './StitchImageSection';
import servicesImage from '../../Screenshot 2026-06-11 150048.png';

export default function Services() {
  return (
    <StitchImageSection
      id="services"
      src={servicesImage}
      alt="Services offered section"
    />
  );
}
