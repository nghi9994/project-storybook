import {
  getColorValue,
  getFontValue,
  getSizeValue,
  getSpacingValue,
  getStyleToString,
  getStyleValue,
} from "@/utils";

import styled from "styled-components";

import type { ButtonProps } from "./Button";

export const Wrapper = styled.button<ButtonProps>`
  ${(p) => {
    return `
      // Default styles
      ${getStyleToString(p.theme.default.button)}
      ${getStyleToString(p.theme.default.font)}

      ${
        p.buttonVariant === "outlined"
          ? `
            background: none;
            border: 1px solid ${p.theme.color.gray};   
            `
          : ""
      }
      ${
        p.buttonVariant === "text"
          ? `
            background: none;
            border: none;   
            `
          : ""
      }

      ${
        p.disabled
          ? `
            cursor: not-allowed;
            opacity: 0.5;
            `
          : ``
      }

      // Custom styles
      ${getColorValue(p)}
      ${getFontValue(p)}
      ${getSizeValue(p)}
      ${getSpacingValue(p)}
      ${getStyleValue(p)}
    `;
  }}
`;
