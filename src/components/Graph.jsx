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
  } from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

function Graph(){
    const refReact = useRef();
    const [humList, setHumList] = useState([])
    const [tempList, setTempList] = useState([])
    const [dates, setDates] = useState([])

    useEffect(() => {
        const dbRef = ref(db)
        get(child(dbRef, `data`)).then((snapshot) => {
            console.log(snapshot.val())

            let dataHum = []
            let dataTemp = []
            let dataDates = []

            snapshot.forEach( data => {
                const dataVal = data.val()
                dataHum.push(dataVal.hum)
                dataTemp.push(dataVal.temp)
                dataDates.push(moment.unix(dataVal.epoch).format('MM-DD-YY h:mm A'))
            })

            console.log(dataDates)
            while(dataDates > 6 ){
                dataHum.shift()
                dataTemp.shift()
                dataDates.shift()
            } 

            setHumList(dataHum)
            setTempList(dataTemp)
            setDates(dataDates)

        })
    }, [])


    const humData = {
        label: dates ? [...dates] : null,
        datasets: [{
            label: 'Humidity',
            data: humList ? [...humList] : null,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: ['#ff577f45'],
            pointBackgroundColor: '#ec4646',
            pointBorderColor: '#ec4646'
        }]
    }
    const tempData = {
        label: dates ? [...dates] : null,
        datasets: [{
            label: 'Temperature',
            data: tempList ? [...tempList] : null,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: ['#ff577f45'],
            pointBackgroundColor: '#ec4646',
            pointBorderColor: '#ec4646'
        }]
    }

    return (
        <div class="inline-grid grid-cols-2 w-full flex justify-center">
            <div class="flex-auto">
                <Line ref={refReact} data={tempData}/>
            </div>
            <div class="flex-auto">
                <Line ref={refReact} data={humData}/>    
            </div>
        </div>
    )
}


export default Graph