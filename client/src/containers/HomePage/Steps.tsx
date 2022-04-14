import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  faMapMarkedAlt,
  faCalendarAlt,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Container = styled.div`
  ${tw`flex flex-col items-center w-full pt-3 pb-3 mt-8 lg:pt-6 lg:pb-6`}
`;
const Title = styled.h2`
  ${tw`text-3xl font-extrabold text-black underline lg:text-4xl`}
`;
const StepsContainer = styled.div`
  ${tw`flex flex-wrap justify-evenly mt-7 lg:mt-16`}
`;
const StepContainer = styled.div`
  ${tw`flex flex-col items-center m-3 text-red-500 transition-colors md:w-96`}
`;
const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`flex items-center justify-center p-6 rounded-lg hover:p-7 `}
`;

const StepTitle = styled.h4`
  ${tw`mt-4 text-lg font-semibold text-black `}
`;
const StepDescription = styled.p`
  ${tw`w-10/12 text-xs text-center text-gray-600 md:text-sm`}
`;
const StepIcon = styled.span`
  ${tw`text-3xl text-red-500 `}
`;
export default function BookingSteps() {
  return (
    <Container>
      <Title>Our Booking Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Your Location</StepTitle>
          <StepDescription>
            find the nearest car hub location and pick up your exotic ride
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Pick Up Date</StepTitle>
          <StepDescription>
            Select the most favorable date to rent your exotic ride
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Ride</StepTitle>
          <StepDescription>
            Finally, book your exotic ride in one click
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
