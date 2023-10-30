import { ColorProps } from "@/types";

export const isCssValueValid = (
  value: boolean | number | string | undefined | null
) => {
  if (!!value || value === 0) return true;
  return false;
};

export const getCssValue = ({
  value,
  pxRequired = true,
}: {
  value: number | string | undefined;
  pxRequired?: boolean;
}) => {
  // Applied for truthy values, except value 0
  // if (!value && value !== 0) return "";

  if (typeof value === "number" && pxRequired) {
    return `${value}px`;
  }

  return value ?? "";
};

export const getColorValue = ({ primary, secondary }: ColorProps) => {
  let cssString = "";

  if (isCssValueValid(primary)) {
    cssString += `opacity: 1;`;
  }
  if (isCssValueValid(secondary)) {
    cssString += `opacity: 0.7;`;
  }

  return cssString;
};

export const getDisplayValue = (p: any) => {
  let cssString = "";

  if (isCssValueValid(p?.boxSizing)) {
    cssString += `box-sizing: ${getCssValue({ value: p?.boxSizing })};`;
  }
  if (isCssValueValid(p?.overflow)) {
    cssString += `overflow: ${getCssValue({ value: p?.overflow })};`;
  }
  if (isCssValueValid(p?.overflowX)) {
    cssString += `overflow-x: ${getCssValue({ value: p?.overflowX })};`;
  }
  if (isCssValueValid(p?.overflowY)) {
    cssString += `overflow-y: ${getCssValue({ value: p?.overflowY })};`;
  }
  if (isCssValueValid(p?.display)) {
    cssString += `display: ${getCssValue({ value: p?.display })};`;
  }
  if (isCssValueValid(p?.flexDirection)) {
    cssString += `flex-direction: ${getCssValue({ value: p?.flexDirection })};`;
  }
  if (isCssValueValid(p?.gap)) {
    cssString += `gap: ${getCssValue({ value: p?.gap })};`;
  }
  if (isCssValueValid(p?.flexWrap)) {
    cssString += `flex-wrap: ${getCssValue({ value: p?.flexWrap })};`;
  }
  if (isCssValueValid(p?.alignItems)) {
    cssString += `align-items: ${getCssValue({ value: p?.alignItems })};`;
  }
  if (isCssValueValid(p?.justifyContent)) {
    cssString += `justify-content: ${getCssValue({
      value: p?.justifyContent,
    })};`;
  }
  if (isCssValueValid(p?.flex)) {
    cssString += `flex: ${getCssValue({ value: p?.flex, pxRequired: false })};`;
  }
  if (isCssValueValid(p?.flexBasis)) {
    cssString += `flex-basis: ${getCssValue({ value: p?.flexBasis })};`;
  }
  if (isCssValueValid(p?.flexGrow)) {
    cssString += `flex-grow: ${getCssValue({ value: p?.flexGrow })};`;
  }
  if (isCssValueValid(p?.flexShrink)) {
    cssString += `flex-shrink: ${getCssValue({ value: p?.flexShrink })};`;
  }

  return cssString;
};

export const getFontValue = (p: any) => {
  let cssString = "";

  if (isCssValueValid(p?.fontSize)) {
    cssString += `font-size: ${getCssValue({ value: p?.fontSize })};`;
  }
  if (isCssValueValid(p?.fontWeight)) {
    cssString += `font-weight: ${getCssValue({
      value: p?.fontWeight,
      pxRequired: false,
    })};`;
  }
  if (isCssValueValid(p?.lineHeight)) {
    cssString += `line-height: ${getCssValue({ value: p?.lineHeight })};`;
  }
  if (isCssValueValid(p?.textAlign)) {
    cssString += `text-align: ${getCssValue({ value: p?.textAlign })};`;
  }

  return cssString;
};

export const getPositionValue = (p: any) => {
  let cssString = "";

  if (isCssValueValid(p?.position)) {
    cssString += `position: ${getCssValue({ value: p?.position })};`;
  }
  if (isCssValueValid(p?.left)) {
    cssString += `left: ${getCssValue({ value: p?.left })};`;
  }
  if (isCssValueValid(p?.right)) {
    cssString += `right: ${getCssValue({ value: p?.right })};`;
  }
  if (isCssValueValid(p?.top)) {
    cssString += `top: ${getCssValue({ value: p?.top })};`;
  }
  if (isCssValueValid(p?.bottom)) {
    cssString += `bottom: ${getCssValue({ value: p?.bottom })};`;
  }
  if (isCssValueValid(p?.zIndex)) {
    cssString += `z-index: ${getCssValue({
      value: p?.zIndex,
      pxRequired: false,
    })};`;
  }

  return cssString;
};

