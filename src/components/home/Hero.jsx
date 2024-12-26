import hedron from "../../../public/icos.svg";
import half from "../../../public/half.svg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="home-hero relative   w-full h-full mt-[20%]  laptop:mt-[10%]  ">
    {/* Decorative Images */}
    <motion.img
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute w-[40%] top-[30%] blur-[7px] right-0 tablet:w-[15%] tablet:top-[45%] laptop:w-[17%] laptop:top-[45%]"
      src={half} 
      alt="Decorative graphic for design"
    />
    <motion.img
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      className="absolute w-[35%] top-[10%] blur-[7px] tablet:w-[25%] tablet:top-[10%] tablet:left-[5%] laptop:w-[15%] laptop:top-[8%] laptop:left-[21%]"
      src={hedron}
      alt="Geometric decoration"
    />
  
    {/* Main Content */}
    <div className="disc absolute top-[10%] flex flex-col items-center gap-[1em] w-full h-3/4 tablet:gap-[2em] ">
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
 className="welcome text-base text-[#fff] opacity-60 font-medium tablet:text-2xl tablet:mb-0">
    WELCOME TO KRYPTON
  </motion.div>
  <motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
  className="internet text-4xl text-transparent text-center font-bold font-Epilogue tablet:text-7xl laptop:w-[80%] laptop:text-8xl bg-hero-pattern bg-clip-text">
    The Internet of
    <br /> Blockchains.
  </motion.div>
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
   className="text text-[#fff] w-[86%] text-center font-normal text-base tablet:text-xl tablet:w-2/3 laptop:w-[55%] laptop:leading-10 laptop:text-3xl">
    Krypton is an ever-expanding ecosystem of connected apps and services,
    built for a decentralized future.
  </motion.div>
</div>

  </div>
  
  );
};

export default Hero;

