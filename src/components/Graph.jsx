import IconTemperatureCelsius from "../../public/IconTemperature"
import IconWaterOutline from "../../public/IconWater"
import { ref, child, get } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase"
import { Line } from "react-chartjs-2"
import moment from 'moment'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

var tempOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 50,
          usePointStyle: true,
          pointStyle: "line"
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        title: {
          display: true,
          text: "Time",
          color: "white",
          font: {
            size: 20,
            weight: "bold"
          }
        }
      },
      y: {
        grid: {
          color: "#ccc",
          borderDash: [20, 4],
          borderColor: "black",
          tickColor: "black"
        },
        title: {
          display: true,
          text: "Temperature °C",
          color: "white",
          font: {
            size: 20,
            weight: "bold"
          }
        }
      }
    }
  };

var humOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 50,
          usePointStyle: true,
          pointStyle: "line"
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        title: {
          display: true,
          text: "Time",
          color: "white",
          font: {
            size: 20,
            weight: "bold"
          }
        }
      },
      y: {
        grid: {
          color: "#ccc",
          borderDash: [20, 4],
          borderColor: "black",
          tickColor: "black"
        },
        title: {
          display: true,
          text: "Humidity %",
          color: "white",
          font: {
            size: 20,
            weight: "bold"
          }
        }
      }
    }
  }


function Graph(){
    const [humList, setHumList] = useState([])
    const [tempList, setTempList] = useState([])
    const [dates, setDates] = useState([])

    useEffect(() => {
        setInterval(() => {
        const dbRef = ref(db)
        get(child(dbRef, `data`)).then( async (snapshot) => {
            let dataHum = []
            let dataTemp = []
            let dataDates = []

            snapshot.forEach( data => {
                const dataVal = data.val()
                dataHum.push(dataVal.hum)
                dataTemp.push(dataVal.temp)
                dataDates.push(moment.unix(dataVal.epoch).format('MM-DD-YY'))
            })
            while(dataDates > 6 ){
                dataHum.shift()
                dataTemp.shift()
                dataPressure.shift()
                dataDates.shift()
            } 
            setHumList(dataHum)
            setTempList(dataTemp)
            setDates(dataDates)
            console.log(snapshot.val())
        })
          }, 10000);
    }, [])

    const humData = {
        labels: dates ? [...dates] : null,
        datasets: [{
            label: 'Humidity',
            data: humList ? [...humList] : null,
            backgroundColor: "rgba(210, 210, 210, 0.3)",
            borderColor: ['#d2d2d2d9'],
            pointBackgroundColor: '#ec4646',
            pointBorderColor: '#ec4646',
            borderWidth: 2,
            fontSize: 12,
            fill: true
        }]
    }
    const tempData = {
        labels: dates ? [...dates] : null,
        datasets: [{
            label: 'Temperature',
            data: tempList ? [...tempList] : null,
            backgroundColor: "rgba(210, 210, 210, 0.3)",
            borderColor: ['#d2d2d2d9'],
            pointBackgroundColor: '#ec4646',
            pointBorderColor: '#ec4646',
            borderWidth: 2,
            fontSize: 12,
            fill: true
        }]
    }


    return (
      <div>
         <div class="flex pt-8 w-full justify-around">
          <IconTemperatureCelsius class="flex-auto fill-rose-500	"/>
          <IconWaterOutline class="flex-auto fill-indigo-500	"/>
        </div>
        <div class="flex pr-4 pt-8 w-full justify-around pl-auto pr-auto">
          <div> <p class="flex-auto w-32 text-center text-4xl font-medium">Temperature</p></div>
          <div> <p class="flex-auto w-32 text-center text-4xl font-medium">Humidity</p></div>
        </div>
        <div 
        class="flex pl-8 pr-4 mt-8 w-full justify-around h-full md:min-h-[15rem] lg:min-h-[20rem] xl:min-h-[25rem]">
            <div class="flex-auto w-[50%] pr-2 h-auto" >
                <Line  data={tempData} options={tempOptions} />
            </div>
            <div class="flex-auto w-[50%] pl-2 h-auto" >
                <Line  data={humData} options={humOptions}/>    
            </div>
        </div>
      </div>
    )
}
export default Graph