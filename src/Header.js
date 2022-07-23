import React from 'react'
import { Divider, Toolbar } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import SideBar from './SideBar';
import { MenuItem } from '@material-ui/core';
import Image from './resources/logo.png';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cursive from './resources/font1-XHub-and-CALS.png';
import { Grid } from '@material-ui/core';
function Header() {

  
 const [anchorElUser, setAnchorElUser] = React.useState(null);
  

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const doSomethingWith = () => {
    
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12}>
      <AppBar position="static" style={{ backgroundColor: 'white' }}>
       
        <Container maxWidth="100vw">
        <Toolbar disableGutters> 
       <Grid container >
          <Grid item xs={3} lg={3} sm={3}>                       
              
              <SideBar style={{ marginLeft: '0px', padding:'20px'}} /> 
        </Grid>
        <Grid item xs={6} >
          <center><h1 style={{ fontFamily: 'Updock', color: 'black', marginTop:'10px', paddingBottom:'0px'}} className='text'>XHub and CALS</h1></center>
        </Grid>
        <Grid item xs={3}>
                  <Avatar
                    alt="Remy Sharp"
                    src="data:image/jpeg;base64,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"
                   sx={{ width: 50, height: 50 }}
                   style={{marginTop:'20px', float:'right'}}
                 />  
        </Grid>
       
            </Grid>
          </Toolbar>
        </Container>
        </AppBar>
        </Grid>
        </Grid>
    </div>
  )
}

export default Header


            