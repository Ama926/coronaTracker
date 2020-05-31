import React, { useState, useEffect } from 'react';  //react hooks
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { countries, fetchCountries } from '../../api';

//functional components
const CountryPicker = ({handleCountryChange}) => {  
 const [fetchAPI, setFetchCountries] = useState([]);
    useEffect(() =>
    {
        const fetchCountries = async () => {
            setFetchCountries(await fetchCountries());
        }

        fetchAPI();
    },[setFetchCountries]);

    //console.log(fetchCountries);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;