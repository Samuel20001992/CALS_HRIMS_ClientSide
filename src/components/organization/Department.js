import React, {useState, useEffect} from 'react'
import Header from '../../Header'
import { FormLabel } from '@material-ui/core'
import { Button, CardHeader, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { createDepartment, getDepartments,updateDepartment} from '../../actions/department.action';
import Tables from '../tables/Tables';
import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';

function Department() {
const [showDot, setShowDot] = React.useState(true);
  const dispatch = useDispatch();
  
  const [currentId, setCurrentId] = useState(0);
  
  useEffect(() => {
    dispatch(getDepartments());
  }, [currentId, dispatch]);
  
  const dep = useSelector((state) => (currentId ? state.departmentsReducer.find((message) => message._id === currentId) : null));
const [depData, setDepData] = useState({ name: '', head: '',  org: '' });
  const clear = () => {
    setCurrentId(0);
    setDepData({ name: '', head: '', org: ''});
  };

  
  const departmentRows = useSelector((state) => state.departmentsReducer);

  const head = [ 'Name','Head of Department','Organization'];
  
  useEffect(() => {
    dispatch(getDepartments())
  }, []);

   useEffect(() => {
    if (dep) setDepData(dep);
   }, [dep]);
  
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      
if (currentId === 0) {
      dispatch(createDepartment(depData));
      clear();
    } else {
      dispatch(updateDepartment(currentId, depData));
      clear();
    }
    
  };
  return (
    <div>
      <Header />
      <div>
        {showDot ? null : 
            <div
              style={{
              width: '370px',
              margin: '20px',
              marginLeft: '310px',
              boxShadow: '5px 5px 10px #9E9E9E', borderRadius: '0.2em'
              }}
            >
                <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
                  <div
                    style={{ backgroundColor: '#1976d2', color: 'white', height: '42px', marginBottom:'20px' }}
                  >
                    <Typography style={{
                      float: 'left',
                      marginLeft: '30px',
                      margin: '5px',
                      fontWeight:'bold'
                      
                    }} variant='subtitle'>{currentId ? `Editing "${dep.name}"` : 'Add Department'}</Typography>
                  </div>
                  <TextField style={{ marginLeft: '30px', marginBottom:'10px', width:'300px'}} name="name" variant="outlined" label="Name" value={depData.name} onChange={(e)=> setDepData({...depData, name: e.target.value})} fullWidth  />
                  <TextField style={{ marginLeft:'30px', width:'300px', marginBottom:'10px'}} name="head" variant="outlined" label="Head of Department" fullWidth  value={depData.head} onChange={(e)=> setDepData({...depData, head: e.target.value})}/>
                  <TextField style={{ marginLeft: '30px', width: '300px', marginBottom: '10px' }} name="org" variant="outlined" label="Organization" fullWidth value={depData.org} onChange={(e)=> setDepData({...depData, org: e.target.value})}/><br/>
              {/*     <div ><FileBase type="file" multiple={false}  /></div> */}
                  <Button style={{ margin:'0px 30px', width:'120px',  marginBottom:'10px' }}  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                  <Button style={{ margin:'0px 30px', width:'120px', marginBottom:'10px'}} variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
                </form>
            </div>
        }
        <center >
          <div style={{
                marginTop: '90px', width: '1000px'
              }} >
            <Box style={{boxShadow:'5px 5px 10px #9E9E9E', borderRadius:'0.2em', width: '80vw', minWidth: '325px'}} >
              <div style={{ backgroundColor: '#1976d2', color: 'white', height: '42px' }}>
                    <Typography style={{
                      float: 'left',
                      marginLeft: '30px',
                      margin: '5px',
                      fontWeight:'bold'
                      
                    }} variant='subtitle'>Department List</Typography>
                    
                    <Button type="submit"
                      style={{
                        width: '100px',
                        height: '30px',
                        margin: '5px',
                        float: 'right',
                        color: 'white',
                        backgroundColor: '#0394fc'
                      }}
                      color="primary"
                      size="large"
                      onClick={(e) => { showDot ? setShowDot(false) : setShowDot(true) }}>
                      <pre>{showDot ? 'Add New' : 'Hide'}</pre>
                    </Button>
              </div>
              <Tables rows={departmentRows} heads={head} currentId={currentId} setCurrentId={setCurrentId} type='dep' showDot={showDot} setShowDot={setShowDot} />
            </Box>
          </div>
        </center>
      </div>
    </div>
  )
}

export default Department