import React,{useState, useEffect} from 'react'
import { Button, CardHeader, TextField } from '@mui/material';
import { FormLabel } from '@material-ui/core';
import Tables from '../../tables/Tables';
import { useDispatch, useSelector } from 'react-redux';
import { createImmigration, getImmigrations, updateImmigration } from '../../../actions/immigration.action';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import EmployeeDetail from '../EmployeeDetail';
import Header from '../../../Header';

function Immigration() {
 const [showDot, setShowDot] = React.useState(true);


  const [currentId, setCurrentId] = useState(0);
  
  const immigrationRows = useSelector((state) => state.immigrationReducer);
    console.log(immigrationRows);
  const head = ['ID','Document','Document Number','Issue Date','Expiry Date','Eligible Review Date','Country', 'Actions'];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImmigrations());
  }, [currentId, dispatch]);
  const imm = useSelector((state) => (currentId ? state.immigrationReducer.find((message) => message._id === currentId) : null));

  const clear = () => {
    setCurrentId(0);
    setImmData({ employeeID:'',
    documnet:'',
    documentNumber:'',
    issueDate:'',
    expiryDate:'',
    eligibleReviewDate:'',
    country:''});
  };

  const [immData, setImmData] = useState({ employeeID:'',
    documnet:'',
    documentNumber:'',
    issueDate:'',
    expiryDate:'',
    eligibleReviewDate:'',
    country:''});




   useEffect(() => {
    if (imm) setImmData(imm);
   }, [imm]);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
if (currentId === 0) {
  dispatch(createImmigration(immData));
      clear();
    } else {
      dispatch(updateImmigration(currentId, immData));
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
                  <FormLabel style={{  marginBottom: '20px', marginTop: '40px', fontSize: '25px', color:'#1976d2' }}>{currentId ? `Updating "${immData.firstName}"`: 'Add Immigration Record'}</FormLabel><br /><br />
                  </center>  
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='employeeID' label='Employee ID' value={immData.employeeID} onChange={(e)=> setImmData({...immData, employeeID: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width: '30vw', height: '10vh' }} variant='outlined' name='document' label='Document' value={immData.document} onChange={(e)=> setImmData({...immData, documnet: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px',  marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='documentNumber' label='Document Number'value={immData.documentNumber} onChange={(e)=> setImmData({...immData, documentNumber: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='issueDate' label='Issue Date' value={immData.issueDate} onChange={(e)=> setImmData({...immData, issueDate: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='expiryDate' label='Expiry Date' value={immData.expiryDate} onChange={(e)=> setImmData({...immData, expiryDate: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '20px', width:'30vw', height:'10vh' }} variant='outlined' name='eligibleReviewDate' label='Eligible Review Date' value={immData.eligibleReviewDate} onChange={(e)=> setImmData({...immData, eligibleReviewDate: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}}  variant='outlined' name='country' label='Country' value={immData.country} onChange={(e)=> setImmData({...immData, country: e.target.value})}/>
                  
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
                  {showDot ? 'Add Immigration' : 'Cancel'}
             </Button>
         
        
        
          <div style={{ marginTop: '50px' }} >
           
            <SearchBar
              style={{ marginBottom: '10px', width:'50vw',border:'0.3px solid lightGrey' }}
              // value={this.state.value}
              // onChange={(newValue) => this.setState({ value: newValue })}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
          
           
              
              <Tables rows={immigrationRows} heads={head} currentId={currentId}  setCurrentId={setCurrentId} type='imm' showDot={showDot} setShowDot={setShowDot}/>
       
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

export default Immigration