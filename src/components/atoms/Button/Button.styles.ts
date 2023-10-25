import {
  getSizeValue,
  getSpacingValue,
  getStyleValue,
  styleToString,
} from "@/utils";
import styled from "styled-components";

import type { ButtonProps } from "./Button";

export const Wrapper = styled.button<ButtonProps>`
  ${(p) => {
    return `
      ${styleToString(p.theme.button)}

      ${getSizeValue({
        fluid: p.fluid,
        height: p.height,
        maxHeight: p.maxHeight,
        minHeight: p.minHeight,
        width: p.width,
        maxWidth: p.maxWidth,
        minWidth: p.minWidth,
      })};

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
    `;
  }}
`;
