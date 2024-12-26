import { motion } from "motion/react";

const Tech = () => {
  return (
    <div className="tech w-full h-auto px-[4vw] flex flex-col gap-[3em] mb-[7em] laptop:flex-row laptop:items-center laptop:gap-[25em] laptop:justify-end">
      {/* Left Section: Descriptive Blocks */}
      <div className="G8677 flex flex-col gap-[3em]">
        {/* Technology Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="frame39 text-start flex flex-col gap-[1.5em]"
        >
          <div className="text text-[#A5A5A5] text-sm">TECHNOLOGY</div>
          <div className="text-5xl bg-hero-pattern text-transparent bg-clip-text font-bold">
            The most trusted way to build value.
          </div>
          <div className="text-lg text-white laptop:text-xl">
            Krypton is a state-of-the-art blockchain framework that powers the
            Krypton Hub and its rapidly expanding orbit of sovereign chains.
          </div>
          <div className="text-lg text-white">
            Developers can use the SDK to build innovative applications that
            create value through exchange with the Krypton Hub.
          </div>
        </motion.div>

        {/* Low Fees Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="frame41 text-start flex flex-col gap-[1.5em]"
        >
          <div className="text text-[#A5A5A5] text-sm">LOW FEES</div>
          <div className="future text-6xl bg-hero-pattern text-transparent bg-clip-text font-bold laptop:text-6xl">
            $0.01
          </div>
          <div className="text-lg text-white laptop:text-xl">
            Enjoy the lowest fees - almost zero
          </div>
        </motion.div>
      </div>

      {/* Right Section: Highlights and Image */}
      <div className="G8678 flex flex-col gap-[3em] w-full relative">
        {/* Proof of Stake Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="frame40 text-start flex flex-col gap-[1.5em] w-full"
        >
          <div className="text text-[#A5A5A5] text-sm">PROOF OF STAKE</div>
          <div className="future text-6xl bg-hero-pattern text-transparent bg-clip-text font-bold laptop:text-6xl">
            99%
          </div>
          <div className="text-lg text-white laptop:text-xl">
            Low carbon footprint
          </div>
        </motion.div>

        {/* Fast Transactions Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="frame42 text-start flex flex-col gap-[1.5em] relative"
        >
          <div className="text text-[#A5A5A5] text-sm">FAST TRANSACTIONS</div>
          <div className="future text-6xl bg-hero-pattern text-transparent bg-clip-text font-bold laptop:text-6xl">
            5 Sec
          </div>
          <div className="text-lg text-white laptop:text-xl">
            Transaction confirmed in seconds
          </div>
        </motion.div>

        {/* Decorative Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="image-container absolute top-0 right-0 w-[70%] laptop:w-[100%] laptop:-top-[1em] laptop:-right-[4vw] -z-10 overflow-hidden"
        >
          <div className="cylinders relative w-full h-full">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/cylinder_2.svg"
              alt="Background Cylinder 2"
            />
            <img
              className="relative w-full h-full opacity-80 object-cover"
              src="/cylinder.svg"
              alt="Background Cylinder"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
