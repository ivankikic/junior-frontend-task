import React, { createContext, useState } from 'react';

interface ProviderProps<T> {
    value: T;
    children?: React.ReactNode;
}

interface CalendarContextProps {
    id: null | string;
    setId: (newId: string) => void;
}

const CalendarContext = createContext<CalendarContextProps | null>(null);

export function MyContextProvider({ children }: ProviderProps<{ id: null | string; setId: (newId: string) => void }>) {
    const [id, setId] = useState<null | string>(null);

    return (
        <CalendarContext.Provider value={{ id, setId }}>
            {children}
        </CalendarContext.Provider>
    );
}

export default CalendarContext;
