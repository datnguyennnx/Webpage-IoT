import HeadingContainer from "./components/HeaderContainer"
import FooterContainer from "./components/FooterContainer"
import Graph from "./components/Graph"
import ControlCopoment from "./components/ControlComponent"
import { db } from "../firebase"
import { ref, set} from "firebase/database"
import { ref as sRef } from 'firebase/storage';




function App() {
    // Random Data
    // setInterval(() => {
    // const dbRef = ref(db)
    // const epoch = Date.now()
    
    // set(sRef(dbRef, `data`), {
    //     hum: Math.floor(Math.random() * 100),
    //     temp: Math.floor(Math.random() * 51),
    //     led: Math.random() < 0.5,
    //     valve: Math.random() < 0.5,
    //     fan: Math.random() < 0.5,
    //     epoch: epoch,
    //   })
    //   }, 5000)
  
  return (
    <div className="App">
      <HeadingContainer/>
      <div className="MainContainer">
        <ControlCopoment />
        <Graph/>
      </div>
      <FooterContainer/>
    </div>
  )
}

export default App
