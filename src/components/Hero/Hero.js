import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm <br />
        Demehin Ibukun
      </SectionTitle>
      <SectionText>
        I’m a Frontend Developer and a firm believer in the mobile-first
        approach with a passion for software architecture, responsive web
        applications designs, and cloud computing.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1l3-zTnxuhq-oDL_OAun6GA-iyu4HwjQE/view?usp=sharing")
        }
      >
        Download CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
