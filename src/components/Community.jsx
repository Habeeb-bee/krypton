import left from './img/left.svg';
import helix from './img/helix.svg'

const Community = () => {
  return (
 
    <div id='learn'
    className="community G8690 relative mb-[7em] h-auto px-[4vw] flex flex-col w-full gap-[2em] animate-fade-in tablet:mt-[7em] 
      laptop:mt-[15em] laptop:flex-row laptop:items-center laptop:justify-between  "
  >
    {/* DISC Section */}
    <div className="disc G8689 w-full laptop:w-[45%] relative h-full">
      <img
        className="absolute top-[3em] -left-[3em] w-[10em] h-[17em] tablet:w-[15em] tablet:h-[20em]
        laptop:-left-[11em] laptop:top-[5em] laptop:w-[25em] "
        src={helix}
        alt=""
      />
      <div className="FR27 flex flex-col items-start p-0 gap-[20px] tablet:gap-[30px] relative w-full">
        <h3 className="text-white opacity-60 text-sm text-start font-normal tablet:text-xl">
          COMMUNITY-OWNED AND OPERATED
        </h3>
        <h1 className="bg-hero-pattern  text-transparent bg-clip-text text-[45px] font-medium tablet:text-6xl
        laptop:text-7xl ">
          Enter a Universe of Connected Services.
        </h1>
        <h3 className="text-white text-base font-normal tablet:text-xl
        ">
          Krypton apps and services connect using IBC, the Inter-Blockchain
          Communication protocol. This innovation enables you to freely exchange
          assets and data across sovereign.
        </h3>
        <div className="btns flex flex-row gap-[20px] tablet:text-2xl">
          <div className="F20 bg-community-btn py-[15px] px-[40px] pointer">Learn</div>
          <div className="F20 flex flex-row gap-[10px] justify-center items-center  text-white items-start py-[15px] px-[25px] pointer">
          <a href="https://chat.whatsapp.com/HnnuYN7tfwXE6fR6TF8f3A" >Explore Tokens</a>
            <img className="" src={left} alt="" />
          </div>
        </div>
      </div>
    </div>
  
    {/* NUM Section */}
    <div
      className="num G8688 w-full laptop:w-[45%] flex flex-col items-end justify-center gap-[2em] h-full"
    >
      <div className="F28 flex flex-col items-end text-end laptop:w-[292px] laptop:h-[172px] ">
        <h2 className="font-bold bg-hero-pattern text-transparent bg-clip-text text-8xl font-medium">
          265+
        </h2>
        <h3 className="text-white font-normal text-2xl">Apps & services</h3>
      </div>
      <div className="F29 flex flex-col items-end text-end laptop:w-[292px] laptop:h-[172px]">
        <h2 className="font-bold bg-hero-pattern text-transparent bg-clip-text text-8xl font-medium">
          $63B+
        </h2>
        <h3 className="text-white font-normal text-2xl">Digital assets</h3>
      </div>
    </div>
  </div>
  );
};

export default Community;
