import {
  Route,
  Routes
} from 'react-router-dom';
import LandingPage from './LandingPage';
import Home from './Home';
import Department from './components/organization/Department';
import Components from './Header';
import Tables from './components/tables/Tables';
import Organization from './components/organization/Organization';
import Employee from './components/employees/Employee';
import EmployeeRecord from './components/employees/EmployeeRecord';
import EmployeeRecordUpdate from './components/employees/EmployeeRecordUpdate';
import BankAccount from './components/employees/detailComponent/BankAccount';
import BasicInformation from './components/employees/detailComponent/BasicInformation';
import Contract from './components/employees/detailComponent/Contract';
import EmmergencyContact from './components/employees/detailComponent/EmmergencyContacts';
import Immigration from './components/employees/detailComponent/Immigration';
import Leave from './components/employees/detailComponent/Leave';
import Qualificaition from './components/employees/detailComponent/Qualification';
import Shift from './components/employees/detailComponent/Shift';
import WorkExperiance from './components/employees/detailComponent/WorkExperiance';
import Announcement from './components/announcement/Announcement';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/Organization' element={<Organization />}></Route>
        <Route path='/Department' element={<Department />}></Route>
        <Route path='/Employee' element={<Employee />}></Route>
        <Route path='/EmployeeRecordUpdate' element={<EmployeeRecordUpdate />}></Route>
        <Route path='/BankAccount' element= {<BankAccount/>}></Route>
        <Route path='/BasicInformation' element= {<BasicInformation/>}></Route>
       <Route path='/Immigration' element= {<Immigration/>}></Route>
        <Route path='/Contract' element={<Contract />}></Route>
         <Route path='/Qualification' element= {<Qualificaition/>}></Route>
         <Route path='/EmmergencyContact' element= {<EmmergencyContact/>}></Route>
         <Route path='/Leave' element= {<Leave/>}></Route>
        <Route path='/Shift' element= {<Shift/>}></Route>
        <Route path='/WorkExperiance' element={<WorkExperiance />}></Route>
        <Route path='/Announcement' element= {<Announcement/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
