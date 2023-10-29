import * as S from "./Container.styles";

import {
  DisplayProps,
  FontProps,
  PositionProps,
  SizeProps,
  SpacingProps,
  StyleProps,
} from "@/types";
import { forwardRef, HTMLAttributes } from "react";

// ----- Box -----
export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    DisplayProps,
    FontProps,
    PositionProps,
    SizeProps,
    StyleProps,
    SpacingProps {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <S.ContainerWrapper className={className} ref={ref} {...props}>
        {children}
      </S.ContainerWrapper>
    );
  }
);
