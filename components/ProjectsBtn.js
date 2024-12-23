import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
const ProjectsBtn = () => {
  return (
    <div className="mx-auto lg:mx-0 z-20 ">
      <Link
        href={"/work"}
        className="relative w-[185px] h-[185px] max-xl:w-[155px] max-xl:h-[155px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt="Rounded text"
          className="max-xl:w-[111px] max-xl:h-[118px] animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight
          className="absolute  max-xl:text-3xl text-4xl group-hover:translate-x-2 
        transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
