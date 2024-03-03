import { useEffect, useRef, useState } from "react";


export const useDebounce = (value: string, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState<string>("");
    const timerRef = useRef<ReturnType<void>>(null);

    useEffect(() => {
        timerRef.current = timerRef?.current ?
            setTimeout(() => setDebouncedValue(value), delay) : null ;

        return () => {
            clearTimeout(timerRef?.current);
        };
    }, [value, delay]);

    return debouncedValue;
};
