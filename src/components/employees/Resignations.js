import React, {useState, useEffect} from 'react'
import Header from '../../Header';
import Tables from '../tables/Tables';
import { useDispatch, useSelector } from 'react-redux';
import { createOrganization, getOrganizations, updateOrganization } from '../../actions/organizations';
import { Button, CardHeader, TextField } from '@mui/material';
import { FormLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './employees.css';
function Resignations() {
const [showDot, setShowDot] = React.useState(true);


  const [currentId, setCurrentId] = useState(0);
  
  const organizationRows = useSelector((state) => state.organizations);

  const head = ['Name','CEO','President','Vice President', 'Image','Action'];


      const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrganizations());
  }, [currentId, dispatch]);
  
  const org = useSelector((state) => (currentId ? state.organizations.find((message) => message._id === currentId) : null));

  const clear = () => {
    setCurrentId(0);
    setOrgData({ name: '', ceo: '', president: '', vice_president: '', image: '' });
  };

  const [orgData, setOrgData] = useState({ name: '', ceo: '', president: '', vice_president: '', image: '' });




   useEffect(() => {
    if (org) setOrgData(org);
   }, [org]);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
if (currentId === 0) {
      dispatch(createOrganization(orgData));
      clear();
    } else {
      dispatch(updateOrganization(currentId, orgData));
      clear();
    }
    
  };

  return (
    <div>
      
      <Header />
      <div className="page">Award</div>
          <div className="path">
                  <Link className='links' to=''>Home/</Link>
                  <Link className='links' to=''>Employee/</Link>
                  Award/ </div>
     <div>
        {showDot ? null : 
            <div
    style={{border: '1px solid black',
    width: '900px',
    margin: '20px',
    marginLeft:'310px',
    boxShadow:'5px 10px 15px #888888',
    }}
      >

        <form autoComplete="off" noValidate style={{paddingTop: '20px'}} onSubmit={handleSubmit}>
          <FormLabel style={{ marginLeft: '30px',marginBottom: '20px',marginTop:'40px' ,fontSize:'25px', color:'#1976d2'}}>{currentId ? `Updating "${orgData.name}"`: 'Add Organization'}</FormLabel><br/><br/>
                <TextField style={{ marginLeft: '30px', marginBottom:'10px', width:'400px'}} name="name" variant="outlined" label="Name" value={orgData.name} onChange={(e)=> setOrgData({...orgData, name: e.target.value})} fullWidth  />
                <TextField style={{ marginLeft:'30px', width:'400px', marginBottom:'10px'}} name="ceo" variant="outlined" label="CEO" fullWidth  value={orgData.ceo} onChange={(e)=> setOrgData({...orgData, ceo: e.target.value})}/>
                <TextField style={{ marginLeft: '30px', width: '400px', marginBottom: '10px' }} name="president" variant="outlined" label="President" fullWidth value={orgData.president} onChange={(e)=> setOrgData({...orgData, president: e.target.value})}/>
                <TextField style={{ marginLeft: '30px', marginBottom:'10px', width:'400px'}} name="vice_president" variant="outlined" label="Vice President" fullWidth  value={orgData.vice_president} onChange={(e)=> setOrgData({...orgData, vice_president: e.target.value})}/>
                <TextField style={{ marginLeft:'30px', width:'400px', marginBottom:'20px'}} name="image" variant="outlined" label="Image" fullWidth value={orgData.image} onChange={(e)=> setOrgData({...orgData, image:e.target.value})} />
              {/*     <div ><FileBase type="file" multiple={false}  /></div> */}
                 <br/>
                <Button style={{ marginLeft:'30px', width:'400px' , marginBottom:'10px'}}  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button style={{ marginLeft:'30px', width:'400px', marginBottom:'10px'}} variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
        </form>
      </div>
        
        }
      <center >
          <Button type="submit" style={{ marginLeft: '30px', width: '400px', marginTop: '30px' }}
            fullWidth variant="contained" color="primary" size="large" onClick={(e) => { showDot ? setShowDot(false) : setShowDot(true) }}>
            {showDot ? 'Add Organization'  : 'Cancel'}</Button>
       

      <div style={{
        marginTop: '90px', width:'1000px'}} >
       
            <Tables rows={organizationRows} heads={head} currentId={currentId} setCurrentId={setCurrentId} type='org' showDot={showDot} setShowDot={setShowDot}/>
        
          </div>
           </center>


    </div>
    </div>
  )
}

export default Resignations