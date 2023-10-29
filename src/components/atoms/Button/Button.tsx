import * as S from "./Button.styles";

import { ButtonHTMLAttributes, forwardRef } from "react";

import {
  ColorProps,
  FontProps,
  SizeProps,
  SpacingProps,
  StyleProps,
} from "@/types";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ColorProps,
    FontProps,
    SizeProps,
    SpacingProps,
    StyleProps {
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, variant = "contained", ...props }, ref) => {
    return (
      <S.Wrapper className={className} variant={variant} ref={ref} {...props}>
        {children}
      </S.Wrapper>
    );
  }
);

export { Button };
