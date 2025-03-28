import React from 'react'
import Typography from "@mui/material/Typography";

const Footer = () => {
    return (
        <footer>
            <Typography
                variant="body2"
                align="center"
                sx={{
                    color: 'text.secondary'
                }}
            >
                {'Copyright © '}
                Johannes Städtler
                {' ' + new Date().getFullYear()}.
            </Typography>
        </footer>



    )
}
export default Footer
