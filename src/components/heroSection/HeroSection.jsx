import { Carousel } from "@material-tailwind/react";

const HeroSection = () => {
  return (
    <Carousel className="rounded-xl">
      <img src="../img/hero1.png" alt="image 1" className="h-30 lg:h-full" />
      <img src="../img/hero2.png" alt="image 2" className="h-30 lg:h-full" />
    </Carousel>
  );
};

export default HeroSection;
