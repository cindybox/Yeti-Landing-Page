import React from "react";
import Section1 from "./Section1.js";
import Section2 from "./Section2.js";
import Section3 from "./Section3.js";
import styled from "styled-components";

const Sections = () => {
  return (
    <SectionContainer>
      <Section1 />
      <Section2 />
      <Section3 />
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  /*  set section's universal css */

  --section-padding-top-mobile: 3.5rem;
  --section-padding-top-web: 7rem;
  --image-offset-web: 4.8vw;
  --image-offset-mobile: 6.5vw;

  padding: 0 7% 10rem 7%;

  .section:nth-of-type(1) {
    margin-top: 3rem;
  }

  .section {
    margin-top: calc(
      var(--section-padding-top-mobile) + var(--image-offset-mobile)
    );
  }

  @media screen and (min-width: 992px) {
    padding: 0 9% 10rem 9%;
    .section:nth-of-type(1) {
      margin-top: 16rem;
    }
    .section {
      margin-top: calc(
        var(--section-padding-top-web) + var(--image-offset-web)
      );
    }
  }
`;
export default Sections;
