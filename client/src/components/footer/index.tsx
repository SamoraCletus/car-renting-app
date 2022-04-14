import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`flex items-center justify-center min-w-full pt-4 md:pt-12 `}
`;
const AboutContainer = styled.div`
  ${tw`flex flex-col pl-10 pr-10 mr-2 md:mr-9 md:p-3 md:pr-3 `}
`;
const InnerContainer = styled.div`
  ${tw`flex flex-wrap w-full h-full ml-6 max-w-screen-2xl `}
`;
const AboutText = styled.p`
  ${tw`max-w-xs mt-2 mr-3 text-sm font-normal leading-5 text-white`}
`;
const LinksList = styled.ul`
  ${tw`flex flex-col list-none outline-none `}
`;
const ListItem = styled.li`
  ${tw`mb-3 `}
  & a {
    ${tw`text-sm text-white transition-all hover:text-blue-300`}
  }
`;
const BottomContainer = styled.div`
  ${tw`flex mt-7 md:mt-1 `}
`;
const CopyrightText = styled.span`
  font-size: 12px;
  ${tw`text-gray-300 `}
`;
const SectionContainer = styled.div`
  ${tw`flex flex-col w-full pl-10 pr-10 mr-3 md:mr-12 md:w-auto md:p-3 md:pr-3 mt-7 md:mt-0`}
`;
const LinksHeader = styled.h3`
  ${tw`mb-3 text-xl font-bold text-white`}
`;
const HorizontalContainer = styled.div`
  ${tw`flex flex-row items-center`}
`;
const RedIcon = styled.span`
  ${tw`flex items-center justify-center mr-2 text-base text-white bg-red-600 rounded-full w-9 h-9 `}
`;
const SmallText = styled.h6`
  ${tw`text-sm text-white `}
`;
export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" />
          <AboutText>
            Car Hub is a luxry car renting and selling company Headquatered in
            Uyo Nigeria with locations in 100 countries around the world
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <LinksHeader>Our Links</LinksHeader>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
            <ListItem>
              <a href="#">Offers</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <LinksHeader>Other Links</LinksHeader>
          <LinksList>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <LinksHeader>Call Now</LinksHeader>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>234 8055-393-889</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <LinksHeader>Email Us</LinksHeader>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>carhubsupport@hubmail.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <BottomContainer>
          <CopyrightText>
            Copyright &copy; {new Date().getFullYear()} Car Hub. All rights
            reserved
          </CopyrightText>
        </BottomContainer>
      </InnerContainer>
    </FooterContainer>
  );
}
