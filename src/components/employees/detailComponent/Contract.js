import React,{useState, useEffect} from 'react'
import { Button, CardHeader, TextField } from '@mui/material';
import { FormLabel } from '@material-ui/core';
import Tables from '../../tables/Tables';
import { useDispatch, useSelector } from 'react-redux';
import { createContract, getContracts, updateContract } from '../../../actions/contract.action';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import EmployeeDetail from '../EmployeeDetail';
import Header from '../../../Header';

function Contract() {
 const [showDot, setShowDot] = React.useState(true);


  const [currentId, setCurrentId] = useState(0);
  
  const contractRows = useSelector((state) => state.contractReducer);

  const head = ['ID','Contract Type','Contract Title','From ','To','Designation','Description','Actions'];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContracts());
  }, [currentId, dispatch]);
  const confirmPassword = '';
  const cont = useSelector((state) => (currentId ? state.contractReducer.find((message) => message._id === currentId) : null));

  const clear = () => {
    setCurrentId(0);
    setContData({ employeeID: '',
    contractType: '',
    contractTitle: '',
    from: '',
    to: '',
    designation: '',
    description: '',});
  };

  const [contData, setContData] = useState({ employeeID: '',
    contractType: '',
    contractTitle: '',
    from: '',
    to: '',
    designation: '',
    description: ''});




   useEffect(() => {
    if (cont) setContData(cont);
   }, [cont]);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
if (currentId === 0) {
  dispatch(createContract(contData));
  console.log(contData)
      clear();
    } else {
      dispatch(updateContract(currentId, contData));
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
                  <FormLabel style={{  marginBottom: '20px', marginTop: '40px', fontSize: '25px', color:'#1976d2' }}>{currentId ? `Updating "${contData.firstName}"`: 'Add Basic Information'}</FormLabel><br /><br />
                  </center>  
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='employeeID' label='Employee ID' value={contData.employeeID} onChange={(e)=> setContData({...contData, employeeID: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width: '30vw', height: '10vh' }} variant='outlined' name='contractType' label='Contract Type' value={contData.contractType} onChange={(e)=> setContData({...contData, contractType: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px',  marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='contractTitle' label='Contract Title' value={contData.contractTitle} onChange={(e)=> setContData({...contData, contractTitle: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='from' label='From' value={contData.from} onChange={(e)=> setContData({...contData, from: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='to' label='To' value={contData.to} onChange={(e)=> setContData({...contData, to: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '20px', width:'30vw', height:'10vh' }} variant='outlined' name='designation' label='Designation' value={contData.designation} onChange={(e)=> setContData({...contData, designation: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}}  variant='outlined' name='description' label='Description' value={contData.description} onChange={(e)=> setContData({...contData, description: e.target.value})}/>
                  
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
                  {showDot ? 'Add Contract' : 'Cancel'}
             </Button>
         
        
        
          <div style={{ marginTop: '50px' }} >
           
            <SearchBar
              style={{ marginBottom: '10px', width:'50vw',border:'0.3px solid lightGrey' }}
              // value={this.state.value}
              // onChange={(newValue) => this.setState({ value: newValue })}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
          
           
              
              <Tables rows={contractRows} heads={head} currentId={currentId}  setCurrentId={setCurrentId} type='cont' showDot={showDot} setShowDot={setShowDot}/>
       
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

export default Contract