import {
  FlexItemProps,
  FlexProps,
  FontProps,
  PositionProps,
  SizeProps,
  SpacingProps,
  StyleProps,
} from "@/types";

export const styleToString = (style: any) => {
  return Object.keys(style).reduce(
    (acc, key) =>
      acc +
      key
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase() +
      ":" +
      style[key] +
      ";",
    ""
  );
};

export const isCssValueValid = (value: number | string | undefined | null) => {
  if (!!value || value === 0) return true;
  return false;
};

export const getCssValue = (
  value: number | string | undefined,
  pxRequired: boolean = true
) => {
  // Applied for truty values, except value 0
  if (!value && value !== 0) return "";
  if (typeof value === "number" && pxRequired) {
    return `${value}px`;
  }

  return value;
};

export const getInitValue = () => {
  const cssString = `
    background: none;
    border-radius: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
    padding: 0;
    position: relative;
    opacity: 1;
  `;

  return cssString;
};

export const getFlexValue = ({
  flexDirection,
  flexWrap,
  gap,
  alignItems,
  justifyContent,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
}: FlexProps & FlexItemProps) => {
  let cssString = "";

  if (isCssValueValid(flexDirection)) {
    cssString += `flex-direction: ${getCssValue(flexDirection)};`;
  }
  if (isCssValueValid(gap)) {
    cssString += `gap: ${getCssValue(gap)};`;
  }
  if (isCssValueValid(flexWrap)) {
    cssString += `flex-wrap: ${getCssValue(flexWrap)};`;
  }
  if (isCssValueValid(alignItems)) {
    cssString += `align-items: ${getCssValue(alignItems)};`;
  }
  if (isCssValueValid(justifyContent)) {
    cssString += `justify-content: ${getCssValue(justifyContent)};`;
  }
  if (isCssValueValid(flex)) {
    cssString += `flex: ${getCssValue(flex, false)};`;
  }
  if (isCssValueValid(flexBasis)) {
    cssString += `flex-basis: ${getCssValue(flexBasis)};`;
  }
  if (isCssValueValid(flexGrow)) {
    cssString += `flex-grow: ${getCssValue(flexGrow)};`;
  }
  if (isCssValueValid(flexShrink)) {
    cssString += `flex-shrink: ${getCssValue(flexShrink)};`;
  }

  return cssString;
};

export const getFontValue = ({
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
}: FontProps) => {
  let cssString = "";

  if (isCssValueValid(fontSize)) {
    cssString += `font-size: ${getCssValue(fontSize)};`;
  }
  if (isCssValueValid(fontWeight)) {
    cssString += `font-weight: ${getCssValue(fontWeight, false)};`;
  }
  if (isCssValueValid(lineHeight)) {
    cssString += `line-height: ${getCssValue(lineHeight)};`;
  }
  if (isCssValueValid(textAlign)) {
    cssString += `text-align: ${getCssValue(textAlign)};`;
  }

  return cssString;
};

export const getSizeValue = ({
  fluid,
  height,
  maxHeight,
  minHeight,
  width,
  maxWidth,
  minWidth,
}: SizeProps) => {
  let cssString = "";

  // Height
  if (isCssValueValid(height)) {
    cssString += `height: ${getCssValue(height)};`;
  }
  if (isCssValueValid(maxHeight)) {
    cssString += `max-height: ${getCssValue(maxHeight)};`;
  }
  if (isCssValueValid(minHeight)) {
    cssString += `min-height: ${getCssValue(minHeight)};`;
  }

  // Width
  if (fluid) {
    cssString += `width: 100%;`;
  }
  if (isCssValueValid(width)) {
    cssString += `width: ${getCssValue(width)};`;
  }
  if (isCssValueValid(maxWidth)) {
    cssString += `max-width: ${getCssValue(maxWidth)};`;
  }
  if (isCssValueValid(minWidth)) {
    cssString += `min-width: ${getCssValue(minWidth)};`;
  }

  return cssString;
};

export const getSpacingValue = ({ margin, padding }: SpacingProps) => {
  let cssString = "";

  if (isCssValueValid(margin)) {
    cssString += `margin: ${getCssValue(margin)};`;
  }
  if (isCssValueValid(padding)) {
    cssString += `padding: ${getCssValue(padding)};`;
  }

  return cssString;
};

export const getStyleValue = ({
  bgColor,
  border,
  borderColor,
  borderRadius,
  color,
  opacity,
}: StyleProps) => {
  let cssString = "";

  if (isCssValueValid(bgColor)) {
    cssString += `background: ${getCssValue(bgColor)};`;
  }
  if (isCssValueValid(border)) {
    cssString += `border: ${getCssValue(border)};`;
  }
  if (isCssValueValid(borderColor)) {
    cssString += `border-color: ${getCssValue(borderColor)};`;
  }
  if (isCssValueValid(borderRadius)) {
    cssString += `border-radius: ${getCssValue(borderRadius)};`;
  }
  if (isCssValueValid(color)) {
    cssString += `color: ${getCssValue(color)};`;
  }
  if (isCssValueValid(opacity)) {
    cssString += `opacity: ${getCssValue(opacity, false)};`;
  }

  return cssString;
};

export const getPositionValue = ({
  position,
  left,
  right,
  top,
  bottom,
  zIndex,
}: PositionProps) => {
  let cssString = "";

  if (isCssValueValid(position)) {
    cssString += `position: ${getCssValue(position)};`;
  }
  if (isCssValueValid(left)) {
    cssString += `left: ${getCssValue(left)};`;
  }
  if (isCssValueValid(right)) {
    cssString += `right: ${getCssValue(right)};`;
  }
  if (isCssValueValid(top)) {
    cssString += `top: ${getCssValue(top)};`;
  }
  if (isCssValueValid(bottom)) {
    cssString += `bottom: ${getCssValue(bottom)};`;
  }
  if (isCssValueValid(zIndex)) {
    cssString += `z-index: ${getCssValue(zIndex, false)};`;
  }

  return cssString;
};
