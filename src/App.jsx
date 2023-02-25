import HeadingContainer from "./components/HeaderContainer"
import IconLightBulb16 from "../public/IconLight"
import IconWaterOutline from "../public/IconWater"
import IconTemperatureCelsius from "../public/IconTemperature"
import { useState } from "react"


function App() {
  const [activeLed, setActiveLed] = useState(true)
  const handleClickLed = () => {
    setActiveLed(!activeLed)
  };

  const [activeHum, setActiveHum] = useState(true)
  const handleClickHum = () => {
    setActiveHum(!activeHum)
  };

  const [activeTemp, setActiveTemp] = useState(true)
  const handleClickTemp = () => {
    setActiveTemp(!activeTemp)
  };

  return (
    <div className="App">
      <HeadingContainer/>
      <div>
        <div class="flex pt-20 w-full justify-around">
          <div><IconLightBulb16 class="flex-auto"/></div>
          <div><IconWaterOutline class="flex-auto"/></div>
          <div><IconTemperatureCelsius class="flex-auto"/></div>
        </div>
        <div class="flex pt-8 w-full justify-around pl-auto pr-auto">
          <div> <p class="flex-auto text-4xl font-medium">Light</p></div>
          <div> <p class="flex-auto text-4xl font-medium">Humidity</p></div>
          <div> <p class="flex-auto text-4xl font-medium">Temperature</p></div>
        </div>
        <div class="flex pt-8 w-full justify-around">
          <button class="flex-auto rounded-full ml-48 mr-48 text-2xl border-2" onClick={handleClickLed} style={{backgroundColor: activeLed ? null : "green"}}>On - Off</button>
          <button class="flex-auto rounded-full ml-48 mr-48 text-2xl border-2" onClick={handleClickHum} style={{backgroundColor: activeHum ? null : "green"}}>On - Off</button>
          <button class="flex-auto rounded-full ml-48 mr-48 text-2xl border-2" onClick={handleClickTemp} style={{backgroundColor: activeTemp ? null : "green"}}>On - Off</button>
        </div>
      </div>
    </div>
  )
}

export default App
