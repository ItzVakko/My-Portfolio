import WelcomeText from "./WelcomeText";
import SmoothEffectScroll from "../SmoothEffectScroll";
import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";

const HeaderWrapper = () => {
  return (
    <header>
      <NavBar />

      <SmoothEffectScroll>
        <WelcomeText />
      </SmoothEffectScroll>

      <SmoothEffectScroll>
        <HeaderContent />
      </SmoothEffectScroll>
    </header>
  );
};

export default HeaderWrapper;
