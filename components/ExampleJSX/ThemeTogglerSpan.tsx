import { defineComponent } from "vue";
import IconsMoon from "./Moon";
import IconsSun from "./Sun";

const ThemeTogglerSpan = defineComponent({
  props: {
    darkModeActive: {
      type: Boolean,
    },
  },
  setup(props, context) {
    return () => {
      // Если определить до return, то классы не меняются
      const modeClasses = props.darkModeActive
        ? "left-[22px] text-white"
        : "left-[2px] text-yellow-500";

      return (
        <span class={`relative top-0 h-5 w-5 transition-all ${modeClasses}`}>
          {props.darkModeActive ? (
            <IconsMoon class="h-5 w-5" />
          ) : (
            <IconsSun class="h-5 w-5" />
          )}
        </span>
      );
    };
  },
});

export default ThemeTogglerSpan;
