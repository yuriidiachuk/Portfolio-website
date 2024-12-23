import Image from "next/image";
const Avatar = () => {
  return (
    <div className="hidden lg:flex lg:max-w-none ">
      <Image
        src={"/sticker2.png"}
        width={537}
        height={478}
        alt=""
        className="w-full h-full translate-z-0 "
      />
    </div>
  );
};

export default Avatar;
