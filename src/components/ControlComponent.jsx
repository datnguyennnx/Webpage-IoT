import IconLightBulb16 from "../../public/IconLight"
import IconWaterValve from "../../public/IconWaterValve"
import IconFan from "../../public/IconFan"
import React, { useState } from "react";



export default function ControlCopoment(){  

    const [activeLed, setActiveLed] = useState(false)
    const [activeFan, setActiveFan] = useState(false)
    const [activeValve, setActiveValve] = useState(false)

    

    const handleClickLed = () => {
        setActiveLed(!activeLed)
    }        

    const handleClickFan = () => {
        setActiveFan(!activeFan)
    }  
    
    const handleClickValve = () => {
        setActiveValve(!activeValve)
    }  
    return (
        <div>
            <div class="flex pr-2 pt-8 w-full justify-center">
                <IconWaterValve 
                    class="flex-auto"
                    value={activeValve}
                    />
                <IconLightBulb16 
                    class="flex-auto"
                    value={activeLed}
                 />
                <IconFan 
                    class="flex-auto mr-6" 
                    value={activeFan} 
                />
            </div>
            <div class="flex pr-4 pt-8 w-full justify-around pl-auto pr-auto">
                <div> 
                    <p class="flex-auto w-32 text-center text-4xl font-medium">Valve</p>
                </div>
                <div> 
                    <p class="flex-auto w-32 text-center text-4xl font-medium">Light</p>
                </div>
                <div> 
                    <p class="flex-auto w-32 text-center text-4xl font-medium mr-6">Fan</p>
                </div>
            </div>

            <div class="flex pr-4 pt-8 w-full justify-around pl-auto pr-auto">
                <div> 
                    <button  
                    onClick={handleClickValve} 
                    values={activeValve} 
                    class="flex-auto w-auto border-2 rounded-lg mb-2 mt-2 p-2 text-center text-3xl font-medium">
                        {activeValve ? "On" : "Off"}</button>
                </div>
                <div> 
                    <button  
                    onClick={handleClickLed} 
                    values={activeLed}  
                    class="flex-auto w-auto border-2 rounded-lg mb-2 mt-2 p-2 text-center text-3xl font-medium">
                        {activeLed ? "On" : "Off"}</button>
                </div>
                <div> 
                    <button  
                    onClick={handleClickFan} 
                    values={activeFan}  
                    class="flex-auto w-auto border-2 rounded-lg mb-2 mt-2 p-2 text-center text-3xl font-medium mr-6">
                        {activeFan ? "On" : "Off"}</button>
                </div>
            </div>
        </div>
    )
}