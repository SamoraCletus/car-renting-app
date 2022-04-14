import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./NavItems";
const NavContainer = styled.div`
  box-shadow: 0 3px 7px -2px rgba(0, 0, 0, 0.4);
  ${tw`flex flex-row items-center justify-between w-full p-2 mb-10 bg-gray-100 max-w-screen-2xl lg:pl-12 lg:pr-12`}
`;

const LogoContainer = styled.div``;
export function Navbar() {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavContainer>
  );
}
