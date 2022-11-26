import HeroImage from '../assets/images/hero.webp';

function Hero() {
  return <img src={HeroImage} alt="hero" className="h-screen w-auto object-cover brightness-75 contrast-75" />;
}
export default Hero;
