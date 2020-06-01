import React, { useState, useEffect } from 'react';  //react hooks
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

//functional components
const Countries = ({handleCountryChange}) => {  
 const [countries, setCountries] = useState([]);

    useEffect(() =>
    {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        }

        fetchAPI();
    },[]);

    //console.log(fetchCountries);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default Countries;