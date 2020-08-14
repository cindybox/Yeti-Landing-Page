import React from "react";
import styled from "styled-components";

const Section1 = () => {
  return (
    <SectionContainer className="section">
      <h1 className="section-title">About</h1>
      <div className="section-box">
        <div className="section-image">
          <img
            className="top-image"
            src={require("../../images/image1.jpg")}
            alt="apple-image"
          />
          <div className="bottom-image" />
        </div>
        <div className="section-content">
          <h3>Andy Griffith turned us down.</h3>
          <p>
            Army had half a day. Bad news. Andy Griffith turned us down. He
            didn't like his nice trailer. That's why you always leave a note!
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  h1 {
    font-size: var(--header1-fontsize-web);
    letter-spacing: 3px;
  }
  .section-image {
    width: 100%;
    position: relative;
  }
  .top-image {
    width: 76vw;
    height: 65vw;
    position: relative;
  }

  .bottom-image {
    width: 76vw;
    height: 65vw;
    position: absolute;
    top: var(--image-offset-mobile);
    left: var(--image-offset-mobile);
    background-color: var(--light-grey);
    z-index: -1;
  }
  h3 {
    margin-top: calc(var(--image-offset-mobile) + 2em);
  }

  @media screen and (min-width: 992px) {
    h1 {
      position: relative;
      z-index: 2;
      margin-bottom: -0.45em;
    }
    h3 {
      margin-top: 0;
    }
    .section-box {
      display: flex;
      align-items: center;
    }
    .top-image {
      width: 48.7vw;
      height: 34.2vw;
    }
    .bottom-image {
      width: 48.7vw;
      height: 34.2vw;
      top: var(--image-offset-web);
      left: var(--image-offset-web);
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    .section-image {
      flex: 0 1 70%;
    }
    .section-content {
      flex: 0 1 30%;
      margin-top: 0;
    }
  }

  @media screen and (min-width: 1200px) {
    .section-image {
      flex: 0 1 80%;
    }
    .section-content {
      flex: 0 1 20%;
    }
  }
`;

export default Section1;
