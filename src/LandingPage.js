import React from 'react'
import { Toolbar } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import Grid from '';
function LandingPage() {
  return (
      <div>
        {/* <AppBar style={{backgroundColor:'white', display:'d-flex'}}>
          
                 <Container>
                      <Toolbar style={{left:0}} >
                    <Typography style={{ color: 'black', float:'left' }} variant='h6'>x-hub</Typography>
                           <div>
                                
                                <SideBar/>
                 </div>      
            <Link to='/Home' style={{textDecoration:'none'}}>     
                 <Typography variant='p' style={{color:'black', marginLeft:'800px'}}>Home</Typography> 
            </Link>   
            <Link to='/About' style={{textDecoration:'none'}}>  
                 <Typography variant='p' style={{ color: 'black', marginLeft: '20px' }}>About</Typography>      
            </Link>  
            <Link to='/Testimonial' style={{textDecoration:'none'}}>  
                 <Typography variant='p' style={{ color: 'black', marginLeft: '20px' }}>Testimonial</Typography> 
            </Link>  
            <Link to='/What' style={{textDecoration:'none'}}>  
                 <Typography variant='p' style={{ color: 'black', marginLeft: '20px' }}>What we do</Typography> 
            </Link>
            <Link to='/What' style={{textDecoration:'none'}}>  
                 <Typography variant='p' style={{ color: 'black', marginLeft: '20px' }}></Typography> 
            </Link>
                      
           </Toolbar>
          </Container>
        </AppBar> */}
            <div style={{display:''}} >
               {/* <Typography style={{ color: 'black', float:'left', margin:'25px' }} variant='h6'>x-hub</Typography>
                
                 <SideBar style={{ width: '10px', float:'left'}} />
                 <div style={{ top:'0'}}>
                    <Typography style={{ color: 'black', margin:'25px' }} variant='h6'>x-hub</Typography>
                    <Typography style={{ color: 'black', margin:'25px' }} variant='h6'>x-hub</Typography>
                    <Typography style={{ color: 'black', margin:'25px' }} variant='h6'>x-hub</Typography>
                    <Typography style={{ color: 'black', margin:'25px' }} variant='h6'>x-hub</Typography>
                    <Typography style={{ color: 'black', margin:'25px' }} variant='h6'>x-hub</Typography>
                    <Typography style={{ color: 'black', margin:'25px' }} variant='h6'>x-hub</Typography>
                      </div> */}
                
                 <Grid></Grid>
                  
            </div>
    </div>
  )
}

export default LandingPage