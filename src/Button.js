import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "4px 12px"
  },
  medium: {
    "--borderRadius": 2 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "12px 20px"
  },
  large: {
    "--borderRadius": 4 + "px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "16px 32px"
  }
};

const Button = ({ variant, size, children }) => {
  const style = SIZES[size];
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "ghost") {
    Component = GhostButton;
  } else {
    Component = OutlineButton;
  }
  return <Component style={style}>{children}</Component>;
};

const ButtonBase = styled.button`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  letter-spacing: -0.02em;
  font-weight: 500;
  padding: var(--padding);
  /* display: block; */
  /* width: 100%; */
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  text-transform: uppercase;
  font-size: var(--fontSize);

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;
const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;
  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;
const GhostButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${COLORS.gray};
  &:focus {
    outline-color: ${COLORS.transparentGray75};
  }
  &:hover {
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

export default Button;
