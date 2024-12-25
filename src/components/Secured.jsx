import React from "react";
import hedron from "./img/hedron.svg";
import hedronII from "./img/icosahedron.svg";
import left from "./img/left.svg";
import { motion } from "motion/react";

const Secured = () => {
  return (
    <div className="G8684 flex flex-col items-center gap-8 p-6 laptop:flex-row laptop:justify-between laptop:items-center w-full h-auto px-[4vw] relative mb-[7em]">
      
      {/* Image Section */}
      <motion.div
        className="image-container relative flex justify-center w-full laptop:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="hedrons relative w-[80%] h-auto laptop:w-[70%] object-cover">
        <motion.div
  className="absolute w-full h-full top-[1em] right-[1em] bg-[#8B90F8] blur-3xl opacity-60 rounded-full"
  initial={{ opacity: 0.4 }} 
  animate={{ opacity: 1 }} 
  transition={{
    duration: 1.5,       
    ease: "easeInOut",  
    repeat: Infinity,   
    repeatType: "reverse", 
  }}
/>
          <img className="absolute top-0 left-0 w-full h-auto" src={hedron} alt="" />
          <img className="relative w-full h-auto opacity-80" src={hedronII} alt="" />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="text-container flex flex-col gap-6 w-full text-center laptop:w-1/2 laptop:text-left laptop:items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className="text-4xl bg-hero-pattern text-transparent bg-clip-text font-bold laptop:text-5xl">
          Secured by the Hedron.
        </h2>
        <p className="text-lg text-white laptop:text-xl">
          In return for securing the services on the Krypton Hub, transaction fees and staking rewards are distributed to HEDRON stakers.
        </p>
        
        {/* Button Group */}
        <div className="button-group flex flex-row justify-center items-center gap-4 laptop:flex-row">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="F20 justify-center items-center py-[20px] px-[10px] bg-community-btn w-[10em] h-auto pointer cursor-pointer"
          >
            <div className="text text-center">Start Staking</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="F20 flex flex-row text-white justify-center items-center gap-[10px] py-[20px] px-[10px] w-[10em] h-auto pointer cursor-pointer"
          >
            <div className="text">Learn more</div>
            <img src={left} alt="" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Secured;
