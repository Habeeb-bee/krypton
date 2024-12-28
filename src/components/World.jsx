import { motion } from "motion/react";

const cardsData = [
  {
    id: 1,
    title: "Community Chart",
    description: "Ask general questions and chat with the worldwide community on WhatsApp.",
    link: "https://chat.whatsapp.com/HnnuYN7tfwXE6fR6TF8f3A",
  },
  {
    id: 2,
    title: "Twitter",
    description: "Follow @krypton to get the latest news and updates from across the ecosystem.",
    link: "https://x.com/ha90094?s=09",
  },
  {
    id: 3,
    title: "Developer Chat",
    description: "Have technical questions about Krypton tools? Ask a developer on WhatsApp.",
    link: "https://wa.me/qr/HNITN35X4YHEG1",
  },
  {
    id: 4,
    title: "Krypton Forum",
    description: "Thinking about becoming a validator or interested in network matters?",
    link: "https://chat.whatsapp.com/HnnuYN7tfwXE6fR6TF8f3A",
  },
];

const World = () => {
  return (
    <div className="8692 w-full h-auto px-[4vw] flex flex-col gap-[3em] mb-[7em]">
      <div className="8676 relative">
        <div className="frame47 flex flex-col gap-[2em]">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="future text-5xl bg-hero-pattern text-transparent bg-clip-text font-bold"
          >
            Meet the worldwide community.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-white laptop:text-xl"
          >
            Join a fast-growing community of developers and innovators connected all over the world, building the new era of the internet.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl text-white relative"
          >
            Community <span className="absolute pl-[5px] -top-[7px] text-3xl"> &#8599; </span>
          </motion.div>
        </div>

        {/* Decorative Image */}
        <div className="image-container absolute top-0 -left-[4vw] w-[50%] laptop:-left-[10vw] -z-10">
          <div className="cylinders relative h-auto object-cover">
            <img className="absolute top-0 left-0 w-full h-auto" src="/assets/sphere_2.svg" alt="Background Sphere 2" />
            <img className="relative w-full h-auto opacity-80" src="/assets/sphere.svg" alt="Background Sphere" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="8675"
      >
        {cardsData.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 * card.id }}
            className="w-full py-5 px-[8vw] flex flex-col gap-[1.5em] items-start justify-center"
          >
            <div className="text-white text-xl relative laptop:text-3xl">
              <a href={card.link}>{card.title}</a>
              <span className="absolute pl-[5px] -top-[7px] text-sm"> &#8599; </span>
            </div>
            <div className="text-base text-[#A5A5A5] laptop:text-2xl">{card.description}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default World;
