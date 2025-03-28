import React from 'react'
import Home from "@/features/home/Home";
import {SecureArea} from "@/components/secureArea/SecureArea";

const Index = () => {
    return (
        <SecureArea>
            <Home/>
        </SecureArea>
    )
}
export default Index
