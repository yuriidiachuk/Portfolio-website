import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Message from "../components/Message";
const Home = () => {
  return (
    <div className="h-full">
      <div className="w-full h-full ">
        <div className="container flex flex-col justify-center h-full pt-40 mx-auto text-center  xl:pt-80 lg:text-left">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas
            <br /> Into <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm mx-auto mb-10 lg:max-w-xl lg:mx-0 lg:mb-16"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni
            nesciunt est debitis dolore impedit necessitatibus a laudantium sit
            sapiente fuga, nulla quaerat ipsam, nostrum.
          </motion.p>
          <div className="relative z-20 flex justify-center lg:hidden">
            <ProjectBtn />
          </div>
          <motion.div
            className="hidden lg:flex"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1080px] xl:w-[1800px] z-0 h-full absolute right-0 bottom-0">
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-none lg:bg-ellipse xl:bg-[length:800px_800px]   -bottom-40 xl:-bottom-80 lg:right-[12%] xl:right-[20%]  lg:bg-right
        lg:bg-no-repeat w-full h-full absolute 
        translate-z-0"
        ></motion.div>
        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full lg:w-[437px] lg:h-[378px] xl:w-[737px] xl:h-[578px] absolute bottom-32 xl:bottom-64  scale-x-[-1] 
            lg:right-[13%] xl:right-[20%] group 
        "
        >
          <div className="invisible transition-all transition duration-500 ease-in-out transform translate-y-12 opacity-0 lg:group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <Message />
          </div>
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
