import StitchImageSection from './StitchImageSection';
import aboutImage from '../../Screenshot 2026-06-11 145907.png';

export default function About() {
  return (
    <StitchImageSection
      id="about"
      src={aboutImage}
      alt="About me section"
    />
  );
}
