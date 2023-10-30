import styled from "styled-components";
import {
  getFontValue,
  getSizeValue,
  getSpacingValue,
  getStyleToString,
  getStyleValue,
} from "@/utils";
import { TypographyProps } from "./Typography";

export const Text = styled.p<TypographyProps>`
  ${(p) => {
    return `
      // Default styles
      ${getStyleToString(p.theme.default.font)}
      
      // Custom styles
      ${getFontValue(p)};
      ${getSizeValue(p)};
      ${getSpacingValue(p)}
      ${getStyleValue(p)}
    `;
  }}
`;
