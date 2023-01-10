import useEventListener from "./useEventListener";

function useViewportIsAtTop() {
  const viewportIsAtTop = useState("viewportIsAtTop", () => true);

  if (process.client) {
    useEventListener(
      "scroll",
      () => {
        if (window.scrollY >= 10) {
          viewportIsAtTop.value = false;
        } else {
          viewportIsAtTop.value = true;
        }
      },
      window
    );
  }

  return viewportIsAtTop;
}

export default useViewportIsAtTop;
