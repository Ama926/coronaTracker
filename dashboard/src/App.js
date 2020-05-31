import React from 'react';

/*import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';*/

import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

//don't have any interferences with any other css files
class App extends React.Component{
    state = {
        data : {},
    }

    async componentDidMount()    //make request to the fetch data
    {
        const fetchedData = await fetchData();

        this.setState({ data : fetchedData})
        //console.log(data);
    }
    render()
    {
        const { data } = this.state;
        return(
        <div className={styles.container}>   
            <Cards data={data}/>
            <Charts />
            <CountryPicker />
        </div>
        )
    }
}

export default App;