import { useEffect, useState } from "react";

function useSessionStorage(storageKey, fallbackState) {
    const [value, setValue] = useState(
        JSON.parse(sessionStorage.getItem(storageKey)) ?? fallbackState
    );

    useEffect(() => {
        sessionStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};

export default useSessionStorage;