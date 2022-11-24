import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";

export interface IThemeMode {
  colorMode: ColorModeInstance;
  darkMode: boolean;
  // Methods
  toggleMode: () => void;
  // Getters
  isDarkMode: boolean;
  getColorMode?: string;
}
