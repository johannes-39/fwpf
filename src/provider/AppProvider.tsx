import React from 'react'
import {Provider} from "react-redux";
import {store} from "@/provider/store/store";
import Header from "@/components/header/Header";

const AppProvider: React.FC<{children: React.ReactNode}> = ({children, ...props}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>

    )
}
export default AppProvider
