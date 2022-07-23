import React,{useState, useEffect} from 'react'
import { Button, CardHeader, TextField } from '@mui/material';
import { FormLabel } from '@material-ui/core';
import Tables from '../../tables/Tables';
import { useDispatch, useSelector } from 'react-redux';
import { createLeave, getLeaves, updateLeave } from '../../../actions/leave.action';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import EmployeeDetail from '../EmployeeDetail';
import Header from '../../../Header';

function Leave() {
 const [showDot, setShowDot] = React.useState(true);


  const [currentId, setCurrentId] = useState(0);
  
  const leaveRows = useSelector((state) => state.leaveReducer);

  const head = ['ID','Leave Type','From','To', 'Actions'];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLeaves());
  }, [currentId, dispatch]);
  const confirmPassword = '';
  const lea = useSelector((state) => (currentId ? state.leaveReducer.find((message) => message._id === currentId) : null));

  const clear = () => {
    setCurrentId(0);
    setLeaData({ employeeID: '', leaveType: '', from: '', to: ''});
  };

  const [leaData, setLeaData] = useState({  employeeID: '', leaveType: '', from: '', to: ''});




   useEffect(() => {
    if (lea) setLeaData(lea);
   }, [lea]);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
if (currentId === 0) {
    dispatch(createLeave(leaData));
    console.log(leaData)
      clear();
    } else {
      dispatch(updateLeave(currentId, leaData));
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
                  <FormLabel style={{  marginBottom: '20px', marginTop: '40px', fontSize: '25px', color:'#1976d2' }}>{currentId ? `Updating "${leaData.employeeID}"`: 'Add Leave'}</FormLabel><br /><br />
                  </center>  
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='employeeID' label='Employee ID' value={leaData.employeeID} onChange={(e)=> setLeaData({...leaData, employeeID: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width: '30vw', height: '10vh' }} variant='outlined' name='leaveType' label='Leave Type' value={leaData.leaveType} onChange={(e)=> setLeaData({...leaData, leaveType: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px',  marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='from' label='From' value={leaData.from} onChange={(e)=> setLeaData({...leaData, from: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='to' label='To' value={leaData.to} onChange={(e)=> setLeaData({...leaData, to: e.target.value})}/>
                  
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
                  {showDot ? 'Add Leave' : 'Cancel'}
             </Button>
         
        
        
          <div style={{ marginTop: '50px' }} >
           
            <SearchBar
              style={{ marginBottom: '10px', width:'50vw',border:'0.3px solid lightGrey' }}
              // value={this.state.value}
              // onChange={(newValue) => this.setState({ value: newValue })}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
          
           
              
              <Tables rows={leaveRows} heads={head} currentId={currentId}  setCurrentId={setCurrentId} type='lea' showDot={showDot} setShowDot={setShowDot}/>
       
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

export default Leave