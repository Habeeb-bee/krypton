import hedron from "./img/hedron.svg";
import hedron2 from "./img/icosahedron.svg";
import left from "./img/left.svg"

const Secured = () => {
  return (
    <div
  className="G8684 flex flex-col items-center gap-8 p-6 laptop:flex-row laptop:justify-between laptop:items-center w-full h-auto px-[4vw] relative mb-[7em]"
>
  {/* Image Section */}
  <div className="image-container relative flex justify-center w-full laptop:w-1/2">
    <div className="hedrons relative w-[80%] h-auto laptop:w-[70%] object-cover">
      <div className="absolute w-full h-full top-[1em] right-[1em] bg-[#8B90F8] blur-3xl opacity-60 rounded-full"></div>
      <img className="absolute top-0 left-0 w-full h-auto" src={hedron} alt="" />
      <img className="relative w-full h-auto opacity-80" src={hedron2} alt="" />
    </div>
  </div>

  {/* Text Section */}
  <div className="text-container flex flex-col gap-6 w-full text-center laptop:w-1/2 laptop:text-left laptop:items-start">
    <h2 className="text-4xl bg-hero-pattern  text-transparent bg-clip-text font-bold laptop:text-4xl">
    Secured by the Hedron.
    </h2>
    <p className="text-lg text-white laptop:text-xl">
    In return for securing the services on the Krypton Hub, transaction fees and staking rewards are distributed to HEDRON stakers.
    </p>
    <div className="button-group flex flex-row justify-center items-center gap-4 laptop:flex-row ">
      <div className="F20  justify-center items-center py-[20px] px-[10px]  bg-community-btn w-[10em] h-auto pointer">
    <div className="text text-center">Start Staking</div>   
          </div>
          <div className="F20 flex flex-row text-white justify-center items-center gap-[10px] py-[20px] px-[10px]  w-[10em] h-auto pointer">
    <div className="text">Learn more</div> 
            <img className=" " src={left} alt="" />
          </div>
    </div>
  </div>
</div>

  );
};

export default Secured;
