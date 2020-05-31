import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Charts.module.css';

const Charts = () => {  //functional components
    const [dailyData, setDailyData] = useState([]);

  /*  state ={
        dailyData: {}
    }*/

    useEffect(() => {
        const fetchAPI = async () =>
        {
            setDailyData(await fetchDailyData());
        }
       // console.log(dailyData);
        fetchAPI();
    });

    const lineChart = (
        dailyData.length != 0
        ?(
        <Line 
         data={{
             labels: dailyData.map(({ date })=> date),
             datasets: [{
                data: dailyData.map(({local_total_cases}) => local_total_cases),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
             }, {
                data: dailyData.map(({local_deaths}) => local_deaths),
                label: 'Infected',
                borderColor: 'red',
                backgroundColor: 'rgba(250,0,0,0.5)',
                fill: true,
             }],
         }}
        />) : null
    );

    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts;