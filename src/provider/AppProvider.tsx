import React from 'react'
import {Provider} from "react-redux";
import {store} from "@/provider/store/store";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
            light: '#123456',
            dark: '#234567'
        },
        secondary: {
            main: '#123456'
        },
        background: {
            default: '#000000'
        }
    },
    typography: {
        allVariants: {
            fontFamily: 'sans-serif',
            textTransform: 'none',
            fontSize: 16,
        },
    }
});

const AppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <ThemeProvider theme={theme}><Provider store={store}>
            {children}
        </Provider></ThemeProvider>


    )
}
export default AppProvider
