import { Grid } from '@mui/material';
import React from 'react'
import BasicInformation from './detailComponent/BasicInformation';
import Header from '../../Header';
function Employee() {
  return (
    
        <Grid container>
            <Grid item xs={12} >
                <Header/>
            </Grid>
            <Grid item xs={12} style={{marginTop:'40px'}}>
            <center>
          <BasicInformation />
           </center>
            </Grid>
            <Grid item xs={12}>
                  <center className='tag'>
                       @2022, All rights reserverd.
                 </center>
          </Grid>
          </Grid>
     
  )
}

export default Employee