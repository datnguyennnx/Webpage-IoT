import HeadingContainer from "./components/HeaderContainer"
import FooterContainer from "./components/FooterContainer"
import IconWaterOutline from "../public/IconWater"
import IconFire  from "../public/IconFire"
import IconTemperatureCelsius from "../public/IconTemperature"
import Graph from "./components/Graph"
import ControlCopoment from "./components/ControlComponent"


function App() {
  

  return (
    <div className="App">
      <HeadingContainer/>
      <div className="MainContainer">
        <div class="flex pt-8 w-full justify-center">
          <IconFire class="flex-auto fill-amber-500	"/>
        </div>
        <div class="flex pt-8 w-full justify-around">
          <IconTemperatureCelsius class="flex-auto fill-rose-500	"/>
          <IconWaterOutline class="flex-auto fill-indigo-500	"/>
        </div>
        <div class="flex pr-4 pt-8 w-full justify-around pl-auto pr-auto">
          <div> <p class="flex-auto w-32 text-center text-4xl font-medium">Temperature</p></div>
          <div> <p class="flex-auto w-32 text-center text-4xl font-medium">Humidity</p></div>
        </div>
        <Graph/>
        <ControlCopoment />
      </div>
      <FooterContainer/>
    </div>
  )
}

export default App
