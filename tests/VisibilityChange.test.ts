import { render, screen } from "@testing-library/svelte";
import VisibilityChange from "./VisibilityChange.test.svelte";
import VisibilityChangeAction from "./visibility-change.test.svelte";

const consoleLog = vi.spyOn(console, "log");

describe("VisibilityChange", () => {
  const CHANGE_EVENT = {
    HIDDEN: {
      state: "hidden",
      hidden: true,
      visible: false,
    },
    VISIBLE: {
      state: "visible",
      hidden: false,
      visible: true,
    },
  };

  afterEach(() => {
    document.body.innerHTML = "";
    consoleLog.mockReset();
    Object.defineProperty(document, "visibilityState", {
      value: "visible",
      writable: true,
    });
  });

  test("VisibilityChange component", async () => {
    render(VisibilityChange);

    const state = screen.getByTestId("state");
    const hidden = screen.getByTestId("hidden");
    const visible = screen.getByTestId("visible");

    expect(state.textContent).toBe("visible");
    expect(hidden.textContent).toBe("false");
    expect(visible.textContent).toBe("true");
    expect(document.visibilityState).toBe("visible");
    expect(document.title).toBe("visible");
    expect(consoleLog).toHaveBeenCalledWith("visible");
    
    // Simulate visibility change to hidden
    Object.defineProperty(document, "visibilityState", {
      value: "hidden",
      writable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
    await vi.waitFor(() => {
      expect(state.textContent).toBe("hidden");
      expect(hidden.textContent).toBe("true");
      expect(visible.textContent).toBe("false");
      expect(document.visibilityState).toBe("hidden");
      expect(document.title).toBe("hidden");
      expect(consoleLog).toHaveBeenCalledWith("hidden");
      expect(consoleLog).toHaveBeenCalledWith(CHANGE_EVENT.HIDDEN);
    });
    
    // Simulate visibility change to visible
    Object.defineProperty(document, "visibilityState", {
      value: "visible",
      writable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
    await vi.waitFor(() => {
      expect(state.textContent).toBe("visible");
      expect(hidden.textContent).toBe("false");
      expect(visible.textContent).toBe("true");
      expect(document.visibilityState).toBe("visible");
      expect(document.title).toBe("visible");
      expect(consoleLog).toHaveBeenCalledWith("visible");
      expect(consoleLog).toHaveBeenCalledWith(CHANGE_EVENT.VISIBLE);
    });
  });

  test("VisibilityChange action", async () => {
    render(VisibilityChangeAction);

    expect(document.visibilityState).toBe("visible");
    
    // Simulate visibility change to hidden
    Object.defineProperty(document, "visibilityState", {
      value: "hidden",
      writable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
    await vi.waitFor(() => {
      expect(document.visibilityState).toBe("hidden");
      expect(consoleLog).toHaveBeenCalledWith(CHANGE_EVENT.HIDDEN);
    });
    
    // Simulate visibility change to visible
    Object.defineProperty(document, "visibilityState", {
      value: "visible",
      writable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
    await vi.waitFor(() => {
      expect(document.visibilityState).toBe("visible");
      expect(consoleLog).toHaveBeenCalledWith(CHANGE_EVENT.VISIBLE);
    });
  });
});
