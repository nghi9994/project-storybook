export interface StyleProps {
  bgColor?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  color?: string;
  opacity?: number;
}

export interface FontProps {
  fontWeight?: 300 | 400 | 500 | 600 | 700 | 800 | 900;
  fontSize?: number | string;
  lineHeight?: number | string;
  textAlign?: string;
}

export interface SizeProps {
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
  padding?: number | string;
}

export interface FlexProps {
  flexDirection?: "row" | "column";
  gap?: number | string;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between";
}

export interface FlexItemProps {
  flex?: number | string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
}

export interface PositionProps {
  position?: string;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  zIndex?: number;
}
