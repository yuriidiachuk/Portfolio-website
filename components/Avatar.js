import Image from "next/image";
const Avatar = () => {
  return (
    <div className="hidden lg:flex lg:max-w-none -scale-x-100">
      <Image
        src={"/sticker2.png"}
        width={537}
        height={478}
        alt=""
        className="translate-z-0 w-full h-full  "
      />
    </div>
  );
};

export default Avatar;
