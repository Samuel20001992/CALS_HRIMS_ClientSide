import React from 'react';
import Header from '../../Header';
import { Link } from 'react-router-dom';
import { Button, Typography,TextField } from '@mui/material';
import './employees.css';
import PersonIcon from '@mui/icons-material/Person';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlightIcon from '@mui/icons-material/Flight';
import PhoneIcon from '@mui/icons-material/Phone';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import BookIcon from '@mui/icons-material/Book';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreateIcon from '@mui/icons-material/Create';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
import './employees.css';
function EmployeeDetail() {
  return (
      <div >
          <div className="tabs" style={{marginTop:'10px', color:'white'}} >
              <div className='tab'>
                  <Link to='/BasicInformation' style={{textDecoration:'none'}}>
                  <Button variant='contained' color='primary'
                      startIcon={<PersonIcon color='grey'/>}
                      style={{ width: '200px', padding: '10px',justifyContent: "flex-start" }}
                      
                  >
                      <Typography  variant='Button'>
                          Basic Information
                      </Typography>
                      </Button>
                      </Link>
              </div>
              <div className='tab'>
                  <Link to='/immigration' style={{textDecoration:'none'}}>
                  <Button variant='contained' color='primary'
                      startIcon={<FlightIcon color='grey'/>}
                      style={{ width: '200px', padding: '10px',justifyContent: "flex-start" }}
              
                  >
                     <Typography  variant='Button'>
                          Immigration
                     </Typography>
                      </Button>
                      </Link>
              </div>
              <div className='tab'>
                  <Link to='/contract' style={{textDecoration:'none'}}>
                  <Button variant='contained' color='primary'
                      startIcon={<PhoneIcon color='grey'/>}
                      style={{ width: '200px', padding: '10px',justifyContent: "flex-start" }}
                 
                  >
                      <Typography  variant='Button'>
                           Contract
                      </Typography>
                      </Button>
                      </Link>
              </div>
              <div className='tab'>
                  <Link to='/Qualification' style={{textDecoration:'none'}}>
                  <Button variant='contained'
                      startIcon={<BookIcon color='grey'/>}
                      color='primary'
                      style={{ width: '200px', padding: '10px',textAlign:'left',justifyContent: "flex-start" }}>
                      <Typography  variant='Button'>
                         Qualification
                      </Typography>
                  </Button>
                  </Link>
              </div>
              <div className='tab'>

                  <Link to='/WorkExperiance' style={{textDecoration:'none'}}>
                  <Button variant='contained' color='primary'
                      startIcon={<HourglassBottomIcon color='grey'/>}
                      style={{ width: '200px', padding: '10px',justifyContent: "flex-start" }}
                  
                  >
                    <Typography  variant='Button'> 
                          Work Experiance
                    </Typography> 
                      </Button>
                      </Link>
              </div>
              <div className='tab'>
                  <Link to='/BankAccount'  style={{textDecoration:'none'}}>
                  <Button variant='contained' color='primary'
                      startIcon={<AccountBalanceIcon color='grey' />}
                      style={{ width: '200px', padding: '10px',justifyContent: "flex-start" }}
                  
                  >
                      <Typography  variant='Button'> 
                          Bank Account
                    </Typography> 
                      </Button>
                      </Link>
              </div>
              <div className='tab'>
                  <Link to='/EmmergencyContact'  style={{textDecoration:'none'}}>
                  <Button variant='contained' color='primary'
                      startIcon={<CreateIcon color='grey'/>}
                      style={{ width: '200px', padding: '10px',justifyContent: "flex-start" }}
                 
                  >
                    <Typography  variant='Button'>
                          Contact
                    </Typography>
                      </Button>
                      
                      </Link>
              </div>
              <div className='tab'>
                  <Link to='/Leave'  style={{textDecoration:'none'}}>
                  <Button variant='contained' color='primary'
                      startIcon={<FreeBreakfastIcon color='grey'/>}
                      style={{ width: '200px', padding: '10px',justifyContent: "flex-start" }}
                  
                  >
                    <Typography  variant='Button'>
                          Leave
                    </Typography>       
                      </Button>
                      </Link>
              </div>
              <div className='tab'>
                  <Link to='/Shift'  style={{textDecoration:'none'}}>
                  <Button variant='contained' color='primary'
                      startIcon={<QueryBuilderIcon color='grey'/>}
                      style={{ width: '200px', padding: '10px',justifyContent: "flex-start" }}
                 
                  >
                    <Typography  variant='Button'>
                         Shift 
                    </Typography>
                      </Button>
                      </Link>
              </div>
          </div>
     
              
      

    </div>
  )
}

export default EmployeeDetail