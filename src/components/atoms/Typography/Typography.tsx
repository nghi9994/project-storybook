import * as S from "./Typography.styles";

import { FontProps, SizeProps, SpacingProps, StyleProps } from "@/types";
import { FC, forwardRef, HTMLAttributes } from "react";

export interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    FontProps,
    SizeProps,
    SpacingProps,
    StyleProps {}

export const Typography: FC<TypographyProps> = forwardRef<
  HTMLParagraphElement,
  TypographyProps
>(({ className = "", children, ...props }, ref) => {
  return (
    <S.Text className={className} ref={ref} {...props}>
      {children}
    </S.Text>
  );
});
