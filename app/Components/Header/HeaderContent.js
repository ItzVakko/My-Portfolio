import Image from "next/image";
import MyPhoto from "../../Assets/Images/myself.png";
import HeaderCodeBoxes from "./HeaderCodeBoxes";

const HeaderContent = () => {
  return (
    <div className="relative flex justify-between mt-[36rem] px-44">
      <div className="mt-28">
        <h1 className="text-white text-6xl font-fredoka">
          LET'S EXPLORE <span className="neon-text">MYSELF</span>
        </h1>

        <div className="w-40 h-1 bg-blue-300 rounded-sm"></div>

        <h1 className="text-white text-6xl mt-4 font-fredoka">TOGETHER!</h1>

        <p className="text-gray-300 mt-6 text-xl">
          I am a passionate coder on a quest to master the impossible. Let's
          dive into my journey, <br /> where creativity meets technology, and
          dreams become reality.
        </p>

        <button className="text-white text-xl font-semibold px-8 py-4 mt-6 rounded-md bg-gradient-to-r from-blue-500 to-teal-400 border border-white shadow-lg hover:shadow-xl hover:bg-gradient-to-l hover:from-teal-400 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:text-black">
          SOCIAL NETWORKS
        </button>
      </div>

      <div className="w-[380px] px-2 pt-2 bg-customGray border border-customWhite border-solid rounded-[5px] shadow-[0_4px_10px_rgba(255,255,255,0.2)]">
        <Image
          src={MyPhoto}
          alt="My Photo"
          className="w-[380px] h-auto opacity-70 contrast-125 saturate-150"
        />

        {/* It shows my description as a code style */}
        <HeaderCodeBoxes />
      </div>
    </div>
  );
};

export default HeaderContent;
