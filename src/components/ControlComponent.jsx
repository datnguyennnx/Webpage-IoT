import IconLightBulb16 from "../../public/IconLight"
import IconWaterValve from "../../public/IconWaterValve"
import IconFan from "../../public/IconFan"
import { useState } from "react"

export default function ControlCopoment(){
    const [activeLed, setActiveLed] = useState(true)
    const handleClickLed = () => {
        setActiveLed(!activeLed)
    }   
    return (
        <div>
            <div class="flex pr-2 pt-8 w-full justify-center">
                <IconLightBulb16 class="flex-auto"/>
                <IconWaterValve class="flex-auto fill-cyan-500	"/>
                <IconFan class="flex-auto fill-fuchsia-500	"/>
            </div>
            <div class="flex pr-4 pt-8 w-full justify-around pl-auto pr-auto">
                <div> 
                    <p class="flex-auto w-32 text-center text-4xl font-medium">Light</p>
                </div>
                <div> 
                    <p class="flex-auto w-32 text-center text-4xl font-medium">Water Valve</p>
                </div>
                <div> 
                    <p class="flex-auto w-32 text-center text-4xl font-medium">Fan</p>
                </div>
            </div>
            <div class="flex mr-4 pt-8 justify-around pl-auto pr-auto">
                <button class="rounded-lg  py-2 w-36 text-2xl border-2" 
                onClick={handleClickLed} 
                style={{backgroundColor: activeLed ? null : "green"}}>On - Off</button>
                <button class="rounded-lg  py-2 w-36 text-2xl border-2" 
                onClick={handleClickLed} 
                style={{backgroundColor: activeLed ? null : "green"}}>On - Off</button>
                <button class="rounded-lg  py-2 w-36 text-2xl border-2" 
                onClick={handleClickLed} 
                style={{backgroundColor: activeLed ? null : "green"}}>On - Off</button>
            </div>
        </div>
    )
}