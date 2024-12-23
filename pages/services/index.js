import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Services = () => {
  return (
    <div className="h-full  py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex lg:mt-10 xl:mt-60 flex-col lg:flex-row gap-x-8 ">
          <div className="text-center  flex flex-col lg:w-[30vw] md:text-left mb-4 lg:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 lg:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto md:mx-0"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              fugiat sint hic possimus laudantium, consequuntur recusandae
              illum, maiores aliquam iure numquam corporis quae? Placeat ipsam
              nesciunt harum similique doloremque officiis.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full  lg:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
