import { motion } from "motion/react";
import left from "../../public/left.svg";
import locker from "../../public/locker.svg";
import yuan from "../../public/yuan.svg";
import eth from "../../public/eth.svg";

const Future = () => {
  return (
    <div className="G8681 w-full h-auto px-[4vw] flex flex-col gap-[4em] mb-[7em]">
      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="Frame38 flex flex-col items-start gap-[30px]"
      >
        <div className="future text-4xl bg-hero-pattern text-transparent bg-clip-text font-bold laptop:text-4xl">
          Be Part of the Open Economy of the Future.
        </div>

        <div className="G8657 flex flex-row text-white justify-start items-center gap-[10px] cursor-pointer">
          <div className="text text-white">Powerful features</div>
          <img src={left} alt="Arrow Icon" />
        </div>
      </motion.div>

      {/* GRID SECTION */}
      <div className="G8680 w-full px-5 grid grid-cols-4 grid-rows-4 gap-4">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="G8666 bg-[#141414] py-5 px-5 col-span-4 row-span-2 flex flex-col gap-[2em] items-start justify-start relative laptop:col-span-2 laptop:row-span-4"
        >
          <div className="div text-base text-[#A5A5A5] text-start">
            INTERCHAIN ACCOUNTS
          </div>
          <div className="absolute w-1/2 h-1/4 top-1/4 -z-5 bg-[#fcf5ad40] blur-3xl opacity-60 rounded-full laptop:left-0 laptop:top-[35%]"></div>
          <img className="laptop:w-[65%]" src={locker} alt="Locker Icon" />
          <div className="text text-4xl bg-hero-pattern text-transparent bg-clip-text font-bold laptop:w-[65%] laptop:text-5xl">
            One secure account for all your digital assets.
          </div>
          <div className="soon text-[#A5A5A5] text-base">COMING SOON</div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="G8667 col-span-4 w-full bg-[#141414] py-5 px-5 flex gap-[3em] relative items-center justify-between laptop:col-span-2 laptop:row-span-2 laptop:gap-[8em]"
        >
          <div className="texts w-1/2 flex flex-col gap-[2em]">
            <div className="xchange text-sm text-[#A5A5A5]">
              DECENTRALIZED EXCHANGE
            </div>
            <div className="text text-[26px] bg-hero-pattern text-transparent bg-clip-text font-bold laptop:text-5xl">
              Swap tokens & collectibles.
            </div>
            <div className="soon text-[#A5A5A5] text-sm">COMING SOON</div>
          </div>

          <div className="coin relative w-1/2 top-[10%]">
            <div className="absolute w-2/3 h-1/2 top-[3em] right-[1em] bg-[#fcf5ad40] blur-xl opacity-90 rounded-full laptop:right-[5em] laptop:w-[70%] laptop:top-[4.5em]"></div>
            <img
              className="absolute w-full -top-1/4 laptop:w-full laptop:right-[3.8em]"
              src={eth}
              alt="Ethereum Coin"
            />
            <img
              className="relative laptop:w-full laptop:right-[4em]"
              src={yuan}
              alt="Yuan Coin"
            />
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="G8668 col-start-1 col-span-2 row-span-2 bg-[#141414] py-5 px-5 flex flex-col gap-[2em] items-start justify-center laptop:col-span-1 laptop:row-span-2"
        >
          <div className="soon text-[#A5A5A5] text-sm">LIQUIDITY POOL</div>
          <div className="text text-[26px] bg-hero-pattern text-transparent bg-clip-text font-bold laptop:text-5xl">
            Provide liquidity, earn rewards.
          </div>
          <div className="soon text-[#A5A5A5] text-sm">COMING SOON</div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="G8669 col-start-3 col-span-2 row-span-2 bg-[#141414] py-5 px-5 flex flex-col gap-[4.5em] items-start justify-center laptop:col-span-1 laptop:row-span-2"
        >
          <div className="soon text-[#A5A5A5] text-sm">WRAPPED ETH</div>
          <div className="text text-[26px] bg-hero-pattern text-transparent bg-clip-text font-bold laptop:text-5xl">
            Eth Included
          </div>
          <div className="soon text-[#A5A5A5] text-sm">COMING SOON</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Future;
