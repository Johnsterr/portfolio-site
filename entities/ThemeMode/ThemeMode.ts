import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";
<<<<<<< HEAD:entities/ThemeMode/ThemeMode.ts
import { IThemeMode } from "./IThemeMode";
=======
>>>>>>> d24b9c55c5d670b85ea71d861e5851b3cb5f8ab1:fsd/entities/ThemeMode/ThemeMode.ts
import { storageThemeModeKey } from "~~/shared/config";

export interface ThemeModeInterface {
  colorMode: ColorModeInstance;
}

export class ThemeMode implements ThemeModeInterface {
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
