import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';      //to use charts

import styles from './Charts.module.css';

const Chart = ({data: {confirmed,recovered,deaths}, country}) => {  //functional components
    const [dailyData, setDailyData] = useState({});

  /*  state ={
        dailyData: {}
    }*/

    useEffect(() => {
        const fetchAPI = async () =>
        {
            const initialDailyData = await fetchDailyData();
            setDailyData(initialDailyData);
           // setDailyData(await fetchDailyData());
        }
       // console.log(dailyData);
        fetchAPI();
    }, []);

    const lineChart = (
       // dailyData.length !== 0
       dailyData[0]
        ?(
        <Line 
         data={{
             labels: dailyData.map(({ date }) => date),
             datasets: [{
               // data: dailyData.map((data) => data.data.local_total_cases),
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
             }, {
              //  data: dailyData.map((data) => data.data.local_deaths),
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(250,0,0,0.5)',
                fill: true,
             },],
         }}
        />) : null
    );

    //console.log(confirmed, recovered, deaths);
    const barChart = (
        confirmed?(
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(250,0,0.5)',
                        ],
                        data: [confirmed.value, recovered.value, deaths.value],
                    },],

                }}
                options={{
                    legend: {display: false },
                    title: {display: true, text:`Current state in ${country}`},
                }}
            />
        ) : null
    );

    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;