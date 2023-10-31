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
  buttonVariant?: "contained" | "outlined" | "text";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", children, buttonVariant = "contained", ...props },
    ref
  ) => {
    return (
      <S.Wrapper
        className={className}
        buttonVariant={buttonVariant}
        ref={ref}
        {...props}
      >
        {children}
      </S.Wrapper>
    );
  }
);

export { Button };
