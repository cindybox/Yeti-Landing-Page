import React from "react";
import styled from "styled-components";

const Section3 = () => {
  return (
    <SectionContainer className="section">
      <div className="section-image">
        <img
          className="top-image"
          src={require("../../images/image2.jpg")}
          alt="apple-image"
        />
        <img
          className="bottom-image"
          src={require("../../images/mask.svg")}
          alt="back-image"
        />
      </div>
      <h1 className="section-title">Our Values</h1>

      <div className="section-content">
        <h3>
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't
          like his trailer.
        </h3>
        <div className="section-paragraph">
          <p>
            Army had half a day. Bad news. Andy Griffith turned us down. He
            didn't like his trailer. That's why you always leave a note! Army
            had half a day. Bad news. Andy Griffith turned us down. He didn't
            like his trailer. That's why you always leave a note! No… but I'd
            like to be asked! Oh, you're gonna be in a coma, all right.
          </p>
          <br />
          <p>
            Army had half a day. Bad news. Andy Griffith turned us down. He
            didn't like his trailer. That's why you always leave a note! Army
            had half a day. Bad news. Andy Griffith turned us down.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  --paragraph-gap: 2rem;
  position: relative;

  .section-image {
    position: relative;
  }
  .top-image {
    width: 76vw;
    height: 42vw;
    top: var(--image-offset-mobile);
    left: var(--image-offset-mobile);
    position: absolute;
  }

  .bottom-image {
    z-index: -1;
    width: 76vw;
    height: 42vw;
  }

  h1 {
    margin-top: calc(0.6em + var(--image-offset-mobile));
  }

  h3 {
    margin: 0 auto;
  }

  @media screen and (min-width: 992px) {
    h1 {
      margin: 0 auto;
      top: calc(var(--image-offset-web) - 0.5em);
      position: relative;
      text-align: center;
      z-index: 2;
    }

    h3 {
      margin-top: 4em;
      width: 50%;
      text-align: center;
    }

    .top-image {
      width: 74.5vw;
      height: 38.4vw;
      top: var(--image-offset-web);
      left: var(--image-offset-web);
    }

    .bottom-image {
      width: 74.5vw;
      height: 38.4vw;
    }

    .section-paragraph {
      display: flex;
      justify-content: space-between;
    }
    .section-paragraph p {
      flex: 0 1 calc(50% - var(--paragraph-gap));
    }
  }
`;

export default Section3;
