import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";
import { IThemeMode } from "./IThemeMode";
import { storageThemeModeKey } from "~~/shared/config";

export class ThemeMode implements IThemeMode {
  colorMode: ColorModeInstance;
  darkMode: boolean = false;

  private constructor() {
    this.colorMode = useColorMode();
    this.initializeMode();
  }

  public static create() {
    return new ThemeMode();
  }

  private initializeMode() {
    if (process.client) {
      const colorMode = this.getModeFromLocalStorage();

      if (colorMode === "dark" || this.hasMatchFoundModeKey()) {
        this.addDarkClass();
        this.setDarkMode();
        return;
      }
      this.removeDarkClass();
      this.setLightMode();
    }
  }

  private getModeFromLocalStorage(): string | null {
    return localStorage.getItem(storageThemeModeKey);
  }

  private hasMatchFoundModeKey(): boolean {
    return (
      !(storageThemeModeKey in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  private addDarkClass(): void {
    document.documentElement.classList.add("dark");
  }

  private setDarkMode(): void {
    this.colorMode.preference = "dark";
    this.darkMode = true;
    localStorage.setItem(storageThemeModeKey, "dark");
  }

  private removeDarkClass(): void {
    document.documentElement.classList.remove("dark");
  }

  private setLightMode(): void {
    this.colorMode.preference = "light";
    this.darkMode = false;
    localStorage.setItem(storageThemeModeKey, "light");
  }

  public toggleMode(): void {
    this.colorMode.preference === "light"
      ? this.setDarkMode()
      : this.setLightMode();
  }

  public isDarkMode(): boolean {
    return this.darkMode;
  }

  public getColorMode(): string {
    return this.colorMode.value;
  }
}
