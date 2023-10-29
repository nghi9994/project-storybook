import styled from "styled-components";

import {
  getDisplayValue,
  getFontValue,
  getPositionValue,
  getSizeValue,
  getSpacingValue,
  getStyleToString,
  getStyleValue,
} from "@/utils";
import { ContainerProps } from "./Container";

export const ContainerWrapper = styled.div<ContainerProps>`
  ${(p) => {
    return `
      // Default styles
      ${getStyleToString(p.theme.default.container)}
      ${getStyleToString(p.theme.default.font)}
      
      // Custom styles
      ${getDisplayValue(p)}
      ${getFontValue(p)};
      ${getPositionValue(p)};
      ${getSizeValue(p)};
      ${getSpacingValue(p)}
      ${getStyleValue(p)}
    `;
  }}
`;
