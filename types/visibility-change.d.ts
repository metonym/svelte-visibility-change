export function visibilityChange(element: HTMLElement): {
  destroy: () => void;
};

declare function onChange(
  e: Event & { currentTarget: EventTarget & HTMLElement } & {
    detail?: {
      state: "visible" | "hidden";
      visible: boolean;
      hidden: boolean;
    };
  }
): void;

export type OnChangeEvent = typeof onChange;
