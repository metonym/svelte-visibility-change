/**
 * @param {HTMLElement} element
 */
export function visibilityChange(element) {
  const change = () => {
    const state = document.visibilityState;
    const visible = state === "visible";
    const hidden = state === "hidden";

    element.dispatchEvent(
      new CustomEvent("change", { detail: { state, visible, hidden } })
    );
  };

  document.addEventListener("visibilitychange", change);

  return {
    destroy() {
      document.removeEventListener("visibilitychange", change);
    },
  };
}
