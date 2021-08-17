import React from "react";
import {
  Section,
  SectionDivider,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { ListParagraph, ListTitle } from "../Technologies/TechnologiesStyles";

const Experience = () => {
  return (
    <Section id="experience">
      <SectionDivider />
      <SectionTitle>Experience</SectionTitle>
      <ListTitle>Devomatics Solutions</ListTitle>
      <ListParagraph>Freelance Frontend Developer</ListParagraph>
      <br />
      <SectionSubText>
        • Developed a full-stack e-commerce web application using Django Rest
        Framework and React for a Leather Bag Store
      </SectionSubText>
      <SectionSubText>
        • Built a Tracker REST API using Django and deployed the solution on
        Swagger API platform Framework and React for a Leather Bag Store
      </SectionSubText>
      <SectionSubText>
        • Worked with some online object storage services (AWS S3 Bucket, GCP
        Bucket) and RESTful backend services (Firebase)
      </SectionSubText>
      <SectionSubText>
        • Worked with a version control system (Git & GitHub)
      </SectionSubText>
      <br />
    </Section>
  );
};

export default Experience;
