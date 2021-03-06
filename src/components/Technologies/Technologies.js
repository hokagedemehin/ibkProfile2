import React from "react";
import { DiFirebase, DiReact, DiZend, DiGoogleAnalytics } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development
      environment. From Back-end to Front-end
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML / CSS / Javascript <br />
            React.js / Next.js <br />
            Tailwind CSS / Material UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            DJango and Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGoogleAnalytics size="3rem" />
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>Git</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
