import HeadingContainer from "./components/HeaderContainer"
import IconLightBulb16 from "../public/IconLight"
import IconWaterOutline from "../public/IconWater"
import IconTemperatureCelsius from "../public/IconTemperature"
import { useState } from "react"
import { ref, get, child} from "firebase/database"
import { db } from "../firebase"

function App() {

  const dbRef = ref(db)
  get(child(dbRef, `data`)).then((snapshot) =>{
    if (snapshot.exists()){
      console.log(snapshot.val())
    } else {
      console.log("No data")
    }
  }).catch((error) => {
    console.error(error)
  })

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
        <div class="flex pr-2 pt-8 w-full justify-around">
          <IconLightBulb16 class="flex-auto "/>
          <IconTemperatureCelsius class="flex-auto fill-rose-500	"/>
          <IconWaterOutline class="flex-auto fill-indigo-500	"/>
        </div>

        <div class="flex pr-4 pt-8 w-full justify-around pl-auto pr-auto">
          <div> <p class="flex-auto w-32 text-center text-4xl font-medium">Light</p></div>
          <div> <p class="flex-auto w-32 text-center text-4xl font-medium">Temperature</p></div>
          <div> <p class="flex-auto w-32 text-center text-4xl font-medium">Humidity</p></div>
        </div>

        <div class="flex pt-8 ml-2 justify-around pl-auto pr-auto">
          <button class="rounded-lg ml-auto mr-auto py-2 w-36 text-2xl border-2" onClick={handleClickLed} style={{backgroundColor: activeLed ? null : "green"}}>On - Off</button>
          <button class="rounded-lg ml-auto mr-auto py-2 w-36 text-2xl border-2" onClick={handleClickHum} style={{backgroundColor: activeHum ? null : "green"}}>Get data</button>
          <button class="rounded-lg ml-auto mr-auto py-2 w-36 text-2xl border-2" onClick={handleClickTemp} style={{backgroundColor: activeTemp ? null : "green"}}>Get data</button>
        </div>
      </div>
    </div>
  )
}

export default App
