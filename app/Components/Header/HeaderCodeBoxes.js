const HeaderCodeBoxes = () => {
  return (
    <>
      {/* Html code imitation part */}
      <div className="bg-[#2E2E2E] absolute top-10 translate-x-[-75px] border-2 border-lightGray px-2 py-1">
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
      {/* CSS Code imitation part */}
      <div className="bg-[#2E2E2E] absolute top-60 translate-x-[295px] border-2 border-lightGray px-2 py-1">
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
      {/* Javascript Code imitation part */}
      <div className="bg-[#2E2E2E] absolute top-[440px] translate-x-[-105px] border-2 border-lightGray px-2 py-1">
        <ol className="list-none">
          <li className="text-gray-400">
            1{" "}
            <span className="text-pink-400">
              const <span className="text-blue-200">myself</span>{" "}
              <span className="text-gray-200">=</span>{" "}
              <span className="text-cssOrange">&#40;&#41;</span> =&#62;{" "}
              <span className="text-cssOrange">&#123;</span>
            </span>
          </li>
          <li className="text-gray-400">
            2{" "}
            <span className="ml-4 text-pink-400">
              return <span className="text-cssOrange">&#123;</span>
            </span>
          </li>
          <li className="text-gray-400">
            3{" "}
            <span className="ml-8 text-blue-200">
              alias: <span className="text-green-300">"Code Explorer"</span>,
            </span>
          </li>
          <li className="text-gray-400">
            4{" "}
            <span className="ml-8 text-blue-200">
              quest: <span className="text-green-300">"Master Code"</span>,
            </span>
          </li>
          <li className="text-gray-400">
            5{" "}
            <span className="ml-8 text-blue-200">
              weapon: <span className="text-green-300">"Keyboard"</span>,
            </span>
          </li>
          <li className="text-gray-400">
            6{" "}
            <span className="ml-8 text-blue-200">
              motto: <span className="text-green-300">"Do Impossible"</span>
            </span>
          </li>
          <li className="text-gray-400">
            7 <span className="ml-4 text-cssOrange">&#125;</span>
          </li>
          <li className="text-gray-400">
            8 <span className="text-cssOrange">&#125;</span>
          </li>
        </ol>
      </div>
    </>
  );
};

export default HeaderCodeBoxes;
