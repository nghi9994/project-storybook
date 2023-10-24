import * as S from "./Button.styles";

import { ButtonHTMLAttributes, FC, useContext } from "react";
import ButtonConfig from "./Button.config.json";

import { StorybookContext } from "@/stories/StorybookProvider";
import { SpacingProps, StyleProps } from "@/types";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SpacingProps,
    StyleProps {
  variant?: "contained" | "outlined" | "text";
}

const Button: FC<ButtonProps> = ({
  className = "",
  children,
  padding,
  variant,
  ...props
}) => {
  const storybookContext = useContext(StorybookContext);

  const buttonStyle = storybookContext.button;

  return (
    <S.Wrapper
      className={className}
      padding={padding || buttonStyle.default.padding}
      variant={variant || buttonStyle.default.variant}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
};

export { Button, ButtonConfig };
