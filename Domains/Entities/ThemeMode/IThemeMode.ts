import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";

export interface IThemeMode {
  colorMode: ColorModeInstance;
  darkMode: boolean;
  // Getters
  getColorMode: string;
  isDarkMode: boolean;
  // Methods
  toggleMode: () => void;
}
