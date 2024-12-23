import Link from "next/link";

import {
  RiGithubLine,
  RiFacebookLine,
  RiBehanceLine,
  RiLinkedinLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center text-lg gap-x-5 xl:text-2xl">
      <Link
        href={"https://github.com/yuriidiachuk?tab=repositories"}
        className="hover:text-accent transition=all hover:scale-150 duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={""}
        className="hover:text-accent transition=all hover:scale-150 duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://www.behance.net/yuradesign1"}
        className="hover:text-accent transition=all hover:scale-150 duration-300"
      >
        <RiBehanceLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/yurii-diachuk-24b5b4222/"}
        className="hover:text-accent transition=all hover:scale-150 duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
