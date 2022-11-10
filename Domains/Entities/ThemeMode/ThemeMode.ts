import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";
import { IThemeMode } from "./IThemeMode";

export class ThemeMode implements IThemeMode {
  colorMode: ColorModeInstance;
  private constructor() {
    this.colorMode = useColorMode();
  }

  public static create() {
    const instance = new ThemeMode();
    return instance;
  }

  /**
   * toggleTheme
   */
  public toggleMode(): void {
    this.colorMode.preference === "light"
      ? (this.colorMode.preference = "dark")
      : (this.colorMode.preference = "light");
    console.log(this.colorMode.preference);
  }

  /**
   * getMode
   */
  get getMode(): string {
    return this.colorMode.value;
  }
}
