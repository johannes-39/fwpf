import React from 'react'
import Home from "@/features/home/Home";
import AppProvider from "@/provider/AppProvider";
import {SecureArea} from "@/components/secureArea/SecureArea";

const Index = () => {
    return (
        <SecureArea>
            <Home/>
        </SecureArea>
    )
}
export default Index
