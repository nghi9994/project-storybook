import * as S from "./Button.styles";

import { ButtonHTMLAttributes, FC, useContext } from "react";

import { StorybookContext } from "@/stories/StorybookProvider";
import { SpacingProps, StyleProps } from "@/types";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SpacingProps,
    StyleProps {
  colorStyle?: "primary" | "secondary";
  variant: "contained" | "outlined" | "text";
}

const Button: FC<ButtonProps> = ({
  className = "",
  bgColor,
  colorStyle = "primary",
  children,
  padding,
  variant,
  ...props
}) => {
  const storybookContext = useContext(StorybookContext);

  const buttonContext = storybookContext.button;
  const colorContext = storybookContext.color;

  return (
    <S.Wrapper
      className={className}
      {...buttonContext}
      bgColor={bgColor || colorContext[colorStyle]}
      padding={padding || buttonContext.padding}
      variant={variant || buttonContext.variant}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
};

export { Button };
