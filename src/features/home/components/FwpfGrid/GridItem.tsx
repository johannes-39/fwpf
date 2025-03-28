import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ModulItem from "@/features/home/components/ModulItem/ModulItem";
import {Divider} from "@mui/material";

const Item = styled(Paper)(({ theme, id }) => {

    let bgcolor = '#fff'
    console.log(id);
    if (Number(id) <= 3){
        bgcolor = '#dbffcd'
    }
    else if (Number(id) > 10){
        bgcolor = '#fbd7d7'
    }
    return {
        backgroundColor: bgcolor,
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        margin: 5,
        color: (theme).palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }

});

export function GridItem({...props}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Item id={props.id}>
                <ModulItem {...props}/>
            </Item>
            {props.id === 10 ? <Divider sx={{my: 2  }}></Divider>: null}
        </div>
    );
}