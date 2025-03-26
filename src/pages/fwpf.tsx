import React from 'react'
import {store} from "@/provider/store/store";
import {Provider} from "react-redux";
import {Counter} from "@/features/counter/Counter";

const Fwpf = () => {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    )
}
export default Fwpf
