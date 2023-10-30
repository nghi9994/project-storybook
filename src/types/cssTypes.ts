type GlobalValue = "inherit" | "initial" | "revert" | "revert-layer" | "unset";

export interface ColorProps {
  /**
   * Opacity is 1 when primary is true
   */
  primary?: boolean;

  /**
   * Opacity is 0.7 when secondary is true
   */
  secondary?: boolean;
}

export interface DisplayProps {
  boxSizing?: "border-box" | "content-box" | GlobalValue;
  overflow?:
    | "visible"
    | "hidden"
    | "clip"
    | "scroll"
    | "auto"
    | "hidden visible"
    | GlobalValue;
  overflowX?: "visible" | "hidden" | "clip" | "scroll" | "auto" | GlobalValue;
  overflowY?: "visible" | "hidden" | "clip" | "scroll" | "auto" | GlobalValue;
  display?:
    | "block"
    | "inline"
    | "inline-block"
    | "inline-flex"
    | "inline-grid"
    | "inline-table"
    | "flex"
    | "grid"
    | "table"
    | GlobalValue;
  flexDirection?:
    | "column"
    | "column-reverse"
    | "row"
    | "row-reverse"
    | GlobalValue;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | GlobalValue;
  gap?: number | string;
  alignItems?:
    | "baseline"
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | GlobalValue;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "stretch"
    | GlobalValue;
  flex?: number | string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
}

export interface FontProps {
  fontSize?: number | string;
  fontWeight?:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "normal"
    | "bold"
    | "lighter"
    | "bolder"
    | GlobalValue;
  lineHeight?: number | string;
  textAlign?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "justify-all"
    | "match-parent"
    | GlobalValue;
}

export interface PositionProps {
  position?:
    | "static"
    | "relative"
    | "absolute"
    | "fixed"
    | "sticky"
    | GlobalValue;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  zIndex?: number;
}

export interface SizeProps {
  fluid?: boolean;
  height?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  size?: number | string;
}

export interface SpacingProps {
  margin?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  padding?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
}

export interface StyleProps {
  /**
   * backgroundColor should be HEX color to use Alpha index
   */
  backgroundColor?: string | "transparent" | GlobalValue;
  backgroundColorAlpha?: number;
  borderColor?: string;
  borderRadius?: string;
  border?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  color?: string;
  colorVariant?: "success" | "error" | "info" | "warning";
  opacity?: number;
  outline?: string;
}
