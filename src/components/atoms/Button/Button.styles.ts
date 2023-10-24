import { getSpacingValue, getStyleValue } from "@/utils";
import styled from "styled-components";

import type { ButtonProps } from "./Button";

export const Wrapper = styled.button<ButtonProps>`
  ${(p) => `
    ${getSpacingValue({
      margin: p.margin,
      padding: p.padding,
    })}
  
    ${getStyleValue({
      bgColor: p.bgColor,
      border: p.border,
      borderColor: p.borderColor,
      borderRadius: p.borderRadius,
      color: p.color,
      opacity: p.opacity,
    })}
    `}
`;
