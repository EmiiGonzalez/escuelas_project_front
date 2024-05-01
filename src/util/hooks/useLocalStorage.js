import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(
        () => {
            try {
                const item = window.localStorage.getItem(key);
                if (item) {
                    return JSON.parse(item);
                }
                window.localStorage.setItem(key, JSON.stringify(initialValue));
                return initialValue;
            }
            catch (e) {
                return initialValue;
            }
        }
    );

    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        catch (e) {
            console.log(e);
        }
    }

    return [storedValue, setValue]
}