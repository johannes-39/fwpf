import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@/provider/store/store";
import {
    closestCenter,
    DndContext, KeyboardSensor,
    MouseSensor, TouchSensor,
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
    const mouseSensor = useSensor(MouseSensor);
    const touchSensor = useSensor(TouchSensor);
    const keyboardSensor = useSensor(KeyboardSensor);

    const sensors = useSensors(
        mouseSensor,
        touchSensor,
        keyboardSensor,
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
        console.log(active.id, over.id)
        if (active.id !== over.id) {
            setItems((items) => {

                // Finden des Indexes für das aktive Element und das übergeordnete Element
                const oldIndex = items.findIndex(item => item.id === active.id);  // Finde den Index des aktiven Elements
                const newIndex = items.findIndex(item => item.id === over.id);    // Finde den Index des Ziel-Elements


                // Überprüfen, ob die Indizes gültig sind und dann das Array verschieben
                if (oldIndex !== -1 && newIndex !== -1) {
                    // Verschiebe das Element im Array
                    const newItems = arrayMove(items, oldIndex, newIndex);
                    const updatedItems = newItems.map((item, index) => {
                        return { ...item, id: index+1 };  // Ersetze die ID mit dem neuen Index
                    });

                    // Rückgabe des aktualisierten Items mit den neuen IDs
                    return updatedItems;
                }

                // Falls keine Indizes gefunden wurden, gebe das Original-Array zurück
                return items;
            });

            // (Optional) Nach der Aktualisierung des Items kannst du es hier dispatchen
            dispatch(setFwpfs(items));
        }
    }
}
export default FwpfGrid
