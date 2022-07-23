import React,{useEffect, useState} from 'react'
import { Grid } from '@material-ui/core';
import Tables from '../tables/Tables';
import Header from '../../Header';
import { useDispatch, useSelector } from 'react-redux';
import { createBasicInformation, getBasicInformations, updateBasicInformation } from '../../actions/basicInformation.action';
import Records from './Records';
function EmployeeRecord() {

const [currentId, setCurrentId] = useState(0);
  
  const basicInformationRows = useSelector((state) => state.basicInformations);

  const head = ['ID','First Name','Middle Name','Last Name','Gender','Date of Birth','Designation','Email','Details' ,'Actions'];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBasicInformations());
  }, [currentId, dispatch]);
  const confirmPassword = '';
  const basicInfo = useSelector((state) => (currentId ? state.basicInformations.find((message) => message._id === currentId) : null));

  const clear = () => {
    setCurrentId(0);
    setBasicInfoData({ employeeID: '', firstName: '', middleName: '', lastName: '', gender: '',dateofBirth:'',email:'', contactNumber:'', password:'',designation:'',basicSalary:'',headofDesignation:'',department:'', organization:''});
  };

  const [basicInfoData, setBasicInfoData] = useState({  employeeID: '', firstName: '', middleName: '', lastName: '', gender: '',dateofBirth:'',email:'', contactNumber:'', password:'',designation:'',basicSalary:'',headofDesignation:'',department:'', organization:''});




   useEffect(() => {
    if (basicInfo) setBasicInfoData(basicInfo);
   }, [basicInfo]);
  
  



  return (
    <div>
          <Grid container>
            <Grid item xs={12} >
                <Header/>
            </Grid>
            <Grid item xs={12} lg={4} sm={12} >
                  <img style={{ width:'300px'}} src="data:image/jpeg;base64,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" alt="" />
            </Grid>
            <Grid item xs={12} lg={4} sm={12} style={{marginTop:'40px', marginRight:'0px'}}>
                  <Records/>
              </Grid>
              <Grid item xs={12} lg={4} sm={12} style={{marginTop:'40px', marginRight:'0px'}}>
                  <Records/>
            </Grid>
            <Grid item xs={12}>
                  <center className='tag'>
                       @2022, All rights reserverd.
                 </center>
            </Grid>
         </Grid>
    </div>
  )
}

export default EmployeeRecord