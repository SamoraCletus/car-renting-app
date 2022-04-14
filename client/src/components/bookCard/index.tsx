import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../button";
import { Marginer } from "../marginer";
import Calendar from "react-calendar";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../../responsive";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`flex items-center justify-center pt-1 pl-1 pl-2 pr-2 bg-white rounded-md md:pt-2 md:pb-2 md:pl-6 md:pr-6 `}
`;
const ItemContainer = styled.div`
  ${tw`relative flex `}
`;
const Icon = styled.span`
  ${tw`mr-1 text-xl text-red-500 fill-current md:text-base md:mr-3 `}
`;
const Name = styled.span`
  ${tw`text-xs text-gray-600 cursor-pointer select-none md:text-sm hover:text-red-500`}
`;
const LineSeperator = styled.span`
  width: 5px;
  height: 45%;

  ${tw`ml-2 mr-2 bg-gray-300 md:mr-6 md:ml-5`}
`;
const CalendarContainer = styled(Calendar)`
  position: absolute;
  top: 3.5em;
  user-select: none;
  left: -4.5em;
  max-width: none;
  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
`;
const SmallIcon = styled.span`
  ${tw`ml-2 text-xs text-gray-700 cursor-pointer fill-current md:text-base hover:text-red-500`}
`;
export default function BookCard() {
  const [toggleStartDate, setToggleStartDate] = useState(false);
  const [startDate, setStartDate] = useState();
  const [returnDate, setReturnDate] = useState();
  const [toggleReturnDate, setToggleReturnDate] = useState(false);
  const onReturn = () => {
    setToggleReturnDate(!toggleReturnDate);
    setToggleStartDate(false);
  };
  const onStart = () => {
    setToggleStartDate(!toggleStartDate);
    setToggleReturnDate(false);
  };
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={onStart}>Pick Up Date</Name>
        <SmallIcon onClick={onStart}>
          {toggleStartDate ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
        </SmallIcon>
        {toggleStartDate && (
          <CalendarContainer value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeperator>|</LineSeperator>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={onReturn}>Return Date</Name>
        <SmallIcon onClick={onReturn}>
          {toggleReturnDate ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
        </SmallIcon>
        {toggleReturnDate && (
          <CalendarContainer
            value={returnDate}
            onChange={setReturnDate as any}
          />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
}
