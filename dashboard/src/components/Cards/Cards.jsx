import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';  //use for designing
import CountUp from 'react-countup';   //counting 
import cx from 'classnames';

import styles from './Cards.module.css';

 //functional components  //error: data is undefiened
//const Info = ({ data: {confirmed, recovered, deaths, lastupdate} }) => {
const Info = ({ data: {local_total_cases, recovered, deaths, lastupdate} }) => {  
 // console.log(confiremed);
  if(!local_total_cases){
      return 'Loading...';
  }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Infected</Typography>
                       <Typography variant="h5" component="h2">
                           <CountUp 
                            start ={0}  //starting value
                            end={local_total_cases}  //ending value
                            duration={2.5}  //time for counting
                            separator=","
                           />
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastupdate).toDateString()}</Typography>
                       <Typography variant="body2" component="p">No of active cases </Typography>
                    </CardContent> 
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                       <Typography variant="h5" component="h2">
                           <CountUp 
                            start ={0}
                            end={recovered.value}
                            duration={2.75}
                            separator=","
                           />
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastupdate).toDateString()}</Typography>
                       <Typography variant="body2" component="p">No of recoveries </Typography>
                    </CardContent> 
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                       <Typography variant="h5" component="h2">
                           <CountUp 
                            start ={0}
                            end={deaths.value}
                            duration={2.65}
                            separator=","
                           />
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastupdate).toDateString()}</Typography>
                       <Typography variant="body2" component="p">No of deaths</Typography>
                    </CardContent> 
                </Grid>
            </Grid>

        </div>
    );
};

export default Info;