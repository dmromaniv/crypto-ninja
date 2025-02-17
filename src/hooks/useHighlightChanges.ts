import { useEffect, useRef, useState } from "react";

import { highlightTextDuration } from "@/config/uiConfig";

export enum ChangeDirection {
  UP = "up",
  DOWN = "down",
  NONE = "",
}

export const useHighlightChanges = <T extends { id: string }, K extends keyof T>(
  data: T[] | undefined,
  key: K,
  duration: number = highlightTextDuration.default
) => {
  const prevDataRef = useRef<Record<string, T[K]>>({});
  const [changeStatus, setChangeStatus] = useState<Record<string, ChangeDirection>>({});

  useEffect(() => {
    if (!data) return;

    const updatedStatus: Record<string, ChangeDirection> = {};

    data.forEach((item) => {
      const prevValue = prevDataRef.current[item.id];

      if (!prevValue && prevValue !== item[key]) {
        updatedStatus[item.id] = item[key] > prevValue ? ChangeDirection.UP : ChangeDirection.DOWN;
      } else {
        updatedStatus[item.id] = ChangeDirection.NONE;
      }

      prevDataRef.current[item.id] = item[key];
    });

    setChangeStatus(updatedStatus);

    const timer = setTimeout(() => {
      setChangeStatus({});
    }, duration);

    return () => clearTimeout(timer);
  }, [data, key, duration]);

  return changeStatus;
};
