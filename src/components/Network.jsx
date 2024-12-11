import square from "./img/square.svg";
import success from "./img/success.svg";
import people from "./img/people.svg";


const cardsData = [
    {
      id: 1,
      title: "CONNECT",
      head: "Connect chains",
      description: "Grow the economy of your chain by connecting to Cronos Hub services using IBC protocol.",
      image: square,
    },
    {
      id: 2,
      title: "INTEGRATE",
      head: "Provide services",
      description: "Get support to bring users to Cronos by providing services such as exchanges, wallets and more.",
      image: success,
    },
    {
      id: 3,
      title: "VALIDATE",
      head: "Validator level",
      description: "Join the ranks of trusted decentralized validator operators in the network and help secure the interchain. ",
      image: people,
    },
  ];
  

const Network = () => {
  return (
    <div className="network  w-full h-auto px-[4vw] flex flex-col items-center justify-center gap-[3em] laptop:flex-row mb-[7em] ">
      <div className="future  text-4xl bg-hero-pattern text-transparent bg-clip-text font-bold laptop:text-4xl">
        Join the network.
      </div>

      {cardsData.map((card) => (
        <div
          key={card.id}
          className="w-full  bg-[#141414] py-5 px-5 flex flex-col gap-[1.5em] items-start justify-center"
        >
            <div className="text-[#A5A5A5] text-sm">{card.title}</div>

            <div className="text text-[26px] bg-hero-pattern  text-transparent bg-clip-text font-bold laptop:text-4xl"> {card.head} </div>
            
            <div className="text-base text-white laptop:text-xl"> {card.description} </div>
            

          <img
            className="  object-cover"
            src={card.image}
            alt= ""
          />
        
                    
        </div>
      ))}

    </div>
  );
};

export default Network;
