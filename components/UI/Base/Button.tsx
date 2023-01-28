import { defineComponent } from "vue";

const Button = defineComponent({
  emits: ["click"],
  props: {
    primary: {
      type: Boolean,
      default: true,
    },
    classes: {
      type: String,
      default: "",
    },
    handleClick: {
      type: Function,
    },
  },
  setup(props, context) {
    const typeClasses = props.primary
      ? "bg-white hover:bg-gray-100 text-[#2e2e2e]"
      : "text-white";

    const handleClick = props.handleClick
      ? () => props.handleClick
      : (event: any) => {
          console.log("Click", event);
          context.emit("click", event.target);
        };

    return () => (
      <button
        className={`border-1 rounded border-solid border-black py-3 px-5 font-bold uppercase leading-5 text-color-primary ${typeClasses} ${props.classes}`}
        onClick={handleClick}
      >
        {context.slots.default ? context.slots.default() : ""}
      </button>
    );
  },
});

export default Button;
