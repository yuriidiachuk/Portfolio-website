import React, { useState } from "react";
// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
  SiRedux,
  SiGit,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiTailwindcss />,
          <SiFramer />,
          <SiRedux />,
          <SiGit />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - Freelance",
        stage: "2021 - Present",
      },
      {
        title: "Web Developer - Freelance",
        stage: "2023 - Present",
      },
      // {
      //   title: "Intern - DEF Corporation",
      //   stage: "2008 - 2010",
      // },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - Merito University, Wroclaw, Poland",
        stage: "2024",
      },
      // {
      //   title: "Computer Science Diploma - AV Technical Institute",
      //   stage: "2009",
      // },
      {
        title: "Certified Web Designer - WAYUP.in, Wroclaw, Poland",
        stage: "2021",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full py-32 text-center md:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden md:flex  absolute bottom-0 -left-[160px] xl:-left-[270px] xl:w-[937px] xl:h-[778px]"
      >
        <Avatar />
      </motion.div>
      <div className="container flex flex-col items-center h-full mx-auto xl:mt-60 lg:flex-row gap-x-6">
        {/* text */}
        <div className="flex flex-col flex-1 text-center lg:text-left">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px]  mx-auto lg:mx-0 mb-6 xl:mb-12 px-2 lg:px-0"
          >
            2 years ago, I began freelancing as a developer. Since then,
            I&apos;ve done remote work for agencies, and collaborated on digital
            products for business and consumer use{" "}
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden mx-auto mb-6 lg:mb-28 md:flex md:max-w-xl lg:max-w-none lg:mx-0"
          >
            <div className="flex flex-1 md:gap-x-6 ">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold lg:text-4xl text-accent">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold lg:text-4xl text-accent">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* works */}
              <div className="relative flex-1 after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold lg:text-4xl text-accent">
                  <CountUp start={0} end={18} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:mt-6 lg:max-w-[48%] h-[480px]"
        >
          <div className="flex mx-auto mb-4 gap-x-4 lg:gap-x-8 lg:mx-0">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } relative capitalize cursor-pointer xl:text-lg after:w-8
                  after:h-[2px] after:bg-white after:absolute after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center py-2 lg:py-6 gap-y-2 lg:gap-y-4 lg:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-col items-center flex-1 md:flex-row max-w-max gap-x-2 text-white/70"
                >
                  <div className="mb-2 font-light md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
