import { Colors } from "./types";

export const baseColors = {
  failure: "#db6265",
  primary: "#F28200",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#F28200",
  success: "#F28200",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#000000",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#F28200",
  textDisabled: "#BDC2C4",
  textSubtle: "#F28200",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  failure: "#771014",
  primary: "#F28200",
  primaryBright: "#ffefdf",
  primaryDark: "#0098A1",
  secondary: "#F28200",
  success: "#1e6f5c",
  warning: "#FFB237",

  background: "#100C18",
  backgroundDisabled: "#1f1f1f",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#333333",
  inputSecondary: "#F28200",
  tertiary: "#353547",
  text: "#e7e8ea",
  textDisabled: "#666171",
  textSubtle: "#a8a9ad",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #100C18 0%, #100C18 100%)",
  },
};
