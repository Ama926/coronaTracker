import axios from 'axios';   //used to make API request

const url = 'https://www.hpb.health.gov.lk/api/get-current-statistical';
const Globalurl = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = Globalurl;

    if(country){
        changeableUrl = `${Globalurl}/countries/${country}`;
    }
    try{
        //const response = await axios.get(url);
        //return response;                                // returning response of api
       // console.log(response);

      // const { data } = await axios.get(url);
       const { data } = await axios.get(changeableUrl);


       const modifiedData = {
           confiremed: data.data.local_total_cases,
           recovered: data.data.local_recovered,
           deaths: data.data.local_deaths,
           lastupdate: data.data.update_date_time
       }
        return modifiedData;

        //easy method

      /*  const { data : {confirmed, recovered, deaths, lastupdate} } = await axios.get(url);

        return {confirmed, recovered, deaths, lastupdate};*/
    }
    catch(error){
        console.log(error);
    }
}

export const fetchDailyData = async () =>{
    try{
        const { data }  = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    }
    catch(error){
        console.log(error);
    }
}

export const fetchCountries = async () =>
{
    try{
        const {data: { countries }} = await axios.get(`${Globalurl}/countries`);
      //  console.log(response);

      return countries.map((country) => country.name);
    }
    catch(error){
        console.log(error);
    }
}