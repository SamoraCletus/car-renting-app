import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}
const BaseButton = styled.div`
  ${tw`pt-3 pb-3 pl-5 pr-5 m-1 text-xs font-semibold transition-all duration-200 ease-in-out border-2 border-transparent border-solid rounded-md outline-none focus:outline-none`}
`;
const OutlinedButton = styled(BaseButton)`
  ${tw`text-white bg-red-500 border-black hover:bg-transparent hover:text-red-500 hover:border-red-500`}
`;
const FilledButton = styled(BaseButton)`
  ${tw`text-red-500 bg-transparent border-red-500 hover:bg-red-500 hover:text-white hover:border-black`}
`;

export default function Button(props: IButtonProps) {
  const { theme, text, className } = props;
  if (theme === "filled") {
    return <FilledButton className={className}>{text}</FilledButton>;
  } else {
    return <OutlinedButton className={className}>{text}</OutlinedButton>;
  }
}
