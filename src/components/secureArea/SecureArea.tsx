import React from 'react'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Box from "@mui/material/Box";
import {signIn, useSession} from "next-auth/react";
import Button from "@mui/material/Button";

export const SecureArea: React.FC<{children: React.ReactNode}> = ({children}) => {
    const {data:session} = useSession();
    return (
        <div>
            <Header/>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Box sx={{ width: '600px', my: 5}}>
                    {session?children: <div><Button onClick={() => signIn()}>Sign in
                </Button></div>}
            </Box>
            </Box>
            <Footer/>
        </div>
    )
}
