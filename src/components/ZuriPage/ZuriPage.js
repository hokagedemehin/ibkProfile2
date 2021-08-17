import Image from "next/image";
import React from "react";
import {
  SecondaryBtn,
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "../Hero/HeroStyles";

const ZuriPage = () => {
  return (
    <Section id="zuri">
      <SectionDivider />
      <SectionTitle>Join HNG / Zuri Internship Today</SectionTitle>
      <LeftSection>
        <SectionText>
          HNG Internship is a long running, large scale virtual internship for
          people learning to code and design. It focuses on the post-training
          phase, and creates a virtual work environment for participants.
        </SectionText>
        <Image
          src="/images/hng1.png"
          alt="Zuri Picture"
          width={1000}
          height={400}
        />
        <SecondaryBtn onClick={() => (window.location = "https://hng.tech/")}>
          Join Now
        </SecondaryBtn>
      </LeftSection>
    </Section>
  );
};

export default ZuriPage;
