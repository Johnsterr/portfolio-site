import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";
import { IThemeMode } from "./IThemeMode";

export class ThemeMode implements IThemeMode {
  colorMode: ColorModeInstance;
  darkMode: boolean;

  private constructor() {
    this.colorMode = useColorMode();
    this.darkMode = this.initializeMode();
  }

  get isDarkMode(): boolean {
    return this.darkMode;
  }

  get getColorMode(): string {
    return this.colorMode.value;
  }

  public static create() {
    return new ThemeMode();
  }

  private initializeMode(): boolean {
    return this.colorMode.value === "light" ? false : true;
  }

  public toggleMode(): void {
    this.colorMode.preference === "light"
      ? this.setDarkMode()
      : this.setLightMode();
    console.log(this.colorMode.preference);
  }

  private setDarkMode(): void {
    this.colorMode.preference = "dark";
    this.darkMode = true;
  }

  private setLightMode(): void {
    this.colorMode.preference = "light";
    this.darkMode = false;
  }
}
