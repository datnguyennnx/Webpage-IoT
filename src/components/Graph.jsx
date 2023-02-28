import { ref, child, get } from "firebase/database";
import React, { useEffect, useState, useRef } from "react";
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
                dataDates.shift()
            } 
            setHumList(dataHum)
            setTempList(dataTemp)
            setDates(dataDates)
            console.log(snapshot.val())
        })
          }, 5000);
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
        <div class="flex pl-8 pr-auto pt-8 pb-8 w-full justify-around pl-auto pr-auto h-[27.5rem]">
            <div class="flex-auto w-[50%] h-[100%]" >
                <Line  data={tempData}/>
            </div>
            <div class="flex-auto w-[50%] h-[100%]">
                <Line  data={humData}/>    
            </div>
        </div>
    )
}
export default Graph