import { test, expect, describe, afterEach, vi } from "vitest";
import { SvelteComponent, tick } from "svelte";
import VisibilityChange from "./VisibilityChange.test.svelte";
import VisibilityChangeAction from "./visibility-change.test.svelte";

const consoleLog = vi.spyOn(console, "log");

describe("VisibilityChange", () => {
  let instance: null | SvelteComponent = null;

  const fire = async () => {
    const value = document.visibilityState === "hidden" ? "visible" : "hidden";

    Object.defineProperty(document, "visibilityState", {
      value,
      writable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));

    await tick();
  };

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
    instance?.$destroy();
    instance = null;
    document.body.innerHTML = "";
    consoleLog.mockReset();
    Object.defineProperty(document, "visibilityState", {
      value: "visible",
      writable: true,
    });
  });

  test("VisibilityChange component", async () => {
    const target = document.body;

    instance = new VisibilityChange({ target });

    const state = target.querySelector("[data-state]")!;
    const hidden = target.querySelector("[data-hidden]")!;
    const visible = target.querySelector("[data-visible]")!;

    expect(state.innerHTML).toEqual("visible");
    expect(hidden.innerHTML).toEqual("false");
    expect(visible.innerHTML).toEqual("true");
    expect(document.visibilityState).toEqual("visible");
    expect(document.title).toEqual("visible");
    expect(consoleLog).toBeCalledWith("visible");
    await fire();
    expect(state.innerHTML).toEqual("hidden");
    expect(hidden.innerHTML).toEqual("true");
    expect(visible.innerHTML).toEqual("false");
    expect(document.visibilityState).toEqual("hidden");
    expect(document.title).toEqual("hidden");
    expect(consoleLog).toBeCalledWith("hidden");
    expect(consoleLog).toBeCalledWith(CHANGE_EVENT.HIDDEN);
    await fire();
    expect(state.innerHTML).toEqual("visible");
    expect(hidden.innerHTML).toEqual("false");
    expect(visible.innerHTML).toEqual("true");
    expect(document.visibilityState).toEqual("visible");
    expect(document.title).toEqual("visible");
    expect(consoleLog).toBeCalledWith("visible");
    expect(consoleLog).toBeCalledWith(CHANGE_EVENT.VISIBLE);
  });

  test("VisibilityChange action", async () => {
    const target = document.body;

    instance = new VisibilityChangeAction({ target });

    expect(document.visibilityState).toEqual("visible");
    await fire();
    expect(document.visibilityState).toEqual("hidden");
    expect(consoleLog).toBeCalledWith(CHANGE_EVENT.HIDDEN);
    await fire();
    expect(document.visibilityState).toEqual("visible");
    expect(consoleLog).toBeCalledWith(CHANGE_EVENT.VISIBLE);
  });
});
