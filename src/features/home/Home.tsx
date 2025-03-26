import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@/provider/store/store";
import HorizontalStepper from "@/components/stepper/HorizontalStepper";
import {useHomeStepper} from "@/features/home/context/hooks";

const Home = () => {
    const home = useSelector((state: RootState) => state.home)
    const dispatch = useDispatch();
    const {steps: stepValues} = useHomeStepper();
    return (
        <div>
            <HorizontalStepper stepValues={stepValues}/>
        </div>
    )
}
export default Home
