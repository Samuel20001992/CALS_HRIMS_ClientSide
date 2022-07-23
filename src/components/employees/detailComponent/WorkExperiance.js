import React,{useState, useEffect} from 'react'
import { Button, CardHeader, TextField } from '@mui/material';
import { FormLabel } from '@material-ui/core';
import Tables from '../../tables/Tables';
import { useDispatch, useSelector } from 'react-redux';
import { createWorkExperiance, getWorkExperiances, updateWorkExperiance } from '../../../actions/workExperiance.action';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import Header from '../../../Header';
import EmployeeDetail from '../EmployeeDetail';

function WorkExperiance() {
 const [showDot, setShowDot] = React.useState(true);


  const [currentId, setCurrentId] = useState(0);
  
  const workExperianceRows = useSelector((state) => state.workExperianceReducer);

  const head = ['ID','Company Name','Position','From','To','Actions'];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorkExperiances());
  }, [currentId, dispatch]);
  const confirmPassword = '';
  const work = useSelector((state) => (currentId ? state.workExperianceReducer.find((message) => message._id === currentId) : null));

  const clear = () => {
    setCurrentId(0);
    setWorkData({ employeeID: '', company_name: '', position: '', from: '', to: ''});
  };

  const [workData, setWorkData] = useState({ employeeID: '', company_name: '', position: '', from: '', to: ''});




   useEffect(() => {
    if (work) setWorkData(work);
   }, [work]);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
if (currentId === 0) {
      dispatch(createWorkExperiance(workData));
      clear();
    } else {
      dispatch(updateWorkExperiance(currentId, workData));
      clear();
    }
    
  };






  return (
      <Grid container>
            <Grid item xs={12} >
                <Header/>
            </Grid>
            <Grid item xs={12} lg={2} sm={12}>
              <EmployeeDetail />
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
                  <FormLabel style={{  marginBottom: '20px', marginTop: '40px', fontSize: '25px', color:'#1976d2' }}>{currentId ? `Updating "${workData.employeeID}"`: 'Add WorkExperiance'}</FormLabel><br /><br />
                  </center>  
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='employeeID' label='Employee ID' value={workData.employeeID} onChange={(e)=> setWorkData({...workData, employeeID: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width: '30vw', height: '10vh' }} variant='outlined' name='company_name' label='Company Name' value={workData.company_name} onChange={(e)=> setWorkData({...workData, company_name: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px',  marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='position' label='Position' value={workData.position} onChange={(e)=> setWorkData({...workData, position: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='from' label='From' value={workData.from} onChange={(e)=> setWorkData({...workData, from: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='to' label='To' value={workData.to} onChange={(e)=> setWorkData({...workData, to: e.target.value})}/>
                  
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
                  {showDot ? 'Add WorkExperiance' : 'Cancel'}
             </Button>
         
        
        
          <div style={{ marginTop: '50px' }} >
           
            <SearchBar
              style={{ marginBottom: '10px', width:'50vw',border:'0.3px solid lightGrey' }}
              // value={this.state.value}
              // onChange={(newValue) => this.setState({ value: newValue })}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
          
           
              
              <Tables rows={workExperianceRows} heads={head} currentId={currentId}  setCurrentId={setCurrentId} type='work' showDot={showDot} setShowDot={setShowDot}/>
       
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

export default WorkExperiance