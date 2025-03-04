import WelcomeText from "./Components/WelcomeText/WelcomeText";
import SmoothEffectScroll from "../../components/SmoothEffectScroll";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";

const HomePage = () => {
  return (
    <div>
      <SmoothEffectScroll>
        <WelcomeText />
      </SmoothEffectScroll>

      <SmoothEffectScroll>
        <AboutMe />
      </SmoothEffectScroll>

      <Skills />
    </div>
  );
};

export default HomePage;
