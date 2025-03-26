import React from 'react'
import Home from "@/features/home/Home";
import {Provider} from "react-redux";
import { store } from "../provider/store/store"

const Index = () => {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    )
}
export default Index
