import { useEffect, useRef, useState } from "react";

type TimerRef = {
    current: ReturnType<typeof setTimeout>
}

export const useDebounce = (value: string, delay = 500):string => {
    const [debouncedValue, setDebouncedValue] = useState<string>("");
    const timerRef: TimerRef = useRef<ReturnType<void>>();

    useEffect(() => {
        timerRef.current = setTimeout(() => setDebouncedValue<(T:string) => void>(value), delay);

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [value, delay]);

    return debouncedValue;
};
