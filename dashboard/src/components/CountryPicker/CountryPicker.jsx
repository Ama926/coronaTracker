import React, { useState, useEffect } from 'react';  //react hooks
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { countries } from '../../api';

const CountryPicker = () => {  //functional components
 const [fetchCountries, setFetchCountries] = useState([]);
    useEffect(() =>
    {
        const fetchCountries = async () => {
            setFetchCountries(await countries);
        }

        fetchCountries();
    })
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;