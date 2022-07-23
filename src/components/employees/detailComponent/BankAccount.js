import React,{useState, useEffect} from 'react'
import { Button, CardHeader, TextField } from '@mui/material';
import { FormLabel } from '@material-ui/core';
import Tables from '../../tables/Tables';
import { useDispatch, useSelector } from 'react-redux';
import { createBankAccount, getBankAccounts, updateBankAccount } from '../../../actions/bankAccount.action';
import { Grid } from '@material-ui/core';

import EmployeeDetail from '../EmployeeDetail';
import Header from '../../../Header';
function BankAccount() {
 const [showDot, setShowDot] = React.useState(true);


  const [currentId, setCurrentId] = useState(0);
  
  const bankAccountRows = useSelector((state) => state.bankAccountReducer);

  const head = ['Employee ID','Account Type','Bank Name','Account Number','Bank Code','Actions'];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBankAccounts());
  }, [currentId, dispatch]);
  const confirmPassword = '';
  const bankAcc = useSelector((state) => (currentId ? state.bankAccountReducer.find((message) => message._id === currentId) : null));

  const clear = () => {
    setCurrentId(0);
    setBankAccData({ employeeID: '', accountType: '', bankName: '', accountNumber: '', bankCode: ''});
  };

  const [bankAccData, setBankAccData] = useState({ employeeID: '', accountType: '', bankName: '', accountNumber: '', bankCode: ''});




   useEffect(() => {
    if (bankAcc) setBankAccData(bankAcc);
   }, [bankAcc]);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
if (currentId === 0) {
      dispatch(createBankAccount(bankAccData));
      clear();
    } else {
      dispatch(updateBankAccount(currentId, bankAccData));
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
                  <FormLabel style={{  marginBottom: '20px', marginTop: '40px', fontSize: '25px', color:'#1976d2' }}>{currentId ? `Updating "${bankAccData.firstName}"`: 'Add Basic Information'}</FormLabel><br /><br />
                  </center>  
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='employeeID' label='Employee ID' value={bankAccData.employeeID} onChange={(e)=> setBankAccData({...bankAccData, employeeID: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width: '30vw', height: '10vh' }} variant='outlined' name='accountType' label='Account Type' value={bankAccData.accountType} onChange={(e)=> setBankAccData({...bankAccData, accountType: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px',  marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='bankName' label='Bank Name'value={bankAccData.bankName} onChange={(e)=> setBankAccData({...bankAccData, bankName: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh' }} variant='outlined' name='accountNumber' label='Account Number' value={bankAccData.accountNumber} onChange={(e)=> setBankAccData({...bankAccData, accountNumber: e.target.value})}/>
                      <TextField style={{ marginLeft: '20px', marginBottom: '10px', width:'30vw', height:'10vh'}} variant='outlined' name='gender' label='Bank Code' value={bankAccData.bankCode} onChange={(e)=> setBankAccData({...bankAccData, bankCode: e.target.value})}/>
                  
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
                  {showDot ? 'Add BankAccount' : 'Cancel'}
             </Button>
         
        
        
          <div style={{ marginTop: '50px' }} >
           
            
          
           
              
              <Tables rows={bankAccountRows} heads={head} currentId={currentId}  setCurrentId={setCurrentId} type='bank' showDot={showDot} setShowDot={setShowDot}/>
       
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

export default BankAccount