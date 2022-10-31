import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "../themes";
import { ThemeProvider } from '@mui/material'
import { Box } from "@mui/system";


interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [themeName, SetThemeName] = useState<'light'| 'dark'>('light');

    const toggleTheme = useCallback(() => {
        SetThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme;

        return DarkTheme;
    }, [themeName])

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            
            <ThemeProvider theme={theme}>
                <Box width='100vh' height='100vh' bgcolor={theme.palette.background.default}>
                {children}
                </Box>
            </ThemeProvider>

        </ThemeContext.Provider>
    )
}

