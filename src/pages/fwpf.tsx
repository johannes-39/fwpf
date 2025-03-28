import React from 'react'
import {Counter} from "@/features/counter/Counter";
import {SecureArea} from "@/components/secureArea/SecureArea";

const Fwpf = () => {
    return (
        <SecureArea>
            <Counter/>
        </SecureArea>
    )
}
export default Fwpf
