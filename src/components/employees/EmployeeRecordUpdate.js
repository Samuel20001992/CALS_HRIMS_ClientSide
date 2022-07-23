import React,{useState} from 'react';
import { Grid } from '@material-ui/core';
import Header from '../../Header';
import EmployeeDetail from './EmployeeDetail';
import BasicInformation from './detailComponent/BasicInformation';
import BankAccount from './detailComponent/BankAccount';
import Contract from './detailComponent/Contract';
import EmmergencyContact from './detailComponent/EmmergencyContacts';
import Immigration from './detailComponent/Immigration';
import Leave from './detailComponent/Leave';
import Qualification from './detailComponent/Qualification';
import Shift from './detailComponent/Shift';
import WorkExperiance from './detailComponent/WorkExperiance';
function EmployeeRecordUpdate() {
    const [page,setPage] = useState('BasicInformation');
  return (
      
         <Grid container>
            <Grid item xs={12} >
                <Header/>
            </Grid>
            <Grid item xs={12} lg={2} sm={12}>
              <EmployeeDetail page={page} setPage={setPage}/>
            </Grid>
          <Grid item xs={12} lg={9} sm={12} style={{ marginTop: '40px' }}>
              {console.log(page)}
              {(() => {
                  switch ({page}) {
                      case 'BasicInformation':
                          return(<><BasicInformation /></>);
                          break;
                      default:
                          return<>not found</>
                  }
              })
                       
                  
                
              }
               
            </Grid>
            <Grid item xs={12}>
                  <center className='tag'>
                       @2022, All rights reserverd.
                 </center>
            </Grid>
         </Grid>
      
  )
}

export default EmployeeRecordUpdate