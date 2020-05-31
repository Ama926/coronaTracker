import React from 'react';

/*import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';*/

import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/covid19.jpg';



//don't have any interferences with any other css files
class App extends React.Component{
    state = {
        data : {},
        country: '',
    }

    async componentDidMount()    //make request to the fetch data
    {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
       // console.log(data);
    }

    handleCountryChange = async(country) =>{
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});
        console.log(fetchedData);
        console.log(country);
    }

    render()
    {
        const { data, country } = this.state;
        return(
        <div className={styles.container}>   
            <img className={styles.image} src={coronaImage} alt="COVID-19"/>
            <Cards data={data} />
            <Charts data={data} country={country} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>
        );
    }
}

export default App;