import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@/provider/store/store";
import {
    closestCenter,
    DndContext,
    MouseSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";
import {useState} from "react";
import {GridItem} from "@/features/home/components/FwpfGrid/GridItem";
import {setFwpfs} from "@/features/home/context/homeSlice";



const FwpfGrid = () => {
    const {fwpfs} = useSelector((state: RootState) => state.home);
    const dispatch = useDispatch()
    const [items, setItems] = useState(fwpfs)
    console.log(items);
    const sensors = useSensors(
        useSensor(MouseSensor, {
            // Require the mouse to move by 10 pixels before activating
            activationConstraint: {
                distance: 10,
            },
        })
    );


    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={items}
                strategy={verticalListSortingStrategy}
            >
                {items.map(item => <GridItem key={item.id} id={item.id} value={item}/>)}
            </SortableContext>
        </DndContext>
    );

    function handleDragEnd({...event}) {
        const {active, over} = event;
        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
            dispatch(setFwpfs(items));
        }
    }
    // const {fwpfs} = useSelector((state: RootState) => state.home);
    // console.log(fwpfs)
    // return (
    //     <Box sx={{ flexGrow: 1 }}>
    //         <Grid container spacing={2}>
    //             {
    //                 fwpfs.map((value, index) => (
    //                         <Grid key={index} size={12}>
    //                             <Item>{value.name}</Item>
    //                         </Grid>
    //                     ))
    //             }
    //         </Grid>
    //     </Box>
    // );
}
export default FwpfGrid
