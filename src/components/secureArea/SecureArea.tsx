import React from 'react'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Box from "@mui/material/Box";

export const SecureArea: React.FC<{children: React.ReactNode}> = ({children, ...props}) => {
    return (
        <div>
            <Header/>
            <Box sx={{mx: '20%', my: 5}}>
                {children}
            </Box>

            <Footer/>
        </div>
    )
}
