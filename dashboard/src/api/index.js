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
       const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);


    /*   const modifiedData = {
           confirmed: data.data.local_total_cases,
           recovered: data.data.local_recovered,
           deaths: data.data.local_deaths,
           lastupdate: data.data.update_date_time
       }
        return modifiedData;*/

        //easy method

       // const { data : {confirmed, recovered, deaths, lastupdate} } = await axios.get(Globalurl);

        return {confirmed, recovered, deaths, lastUpdate};
    }
    catch(error){
       // console.log(error);
        return error;
    }
}

export const fetchDailyData = async () =>{
    try{
        const { data }  = await axios.get(`${Globalurl}/daily`);

      /*  const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,*/
            return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));

    }
    catch(error){
       // console.log(error);
        return error;
    }
};

export const fetchCountries = async () =>
{
    try{
        const {data: { countries }} = await axios.get(`${Globalurl}/countries`);
      //  console.log(response);

      return countries.map((country) => country.name);
    }
    catch(error){
        return error;
      //  console.log(error);
    }
};