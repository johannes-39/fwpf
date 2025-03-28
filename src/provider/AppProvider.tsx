import React from 'react'
import {Provider} from "react-redux";
import {store} from "@/provider/store/store";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
    },
});

const AppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <ThemeProvider theme={theme}><Provider store={store}>
            {children}
        </Provider></ThemeProvider>


    )
}
export default AppProvider
