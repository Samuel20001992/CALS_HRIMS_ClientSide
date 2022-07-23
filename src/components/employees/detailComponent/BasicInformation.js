import React,{useState, useEffect} from 'react'
import { Button, CardHeader, TextField } from '@mui/material';
import { FormLabel } from '@material-ui/core';
import Tables from '../../tables/Tables';
import { useDispatch, useSelector } from 'react-redux';
import { createBasicInformation, getBasicInformations, updateBasicInformation } from '../../../actions/basicInformation.action';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import EmployeeDetail from '../EmployeeDetail';
import Header from '../../../Header';

function BasicInformation() {
 const [showDot, setShowDot] = React.useState(true);


  const [currentId, setCurrentId] = useState(0);
  
  const basicInformationRows = useSelector((state) => state.basicInformationsReducer);

  const head = ['ID','First Name','Middle Name','Last Name','Gender','Date of Birth','Designation','Email' ,'Actions'];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBasicInformations());
  }, [currentId, dispatch]);
  const confirmPassword = '';
  const basicInfo = useSelector((state) => (currentId ? state.basicInformationsReducer.find((message) => message._id === currentId) : null));

  const clear = () => {
    setCurrentId(0);
    setBasicInfoData({ employeeID: '', firstName: '', middleName: '', lastName: '', gender: '',dateofBirth:'',email:'', contactNumber:'', password:'',designation:'',basicSalary:'',headofDesignation:'',department:'', organization:''});
  };

  const [basicInfoData, setBasicInfoData] = useState({  employeeID: '', firstName: '', middleName: '', lastName: '', gender: '',dateofBirth:'',email:'', contactNumber:'', password:'',designation:'',basicSalary:'',headofDesignation:'',department:'', organization:''});




   useEffect(() => {
    if (basicInfo) setBasicInfoData(basicInfo);
   }, [basicInfo]);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
if (currentId === 0) {
      dispatch(createBasicInformation(basicInfoData));
      clear();
    } else {
      dispatch(updateBasicInformation(currentId, basicInfoData));
      clear();
    }
    
  };

  return (

       <Grid container>
            <Grid item xs={12} >
                <Header/>
            </Grid>
            <Grid item xs={12} lg={2} sm={12}>
              <EmployeeDetail/>
            </Grid>
          <Grid item xs={12} lg={9} sm={12} style={{ marginTop: '40px' }}>
             <div>
        {showDot ? null :
              <div
                  style={{
                      boxShadow: '5px 10px 15px #888888',
                  }}>
            
                  <form autoComplete="off" noValidate style={{ paddingTop: '20px', minWidth:'325px', paddingRight:'20px' }} onSubmit={handleSubmit}>
                  <center>   
                  <FormLabel style={{  marginBottom: '20px', marginTop: '40px', fontSize: '25px', color:'#1976d2' }}>{currentId ? `Updating "${basicInfoData.firstName}"`: 'Add Basic Information'}</FormLabel><br /><br />
                  </center>  
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='employeeID' label='Employee ID' value={basicInfoData.employeeID} onChange={(e)=> setBasicInfoData({...basicInfoData, employeeID: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width: '30vw', height: '10vh' }} variant='outlined' name='firstName' label='First Name' value={basicInfoData.firstName} onChange={(e)=> setBasicInfoData({...basicInfoData, firstName: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px',  marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='middleName' label='Middle Name'value={basicInfoData.middleName} onChange={(e)=> setBasicInfoData({...basicInfoData, middleName: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='lastName' label='Last Name' value={basicInfoData.lastName} onChange={(e)=> setBasicInfoData({...basicInfoData, lastName: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='gender' label='Gender' value={basicInfoData.gender} onChange={(e)=> setBasicInfoData({...basicInfoData, gender: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '20px', width:'30vw', height:'10vh' }} variant='outlined' name='dateofBirth' label='Date of Birth' value={basicInfoData.dateofBirth} onChange={(e)=> setBasicInfoData({...basicInfoData, dateofBirth: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}}  variant='outlined' name='email' label='Email' value={basicInfoData.email} onChange={(e)=> setBasicInfoData({...basicInfoData, email: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='contactNumber' label='Contact Number' value={basicInfoData.contactNumber} onChange={(e)=> setBasicInfoData({...basicInfoData, contactNumber: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='password' label='Password' value={basicInfoData.password} onChange={(e)=> setBasicInfoData({...basicInfoData, password: e.target.value})}/>
                  <TextField style={{ marginLeft: '20px', marginBottom: '10px', width: '30vw', height: '10vh' }} variant='outlined' name='confirmpassword' label='Confirm Password' value={confirmPassword} />
                  <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh' }}  variant='outlined' name='designation' label='Designation' value={basicInfoData.designation} onChange={(e)=> setBasicInfoData({...basicInfoData, designation: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '20px', width:'30vw', height:'10vh' }} variant='outlined' name='basicSalary' label='Basic Salary' value={basicInfoData.basicSalary} onChange={(e)=> setBasicInfoData({...basicInfoData, basicSalary: e.target.value})}/>
                  <TextField style={{ marginLeft: '20px', marginBottom: '10px', width: '30vw', height: '10vh' }} variant='outlined' name='headofDesignation' label='Head of Designation' value={basicInfoData.headofDesignation} onChange={(e) => setBasicInfoData({ ...basicInfoData, headofDesignation: e.target.value })} />
                    <TextField style={{ marginLeft: '20px', marginBottom: '20px', width:'30vw', height:'10vh' }} variant='outlined' name='department' label='Department ' value={basicInfoData.department} onChange={(e)=> setBasicInfoData({...basicInfoData, department: e.target.value})}/>
                  <TextField style={{ marginLeft: '20px', marginBottom: '10px', width: '30vw', height: '10vh' }} variant='outlined' name='organization' label='Organization' value={basicInfoData.organization} onChange={(e) => setBasicInfoData({ ...basicInfoData, organization: e.target.value })} />
                  
                  <br />
                      {/*     <div ><FileBase type="file" multiple={false}  /></div> */}
                      <Button style={{ marginLeft: '30px', marginBottom: '10px', width:'30vw'  }} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
                      <Button style={{ marginLeft: '30px', marginBottom: '10px', width:'30vw' }} variant="contained" color="secondary" size="large" onClick={clear} >Clear</Button>
              </form>
          </div>
              
        }
        
              <Button type="submit" style={{ marginLeft: '30px', width: '40vw', marginTop: '30px' }}
                  fullWidth variant="contained" color="primary" size="large"
                  onClick={(e) => { showDot ? setShowDot(false) : setShowDot(true) }}>
                  {showDot ? 'Add BasicInformation' : 'Cancel'}
             </Button>
         
        
        
          <div style={{ marginTop: '50px' }} >
           
            <SearchBar
              style={{ marginBottom: '10px', width:'50vw',border:'0.3px solid lightGrey' }}
              // value={this.state.value}
              // onChange={(newValue) => this.setState({ value: newValue })}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
          
           
              
              <Tables rows={basicInformationRows} heads={head} currentId={currentId}  setCurrentId={setCurrentId} type='basic' showDot={showDot} setShowDot={setShowDot}/>
       
        </div>
        
        </div> 
               
            </Grid>
            <Grid item xs={12}>
                  <center className='tag'>
                       @2022, All rights reserverd.
                 </center>
            </Grid>
         </Grid>
    
      
      
   
  )
}

export default BasicInformation