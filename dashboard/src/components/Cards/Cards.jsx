import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

 //functional components  //error: data is undefiened
const Cards = ({ data: {confiremed, recovered, deaths, lastupdate} }) => { 
  console.log(confiremed);
  if(!confiremed){
      return 'Loading...';
  }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Cards} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Infected</Typography>
                       <Typography variant="h5">
                           <CountUp 
                            start ={0}
                            end={confiremed.value}
                            duration={2.5}
                            separator=","
                           />
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastupdate).toDateString()}</Typography>
                       <Typography variant="body2">No of active cases </Typography>
                    </CardContent> 
                </Grid>

                <Grid item component={Cards} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Infected</Typography>
                       <Typography variant="h5">
                           <CountUp 
                            start ={0}
                            end={confiremed.value}
                            duration={2.5}
                            separator=","
                           />
                       </Typography>
                       <Typography color="textSecondary">REAL DATE</Typography>
                       <Typography variant="body2">No of active cases </Typography>
                    </CardContent> 
                </Grid>

                <Grid item component={Cards} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Infected</Typography>
                       <Typography variant="h5">
                           <CountUp 
                            start ={0}
                            end={confiremed.value}
                            duration={2.5}
                            separator=","
                           />
                       </Typography>
                       <Typography color="textSecondary">REAL DATE</Typography>
                       <Typography variant="body2">No of active cases </Typography>
                    </CardContent> 
                </Grid>
            </Grid>

        </div>
    );
};

export default Cards;