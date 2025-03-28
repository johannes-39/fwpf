import React from 'react'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Box from "@mui/material/Box";

export const SecureArea: React.FC<{children: React.ReactNode}> = ({children}) => {

    return (
        <div>
            <Header/>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Box sx={{ width: '600px', my: 5}}>
                {children}
            </Box>
            </Box>
            <Footer/>
        </div>
    )
}
