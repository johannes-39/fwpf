import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Fwpf} from "../context/models/Fwpf";

export interface HomeState {
    value: number,
    fwpfs: Fwpf[],
}

const initialState: HomeState = {
    value: 0,
    fwpfs: [{
        id: 1,
        name: "Datenfusion",
        prof: "Prof. Test",
        klausur: true,
    },{
        id: 2,
        name: "GUI",
        prof: "Prof. Nett",
        klausur: false,
    },{
        id: 3,
        name: "Geschäftsprozesse",
        prof: "Prof. Test",
        klausur: true,
    },{
        id: 4,
        name: "IT-Sicherheit",
        prof: "Prof. Test",
        klausur: false,
    },{
        id: 5,
        name: "IT-Ethik",
        prof: "Prof. Test",
        klausur: true,
    },{
        id: 6,
        name: "Clean Code",
        prof: "Prof. Super",
        klausur: false,
    },{
        id: 7,
        name: "Test Fach",
        prof: "Prof. Test",
        klausur: true,
    },{
        id: 8,
        name: "Fach ohne Spaß",
        prof: "Prof. Test",
        klausur: false,
    },{
        id: 9,
        name: "Mathe 4",
        prof: "Prof. Test",
        klausur: true,
    },{
        id: 10,
        name: "Finanzmathe",
        prof: "Prof. Test",
        klausur: true,
    },{
        id: 11,
        name: "Künstliche Intelligenz",
        prof: "Prof. Test",
        klausur: false,
    },{
        id: 12,
        name: "Datenfusion 2",
        prof: "Prof. Test",
        klausur: false,
    },
    ],
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        setFwpfs: (state, action) => {
            state.fwpfs = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setFwpfs } = homeSlice.actions

export default homeSlice.reducer