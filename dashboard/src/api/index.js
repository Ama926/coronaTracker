import axios from 'axios';   //used to make API request

const url = 'https://www.hpb.health.gov.lk/api/get-current-statistical';

export const fetchData = async () => {
    try{
        //const response = await axios.get(url);
        //return response;                                // returning response of api
       // console.log(response);

       const { data } = await axios.get(url);

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

    }
}