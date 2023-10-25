import * as S from "./Button.styles";

import { ButtonHTMLAttributes, FC } from "react";

import { SizeProps, SpacingProps, StyleProps } from "@/types";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SpacingProps,
    SizeProps,
    StyleProps {
  variant?: "primary" | "secondary" | "outlined" | "text" | string;
}

const Button: FC<ButtonProps> = ({ className = "", children, ...props }) => {
  return (
    <S.Wrapper className={className} {...props}>
      {children}
    </S.Wrapper>
  );
};

export { Button };
