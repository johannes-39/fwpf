import React from 'react'
import Button from "@mui/material/Button";
import {signIn} from "next-auth/react";

const Signin = () => {
    return (
        <div>
            <Button onClick={()=> signIn(undefined, { callbackUrl: '/' })}>Einloggen</Button>
        </div>
    )
}
export default Signin

