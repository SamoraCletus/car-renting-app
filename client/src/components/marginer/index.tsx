import React from "react";
import styled from "styled-components";

export interface IMarginerProps {
  margin: number | string;
  direction?: "horizontal" | "vertical";
}
const HorizintalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;
const VerticalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;
function Marginer(props: IMarginerProps) {
  const { direction } = props;
  if (direction === "horizontal") return <HorizintalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}
export { Marginer };
