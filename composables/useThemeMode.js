import { reactive } from "vue";
import { ThemeMode } from "~~/entities/ThemeMode";

function useThemeMode() {
  const themeMode = reactive(ThemeMode.create());

  const isDarkMode = useState("isDarkMode", () => themeMode.value.isDarkMode());
  const toggleTheme = () => themeMode.toggleMode();

  console.log(themeMode.isDarkMode());
  console.log(isDarkMode.value);

  return {
    isDarkMode,
    toggleTheme,
  };
}

export default useThemeMode;
