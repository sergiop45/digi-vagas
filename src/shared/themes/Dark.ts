import { createTheme } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: blue[700],
            dark: blue[800],
            light: blue[500],
            contrastText: '#ffffff',
        },
        secondary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff',
        },
        background: {
            default: '#202124',
            paper: '#303134',
        }
    }
})