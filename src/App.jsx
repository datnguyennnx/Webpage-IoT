import HeadingContainer from "./components/HeaderContainer"
import IconLightBulb16 from "../public/IconLight"
import IconWaterOutline from "../public/IconWater"
import IconTemperatureCelsius from "../public/IconTemperature"
import { useState } from "react"
import Graph from "./components/Graph"



function App() {

  const [activeLed, setActiveLed] = useState(true)
  const handleClickLed = () => {
    setActiveLed(!activeLed)
  };

  return (
    <div className="App">
      <HeadingContainer/>
      <div>
        <div class="flex pr-2 pt-8 w-full justify-center">
          <IconLightBulb16 class="flex-auto"/>
        </div>
        <div class="flex pr-4 pt-8 w-full justify-around pl-auto pr-auto">
          <div> 
            <p class="flex-auto w-32 text-center text-4xl font-medium">Light</p>
          </div>
        </div>
          <div class="flex mr-4 pt-8 justify-center pl-auto pr-auto">
            <button class="rounded-lg  py-2 w-36 text-2xl border-2" 
            onClick={handleClickLed} 
            style={{backgroundColor: activeLed ? null : "green"}}>On - Off</button>
        </div>
        
        
        <div class="flex pt-8 w-full justify-around">
          <IconTemperatureCelsius class="flex-auto fill-rose-500	"/>
          <IconWaterOutline class="flex-auto fill-indigo-500	"/>
        </div>

        <div class="flex pr-4 pt-8 w-full justify-around pl-auto pr-auto">
          <div> <p class="flex-auto w-32 text-center text-4xl font-medium">Temperature</p></div>
          <div> <p class="flex-auto w-32 text-center text-4xl font-medium">Humidity</p></div>
        </div>

        <div class="flex pr-4 pt-8 w-full justify-around pl-auto pr-auto">
          <Graph/>
        </div>

      </div>
    </div>
  )
}

export default App
