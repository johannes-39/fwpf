import React, {useState} from 'react'
import Typography from "@mui/material/Typography";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Grid from "@mui/material/Grid";
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import TerminalIcon from '@mui/icons-material/Terminal';
import {IconButton} from "@mui/material";

const ModulItem = ({...props}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <Grid container>
            <Grid size={9}>
                <Typography variant="subtitle1" gutterBottom>
                    {props.value.name}
                </Typography>
            </Grid>
            <Grid size={1}>
                <InfoIcon/>
            </Grid>
            <Grid size={1}>
                <IconButton onClick={handleOpen}>
                    <TerminalIcon/>
                </IconButton>

            </Grid>
            <Grid size={1}>
                {props.value.klausur ? <DriveFileRenameOutlineIcon/> : <ArticleIcon/>}
            </Grid>
        </Grid>

    )
}
export default ModulItem
