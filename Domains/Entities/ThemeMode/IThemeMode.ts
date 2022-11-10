import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";

export interface IThemeMode {
  colorMode: ColorModeInstance;
  toggleMode: () => void;
  getMode: string;
}
