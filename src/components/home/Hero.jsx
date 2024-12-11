import hedron from "../img/icos.svg";
import half from "../img/half.svg";

const Hero = () => {
  return (
    <div className="home-hero relative  w-full h-full mt-[20%] tablet:h-[70%] laptop:mt-[5%]">
    {/* Decorative Images */}
    <img
      className="absolute w-[40%] top-[30%] blur-[7px] right-0 tablet:w-[15%] tablet:top-[45%] laptop:w-[17%] laptop:top-[45%]"
      src={half}
      alt="Decorative graphic for design"
    />
    <img
      className="absolute w-[35%] top-[10%] blur-[7px] tablet:w-[25%] tablet:top-[10%] tablet:left-[5%] laptop:w-[15%] laptop:top-[8%] laptop:left-[21%]"
      src={hedron}
      alt="Geometric decoration"
    />
  
    {/* Main Content */}
    <div className="disc absolute top-[10%] flex flex-col items-center gap-[1em] w-full h-3/4 tablet:gap-[2em] animate-fade-in">
  <h3 className="welcome text-base text-[#fff] opacity-60 font-medium tablet:text-2xl tablet:mb-0">
    WELCOME TO KRYPTON
  </h3>
  <h2 className="internet text-4xl text-transparent text-center font-medium tablet:text-7xl laptop:w-[80%] laptop:text-8xl bg-hero-pattern bg-clip-text">
    The Internet of
    <br /> Blockchains.
  </h2>
  <p className="text text-[#fff] w-[86%] text-center font-normal text-base tablet:text-xl tablet:w-2/3 laptop:w-[55%] laptop:leading-10 laptop:text-3xl">
    Krypton is an ever-expanding ecosystem of connected apps and services,
    built for a decentralized future.
  </p>
</div>

  </div>
  
  );
};

export default Hero;

