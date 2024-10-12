import Image from "next/image";
import MyPhoto from "../../Assets/Images/myself.png";

const HeaderContent = () => {
  return (
    <div className="relative flex justify-center">
      <div className="w-[330px] px-2 pt-2 bg-customGray border border-customWhite border-solid rounded-[5px] shadow-[0_4px_10px_rgba(255,255,255,0.2)]">
        <Image
          src={MyPhoto}
          alt="My Photo"
          className="w-[330px] h-auto opacity-70 contrast-125 saturate-150"
        />

        <div className="w-32 h-346 bg-[#2E2E2E] absolute top-10 translate-x-[-75px] border-2 border-lightGray pl-2 pt-1 pb-2">
          <ol className="list-none">
            <li className="text-gray-400">
              1{" "}
              <span>
                &lt;<span className="text-red-400">body</span>&gt;
              </span>
            </li>
            <li className="text-gray-400">
              2{" "}
              <span className="ml-4">
                &lt;<span className="text-red-400">div</span>&gt;
              </span>
            </li>
            <li className="text-gray-400">
              3{" "}
              <span className="ml-8">
                &lt;<span className="text-yellow-200">Img</span> /&gt;
              </span>
            </li>
            <li className="text-gray-400">
              4{" "}
              <span className="ml-4">
                &lt;/<span className="text-red-400">div</span>&gt;
              </span>
            </li>
            <li className="text-gray-400">
              5{" "}
              <span>
                &lt;/<span className="text-red-400">body</span>&gt;
              </span>
            </li>
          </ol>
        </div>

        <div className="w-44 h-50 bg-[#2E2E2E] absolute top-60 translate-x-[275px] border-2 border-lightGray pl-2 pt-1 pb-2">
          <ol className="list-none">
            <li className="text-gray-400">
              1 <span className="text-cssOrange">.my-info &#123;</span>
            </li>
            <li className="text-gray-400">
              2{" "}
              <span className="ml-4 text-cssPurple">
                name: <span className="text-cssRed">vako</span>
              </span>
            </li>
            <li className="text-gray-400">
              3{" "}
              <span className="ml-4 text-cssPurple">
                age: <span className="text-cssOrange">17</span>
              </span>
            </li>
            <li className="text-gray-400">
              4{" "}
              <span className="ml-4 text-cssPurple">
                experience: <span className="text-cssOrange">2y</span>
              </span>
            </li>
            <li className="text-gray-400">
              5{" "}
              <span className="ml-4 text-cssPurple">
                country: <span className="text-cssRed">georgia</span>
              </span>
            </li>
            <li className="text-gray-400">
              6{" "}
              <span className="ml-4 text-cssPurple">
                gender: <span className="text-cssRed">male</span>
              </span>
            </li>
            <li className="text-gray-400">
              7 <span className="text-cssOrange">&#125;</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
