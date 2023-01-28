import { Ref } from "vue";
import { ThemeMode } from "~~/Domains/Entities/ThemeMode/ThemeMode";

function useThemeMode() {
  const themeMode = ThemeMode.create();

  const isDarkMode: /*Ref<boolean>*/ = useState("isDarkMode", () =>
    themeMode.isDarkMode()
  );
  const toggleTheme = () => themeMode.toggleMode();

  console.log(themeMode.isDarkMode());
  console.log(isDarkMode.value);

  return {
    isDarkMode,
    toggleTheme,
  };
}

export default useThemeMode;
