import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../components/button";
import { SCREENS } from "../../responsive";

const bently = require("../../assets/images/80s-bently.jpg");
const blob = require("../../assets/images/blob.jpg");
const TopSectionContainer = styled.div`
  min-height: 520px;
  margin-top: 3em;
  ${tw`flex justify-between w-full pl-3 pr-3 max-w-screen-2xl lg:pl-12 lg:pr-12`}
`;
const LeftContainer = styled.div`
  ${tw`flex flex-col w-1/2 `}
`;
const RightContainer = styled.div`
  ${tw`relative flex flex-col w-1/2 mt-20 `}
`;
const BlobContainer = styled.div`
  width: 20em;
  height: 25em;
  position: absolute;
  right: -3em;
  top: -9em;
  z-index: -1;
  transform: rotate(-360deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 15em;
    max-height: 15em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 25em;
    max-height: 25em;
    right: 1em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    top: -15em;
    width: 40em;
    max-height: 25em;
    transform: rotate(-20deg);
  }
`;
const Slogan = styled.div`
  ${tw`mb-4 text-2xl font-bold text-red-700 xl:text-6xl sm:text-3xl md:text-5xl lg:font-black md:font-extrabold sm:leading-snug lg:leading-normal xl:leading-relaxed`}
`;
const Description = styled.p`
  ${tw`overflow-hidden text-xs text-gray-800 lg:text-sm xl:text-lg sm:max-h-full max-h-12`}
`;

const StandAloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -1em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
    border-radius: 99px;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 10em;
    right: -5em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 20em;
    right: -2em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 25em;
    right: -1em;
  }
`;
const ButtonsContainer = styled.div`
  ${tw`flex flex-wrap mt-4 `}
`;
export default function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>We offer the Best of Exotic Cars</Slogan>
        <Description>
          always chooose the perfect car that matches your social status and
          wealth. we offer the best price and custom features. Feel free to
          contact us
        </Description>
        <ButtonsContainer>
          <Button text="Rent your Car" />
          <Button theme="filled" text="Sell your Car" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={blob} alt="" />
        </BlobContainer>
        <StandAloneCar>
          <img src={bently} alt="bently image" />
        </StandAloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
