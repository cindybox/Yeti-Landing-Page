import React from "react";
import styled from "styled-components";

const Section2 = () => {
  return (
    <SectionContainer className="section">
      <h1 className="section-title">Our Vision</h1>
      <div className="section-content">
        <h3>
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't
          like his trailer.
        </h3>
        <p>
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't
          like his trailer. That's why you always leave a note! Army had half a
          day. Bad news. Andy Griffith turned us down. He didn't like his
          trailer. That's why you always leave a note! No… but I'd like to be
          asked! Oh, you're gonna be in a coma, all right.
        </p>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  @media screen and (min-width: 992px) {
    display: flex;
    align-items: flex-end;

    .section-title {
      order: 2;
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
    .section-content {
      display: relative;
    }

    p {
      width: 60%;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    h3 {
      width: 50%;
    }
  }

  @media screen and (min-width: 1200px) {
    h3 {
      width: 35%;
    }
  }
`;

export default Section2;
