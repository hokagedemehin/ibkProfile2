import React from "react";
import Image from "next/image";
import { ImageContainer } from "./HeroPicture.styles";
import { ListTitle } from "../Technologies/TechnologiesStyles";
// import ibk2 from "../../../public/images";
export const HeroPicture = () => {
  return (
    <ImageContainer>
      <Image
        src="/images/ibk2.jpg"
        alt="hero picture"
        width={400}
        height={600}
      />
    </ImageContainer>
    // <ListTitle>picture here</ListTitle>
  );
};
