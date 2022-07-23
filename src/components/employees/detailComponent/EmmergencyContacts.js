import React,{useState, useEffect} from 'react'
import { Button, CardHeader, TextField } from '@mui/material';
import { FormLabel } from '@material-ui/core';
import Tables from '../../tables/Tables';
import { useDispatch, useSelector } from 'react-redux';
import { createEmmergencyContact, getEmmergencyContacts, updateEmmergencyContact } from '../../../actions/emergencyContact.action';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import Header from '../../../Header';
import EmployeeDetail from '../EmployeeDetail';

function EmmergencyContact() {
 const [showDot, setShowDot] = React.useState(true);


  const [currentId, setCurrentId] = useState(0);
  
  const emmergencyContactRows = useSelector((state) => state.emmergencyContactReducer);

  const head = ['ID','First Name','Middle Name','Last Name','Relationship','Email','Address','Contact Number','Actions'];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmmergencyContacts());
  }, [currentId, dispatch]);
  const confirmPassword = '';



  const contact = useSelector((state) => (currentId ? state.emmergencyContactReducer.find((message) => message._id === currentId) : null));

  const clear = () => {
    setCurrentId(0);
    setContactData({ employeeID: '', firstName: '', middleName: '', lastName: '', relation: '',email:'',address:'', contactNumber:''});
  };

  const [contactData, setContactData] = useState({  employeeID: '', firstName: '', middleName: '', lastName: '', relation: '',email:'',address:'', contactNumber:''});




   useEffect(() => {
    if (contact) setContactData(contact);
   }, [contact]);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
if (currentId === 0) {
      dispatch(createEmmergencyContact(contactData));
      clear();
    } else {
      dispatch(updateEmmergencyContact(currentId, contactData));
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
                  <FormLabel style={{  marginBottom: '20px', marginTop: '40px', fontSize: '25px', color:'#1976d2' }}>{currentId ? `Updating "${contactData.employeeID}"`: 'Add EmmergencyContact'}</FormLabel><br /><br />
                  </center>  
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='employeeID' label='Employee ID' value={contactData.employeeID} onChange={(e)=> setContactData({...contactData, employeeID: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width: '30vw', height: '10vh' }} variant='outlined' name='firstName' label='First Name' value={contactData.firstName} onChange={(e)=> setContactData({...contactData, firstName: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px',  marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='middleName' label='Middle Name/ Father Name' value={contactData.middleName} onChange={(e)=> setContactData({...contactData, middleName: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='lastName' label='Last Name / GrandFather Name' value={contactData.lastName} onChange={(e)=> setContactData({...contactData, lastName: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='relation' label='Relationship' value={contactData.relation} onChange={(e)=> setContactData({...contactData, relation: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '20px', width:'30vw', height:'10vh' }} variant='outlined' name='email' label='Email' value={contactData.email} onChange={(e)=> setContactData({...contactData, email: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}}  variant='outlined' name='address' label='Address' value={contactData.address} onChange={(e)=> setContactData({...contactData, address: e.target.value})} multiline/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}}  variant='outlined' name='contactNumber' label='Contact Number' value={contactData.contactNumber} onChange={(e)=> setContactData({...contactData, contactNumber: e.target.value})} multiline/>
                  
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
                  {showDot ? 'Add EmmergencyContact' : 'Cancel'}
             </Button>
         
        
        
          <div style={{ marginTop: '50px' }} >
           
            <SearchBar
              style={{ marginBottom: '10px', width:'50vw',border:'0.3px solid lightGrey' }}
              // value={this.state.value}
              // onChange={(newValue) => this.setState({ value: newValue })}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
          
           
              
              <Tables rows={emmergencyContactRows} heads={head} currentId={currentId}  setCurrentId={setCurrentId} type='emm' showDot={showDot} setShowDot={setShowDot}/>
       
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

export default EmmergencyContact