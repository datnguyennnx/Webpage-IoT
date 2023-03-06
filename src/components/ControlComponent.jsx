import IconLightBulb16 from "../../public/IconLight"
import IconWaterValve from "../../public/IconWaterValve"
import IconFan from "../../public/IconFan"
import React, { useEffect, useState } from "react";
import { db } from "../../firebase"
import { ref, child, get} from "firebase/database";




export default function ControlCopoment(){  

    const [activeLed, setActiveLed] = useState(false)
    const [activeFan, setActiveFan] = useState(false)
    const [activeValve, setActiveValve] = useState(false)

    useEffect(() => {
        setInterval(() => {
        const dbRef = ref(db)
        get(child(dbRef, `data`)).then( async (snapshot) => {
            let dataLed
            let dataFan
            let dataValve
            // let dataFire

            snapshot.forEach( data => {
                const dataVal = data.val()
                dataLed = dataVal.led
                dataFan = dataVal.fan
                dataValve = dataVal.valve
                // dataFire = dataVal.fire
            })
            
            setActiveLed(dataLed)
            setActiveFan(dataFan)
            setActiveValve(dataValve)
            // setActiveFire(dataFire)
            console.log(snapshot.val())
        })
          }, 10000);
    }, [])
    
    // Fucking wrong update => make all data drop
    // useEffect(() => {
    //     const dbRef = ref(db)
    //     if ( activeFire === true) {
    //         set(ref(dbRef, `data2`), {
    //             led: true,
    //             fan: true,
    //             valve : true
    //           })
    //           .catch((error) => {
    //             consolo.log(error)
    //           })
    //     } else {
    //         set(ref(dbRef, `data2`), {
    //             led: false,
    //             fan: false,
    //             valve : false
    //           })
    //           .catch((error) => {
    //             consolo.log(error)
    //           })
    //     }
    // }, [])
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
        </div>
    )
}