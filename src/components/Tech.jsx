import cylinder from "./img/Cylinder.svg";
import cylinder2 from "./img/Cylinder_2.svg";

const Tech = () => {
  return (
    <div className="tech w-full h-auto px-[4vw] flex flex-col gap-[3em] mb-[7em] laptop:flex-row laptop:items-center laptop:justify-end ">
    {/* Left Section: Descriptive Blocks */}
    <div className="G8677 flex flex-col gap-[3em]">
      {/* Technology Section */}
      <div className="frame39 text-start flex flex-col gap-[1.5em]">
        <div className="text text-[#A5A5A5] text-sm">TECHNOLOGY</div>
        <div className=" text-5xl bg-hero-pattern text-transparent bg-clip-text font-bold">
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
      </div>
  
      {/* Low Fees Section */}
      <div className="frame41 text-start flex flex-col gap-[1.5em]">
        <div className="text text-[#A5A5A5] text-sm">LOW FEES</div>
        <div className="future text-6xl bg-hero-pattern text-transparent bg-clip-text font-bold laptop:text-4xl">
          $0.01
        </div>
        <div className="text-lg text-white laptop:text-xl">
          Enjoy the lowest fees - almost zero
        </div>
      </div>
    </div>
  
    {/* Right Section: Highlights and Image */}
    <div className="G8678 flex flex-col gap-[3em] w-full relative">
      {/* Proof of Stake Section */}
      <div className="frame40 text-start flex flex-col gap-[1.5em] w-full">
        <div className="text text-[#A5A5A5] text-sm">PROOF OF STAKE</div>
        <div className="future text-6xl bg-hero-pattern text-transparent bg-clip-text font-bold laptop:text-4xl">
          99%
        </div>
        <div className="text-lg text-white laptop:text-xl">
          Low carbon footprint
        </div>
      </div>
  
      {/* Fast Transactions Section */}
      <div className="frame42 text-start flex flex-col gap-[1.5em] relative">
        <div className="text text-[#A5A5A5] text-sm">FAST TRANSACTIONS</div>
        <div className="future text-6xl bg-hero-pattern text-transparent bg-clip-text font-bold laptop:text-4xl">
          5 Sec
        </div>
        <div className="text-lg text-white laptop:text-xl">
          Transaction confirmed in seconds
        </div>
      </div>
  
      {/* Decorative Image */}
      <div className="image-container absolute  top-0 right-0 w-[70%] laptop:w-[30%] -z-10">
        <div className="cylinders relative  h-auto  object-cover">
          <img
            className="absolute top-0 right-0 w-full h-auto"
            src={cylinder2}
            alt="Background Cylinder 2"
          />
          <img
            className="relative w-full h-auto opacity-80"
            src={cylinder}
            alt="Background Cylinder"
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Tech;
