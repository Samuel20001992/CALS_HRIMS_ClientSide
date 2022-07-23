import { combineReducers } from 'redux';
import organizationsReducer from './organization.reducer';
import departmentsReducer from './department.reducer';
import basicInformationsReducer from './basicInformation.reducer';
import bankAccountReducer from './bankAccount.reducer';
import contractReducer from './contract.reducer';
import emmergencyContactReducer from './emergencyContact.reducer';
import immigrationReducer from './immigration.reducer';
import leaveReducer from './leave.reducer';
import qualificationReducer from './qualification.reducer';
import shiftReducer from './shift.reducer';
import workExperianceReducer from './workExperiance.reducer';
import announcementReducer from './announcement.reducer';
export const reducers = combineReducers({
    organizationsReducer,
    departmentsReducer,
    basicInformationsReducer,
    bankAccountReducer,
    contractReducer,
    emmergencyContactReducer,
    immigrationReducer,
    leaveReducer,
    qualificationReducer,
    shiftReducer,
    workExperianceReducer,
    announcementReducer
});
