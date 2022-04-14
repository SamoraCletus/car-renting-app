import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../responsive";

const cardillac = require("../../assets/images/50s-cardillac.jpg");

const AboutUsContainer = styled.div`
  ${tw`flex items-center w-full pt-4 pb-4 bg-white 2xl:justify-center pr-7 pl-7 md:pl-0 md:pr-0 `}
`;
const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -3px;

  img {
    width: auto;
    height: 100%;
    border-radius: 90px;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;
const InfoContainer = styled.div`
  ${tw`flex flex-col w-2/3 md:ml-6 2xl:ml-16`}
`;
const Title = styled.h1`
  ${tw`text-2xl font-extrabold text-black md:text-5xl md:leading-normal`}
`;
const InfoText = styled.p`
  ${tw`max-w-2xl mt-4 text-sm font-normal text-gray-500 md:text-base`}
`;
export default function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={cardillac} alt="vehicle" />
      </CarContainer>
      <InfoContainer>
        <Title>Get The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ex est
          corporis minima porro nesciunt iste provident, ipsa, recusandae ad in
          obcaecati consequatur cumque inventore asperiores quos. Placeat
          deserunt soluta corporis ipsam perferendis. Laboriosam sit officiis
          quos, voluptates debitis porro at explicabo earum magni commodi velit
          error. Libero, voluptatibus voluptas.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
