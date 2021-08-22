import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import { HeroPicture } from "../components/HeroPicture/HeroPicture";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import ZuriPage from "../components/ZuriPage/ZuriPage";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects />
      <Technologies />
      <Experience />
      <ZuriPage />
    </Layout>
  );
};

export default Home;