export const getSizeValue = (p: any) => {
  let cssString = "";

  // Height
  if (isCssValueValid(p?.height)) {
    cssString += `height: ${getCssValue({ value: p?.height })};`;
  }
  if (isCssValueValid(p?.maxHeight)) {
    cssString += `max-height: ${getCssValue({ value: p?.maxHeight })};`;
  }
  if (isCssValueValid(p?.minHeight)) {
    cssString += `min-height: ${getCssValue({ value: p?.minHeight })};`;
  }

  // Width
  if (isCssValueValid(p?.width) || p?.fluid) {
    cssString += `width: ${getCssValue({
      value: p?.fluid ? "100%" : p?.width,
    })};`;
  }
  if (isCssValueValid(p?.maxWidth)) {
    cssString += `max-width: ${getCssValue({ value: p?.maxWidth })};`;
  }
  if (isCssValueValid(p?.minWidth)) {
    cssString += `min-width: ${getCssValue({ value: p?.minWidth })};`;
  }

  return cssString;
};

export const getSpacingValue = (p: any) => {
  let cssString = "";

  if (isCssValueValid(p?.margin)) {
    cssString += `margin: ${getCssValue({ value: p?.margin })};`;
  }
  if (isCssValueValid(p?.marginBottom)) {
    cssString += `margin-bottom: ${getCssValue({ value: p?.marginBottom })};`;
  }
  if (isCssValueValid(p?.marginLeft)) {
    cssString += `margin-left: ${getCssValue({ value: p?.marginLeft })};`;
  }
  if (isCssValueValid(p?.marginRight)) {
    cssString += `margin-right: ${getCssValue({ value: p?.marginRight })};`;
  }
  if (isCssValueValid(p?.marginTop)) {
    cssString += `margin-top: ${getCssValue({ value: p?.marginTop })};`;
  }
  if (isCssValueValid(p?.padding)) {
    cssString += `padding: ${getCssValue({ value: p?.padding })};`;
  }
  if (isCssValueValid(p?.paddingBottom)) {
    cssString += `padding-bottom: ${getCssValue({ value: p?.paddingBottom })};`;
  }
  if (isCssValueValid(p?.paddingLeft)) {
    cssString += `padding-left: ${getCssValue({ value: p?.paddingLeft })};`;
  }
  if (isCssValueValid(p?.paddingRight)) {
    cssString += `padding-right: ${getCssValue({ value: p?.paddingRight })};`;
  }
  if (isCssValueValid(p?.paddingTop)) {
    cssString += `padding-top: ${getCssValue({ value: p?.paddingTop })};`;
  }

  return cssString;
};

export const getStyleValue = (p: any) => {
  let cssString = "";

  if (isCssValueValid(p?.backgroundColor)) {
    cssString += `background: ${hexToRgb(
      p?.backgroundColor,
      p?.backgroundColorAlpha
    )};`;
  }
  if (isCssValueValid(p?.border)) {
    cssString += `border: ${getCssValue({ value: p?.border })};`;
  }
  if (isCssValueValid(p?.borderBottom)) {
    cssString += `border-bottom: ${getCssValue({ value: p?.borderBottom })};`;
  }
  if (isCssValueValid(p?.borderLeft)) {
    cssString += `border-left: ${getCssValue({ value: p?.borderLeft })};`;
  }
  if (isCssValueValid(p?.borderRight)) {
    cssString += `border-right: ${getCssValue({ value: p?.borderRight })};`;
  }
  if (isCssValueValid(p?.borderTop)) {
    cssString += `border-top: ${getCssValue({ value: p?.borderTop })};`;
  }
  if (isCssValueValid(p?.borderColor)) {
    cssString += `border-color: ${getCssValue({ value: p?.borderColor })};`;
  }
  if (isCssValueValid(p?.borderRadius)) {
    cssString += `border-radius: ${getCssValue({ value: p?.borderRadius })};`;
  }
  if (isCssValueValid(p?.color)) {
    cssString += `color: ${getCssValue({ value: p?.color })};`;
  }
  if (isCssValueValid(p?.opacity)) {
    cssString += `opacity: ${getCssValue({
      value: p?.opacity,
      pxRequired: false,
    })};`;
  }
  if (isCssValueValid(p?.outline)) {
    cssString += `outline: ${getCssValue({ value: p?.outline })};`;
  }

  return cssString;
};

/**
 * @param theme object, which is from object of style
 * @returns object, which is default value for storybook component
 */
export const getStoriesDefaultValue = (theme: any) => {
  const obj: any = {};
  for (const prop in theme) {
    const isColor = prop.match(/color/gi);
    obj[prop] = {
      control: isColor ? "color" : "",
      table: {
        defaultValue: {
          summary: theme[prop],
        },
      },
    };
  }

  return obj;
};

/* ---------- START: Convert css style  ---------- */
/**
 * @param style object of style
 * @returns string of css style
 * @description convert css object into css string to use in styled-component template string
 */
export function getStyleToString(style: any) {
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
}

/**
 * @param hex
 * @param opacity
 * @returns rgba string
 * @description convert HEX to RGBA color
 */
export function hexToRgb(hex: string, opacity: number = 1) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16
      )}, ${opacity >= 0 && opacity <= 1 ? opacity : 1})`
    : hex;
}
/* ---------- END: Convert css style ---------- */
