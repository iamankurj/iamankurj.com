import type {
  BorderStyle,
  ChartMode,
  ChartVariant,
  NeutralColor,
  ScalingSize,
  Schemes,
  SolidStyle,
  SolidType,
  SurfaceStyle,
  Theme,
  TransitionStyle,
} from "@once-ui-system/core";

export const style: {
  theme: Theme;
  neutral: NeutralColor;
  brand: Schemes;
  accent: Schemes;
  solid: SolidType;
  solidStyle: SolidStyle;
  border: BorderStyle;
  surface: SurfaceStyle;
  transition: TransitionStyle;
  scaling: ScalingSize;
} = {
  theme: "system",
  neutral: "gray",
  brand: "blue",
  accent: "indigo",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "filled",
  transition: "all",
  scaling: "100",
};

export const dataStyle: {
  variant: ChartVariant;
  mode: ChartMode;
  height: number;
  axis: { stroke: string };
  tick: { fill: string; fontSize: number; line: boolean };
} = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

export const themeInitConfig = {
  theme: style.theme,
  brand: style.brand,
  accent: style.accent,
  neutral: style.neutral,
  solid: style.solid,
  "solid-style": style.solidStyle,
  border: style.border,
  surface: style.surface,
  transition: style.transition,
  scaling: style.scaling,
  "viz-style": dataStyle.variant,
};
