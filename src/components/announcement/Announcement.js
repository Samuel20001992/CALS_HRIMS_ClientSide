import React, {useState, useEffect} from 'react'
import Header from '../../Header'
import { FormLabel } from '@material-ui/core'
import { Button, CardHeader, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { createAnnouncement, getAnnouncements,updateAnnouncement} from '../../actions/announcement.action';
import Tables from '../tables/Tables';
import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function Announcement() {
const [showDot, setShowDot] = React.useState(true);
  const dispatch = useDispatch();
  
  const [currentId, setCurrentId] = useState(0);
  
  useEffect(() => {
    dispatch(getAnnouncements());
  }, [currentId, dispatch]);
  
  const announce = useSelector((state) => (currentId ? state.announcementReducer.find((message) => message._id === currentId) : null));
  const [announceData, setAnnounceData] = useState({
    title: '',
    start_date:'',
    end_date:'' ,
    company: '',
    location: '',
    department: '',
    description: '',
    summary: '' });
  const clear = () => {
    setCurrentId(0);
    setAnnounceData({
    title: '',
    start_date: '',
    end_date: '',
    company: '',
    location: '',
    department: '',
    description: '',
    summary: ''});
  }; 
  const announcementRows = useSelector((state) => state.announcementReducer);

  const head = ['Title', 'Start Date', 'End Date', 'Company', 'Location','Department', 'View'];
  
  useEffect(() => {
    dispatch(getAnnouncements())
  }, []);

   useEffect(() => {
    if (announce) setAnnounceData(announce);
   }, [announce]);
  
  
  const handleSubmit = async (e) => {
      e.preventDefault();
    console.log(announceData);
if (currentId === 0) {
      dispatch(createAnnouncement(announceData));
      clear();
    } else {
      dispatch(updateAnnouncement(currentId, announceData));
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
              width: '700px',
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
                      
                    }} variant='subtitle'>{currentId ? `Editing "${announce.name}"` : 'Add Announcement'}</Typography>
                  </div>
                  <TextField style={{ marginLeft: '30px', marginBottom:'10px', width:'300px'}} name="title" variant="outlined" label="Title" value={announceData.title} onChange={(e)=> setAnnounceData({...announceData, title: e.target.value})} fullWidth  />
                  <TextField style={{ marginLeft: '30px', width: '300px', marginBottom: '10px' }} name="company" variant="outlined" label="Company" fullWidth value={announceData.company} onChange={(e) => setAnnounceData({ ...announceData, company: e.target.value })} />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>    
                      <DesktopDatePicker
                        label="Start Date"
                        value={announceData.start_date}
                        onChange={(newValue) => {
                          setAnnounceData({ ...announceData, start_date: newValue })
                        }}
                        renderInput={(params) => <TextField {...params} style={{ marginLeft: '30px', width: '300px', marginBottom: '10px' }}/>}
                      />
                      <DesktopDatePicker
                        label="End Date"
                        value={announceData.end_date}
                        onChange={(newValue) => {
                          setAnnounceData({ ...announceData, end_date: newValue })
                        }}
                      renderInput={(params) => <TextField {...params} style={{ marginLeft: '30px', width: '300px', marginBottom: '10px' }}/>}
                      />
                  </LocalizationProvider> 
                  <TextField style={{ marginLeft: '30px', width: '300px', marginBottom: '10px' }} name="location" variant="outlined" label="Location" fullWidth value={announceData.location} onChange={(e)=> setAnnounceData({...announceData, location: e.target.value})}/>
                  <TextField style={{ marginLeft: '30px', width: '300px', marginBottom: '10px' }} name="department" variant="outlined" label="Department" fullWidth value={announceData.department} onChange={(e) => setAnnounceData({ ...announceData, department: e.target.value })} />
                  <TextField style={{ marginLeft: '30px', width: '300px', marginBottom: '10px' }} name="description" variant="outlined" label="Description" fullWidth value={announceData.description} onChange={(e)=> setAnnounceData({...announceData, description: e.target.value})}/>
                  <TextField style={{ marginLeft: '30px', width: '300px', marginBottom: '10px' }} name="summary" variant="outlined" label="Summary" fullWidth value={announceData.summary} onChange={(e) => setAnnounceData({ ...announceData, summary: e.target.value })} />
              
                  <Button style={{ margin: '0px 30px',marginLeft:'75px', width: '240px', marginBottom: '10px' }} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                  <Button style={{ margin:'0px 30px', width:'240px', marginBottom:'10px'}} variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
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
                      
                    }} variant='subtitle'>Announcement List</Typography>
                    
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
              <Tables rows={announcementRows} heads={head} currentId={currentId} setCurrentId={setCurrentId} type='announce' showDot={showDot} setShowDot={setShowDot} />
            </Box>
          </div>
        </center>
      </div>
    </div>
  )
}

export default Announcement