import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const carlogo = require("../../assets/images/carlogo.jpeg");

interface ILogoProps {
  color?: "white" | "dark";
}
const LogoContainer = styled.div`
  ${tw`flex items-center mt-1`}
`;

const LogoText = styled.div`
  ${tw`m-1 text-lg font-bold text-black`};
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;
const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`}
  img {
    width: auto;
    height: 100%;
    border-radius: 5px;
  }
`;
export function Logo(props: ILogoProps) {
  const { color } = props;
  return (
    <LogoContainer>
      <Image>
        <img src={carlogo} alt="car logo" />
      </Image>
      <LogoText color={color || "dark"}>Cars Store</LogoText>
    </LogoContainer>
  );
}
