import React, {createContext, useMemo, useState} from 'react';

type Props = {
    children: React.ReactNode;
};

type ThemeState = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeState>({ isDark: false, setIsDark: () => {} });

export const ThemeProvider: React.FC<Props> = ({children}) => {
    const [isDark, setIsDark] = useState(true)

    const value = useMemo(() => ({isDark, setIsDark}), [isDark])

    return (<ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
    )
};