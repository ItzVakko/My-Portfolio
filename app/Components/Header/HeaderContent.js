import Image from "next/image";
import MyPhoto from "../../Assets/Images/myself.png";
import HeaderCodeBoxes from "./HeaderCodeBoxes";

const HeaderContent = () => {
  return (
    <div className="relative flex justify-between mt-[36rem] px-44">
      <div>
        <h1 className="text-white text-5xl mt-20 font-fredoka leading-[70px]">
          LET'S EXPLORE MYSELF
          <br /> TOGETHER!
        </h1>
      </div>

      <div className="w-[330px] px-2 pt-2 bg-customGray border border-customWhite border-solid rounded-[5px] shadow-[0_4px_10px_rgba(255,255,255,0.2)]">
        <Image
          src={MyPhoto}
          alt="My Photo"
          className="w-[330px] h-auto opacity-70 contrast-125 saturate-150"
        />

        {/* It shows my description as a code style */}
        <HeaderCodeBoxes />
      </div>
    </div>
  );
};

export default HeaderContent;
