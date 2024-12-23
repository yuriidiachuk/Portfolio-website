import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Work = () => {
  return (
    <div className="flex items-center h-full py-36">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col lg:mt-10 xl:mt-60 lg:flex-row gap-x-8 ">
          <div className="text-center  flex flex-col lg:w-[30vw] md:text-left mb-4 lg:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 lg:mt-8"
            >
              My projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto md:mx-0"
            >
              As a developer, i have worked with various of projects including
              Single Page Applications, E Commerce and Landing pages. In my
              portfolio you can find food delivery website and web app,
              searching recipe app, travelling app, app for reservation
              appartement and many other.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full  lg:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
