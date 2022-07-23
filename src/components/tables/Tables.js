import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Button, Divider } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import EditIcon from '@mui/icons-material/Edit';
import SearchBar from "material-ui-search-bar";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { createOrganization, getOrganizations, updateOrganization } from '../../actions/organization.action';
import { createBasicInformation, getBasicInformations, updateBasicInformation } from '../../actions/basicInformation.action';
import { deleteOrganization } from '../../api/organization.api';
import { deleteDepartment } from '../../api/department.api';
import { deleteBasicInformation } from '../../api/basicInformation.api';
import { deleteBankAccount } from '../../api/bankAccount.api';
import { deleteImmigration } from '../../api/immigration.api';
import { deleteContract } from '../../api/contract.api';
import { deleteQualification } from '../../actions/qualification.action';
import { Typography } from '@mui/material';
import { deleteAnnouncement } from '../../actions/announcement.action';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function TablePaginationActions(props) {
  const dispatch = useDispatch();



    useEffect(() => {
    dispatch(getOrganizations());
    }, [props.showDot, dispatch]);
  
  useEffect(() => {
    dispatch(getBasicInformations());
    }, [props.showDot, dispatch]);
  
  
  
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export default function Tables(props) {

 const getParsedDate = (strDate)=> {
    var strSplitDate = String(strDate).split(' ');
    var date = new Date(strSplitDate[0]);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date =  mm + "-" + dd + "-" + yyyy;
    return date.toString();
}

  const [data, setData] = useState({});
  
const [open, setOpen] = React.useState(false);
  const handleOpen = (row) => {
    setOpen(true);
    setData(row)
  };
  const handleClose = () => setOpen(false);

  const cells = (row) =>{
         switch (props.type) {
                          
            case 'org':
             return (<><StyledTableCell style={{ minWidth: '100px' }} align="left">{row.name}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '100px' }} align="left">{row.ceo}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '100px' }} align="left">{row.president}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '100px' }} align="left">{row.vice_president}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '100px' }} align="left">{row.image}</StyledTableCell></>);         
             break;
           case 'emp':
             <StyledTableCell style={{ minWidth: '100px' }} align="left">
               <Button onClick={(e) => { props.setCurrentId(row._id) }}
                 variant='contained' color='primary'>
                 Detail
               </Button>
             </StyledTableCell>
             break;
           case 'basic':
             return (<>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.employeeID}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.firstName}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.middleName}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.lastName}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.gender}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.dateofBirth}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.email}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.designation}</StyledTableCell>
              
             </>);
             break;
           case 'dep':
             return (<><StyledTableCell style={{ minWidth: '100px' }} align="left">{row.name}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '100px' }} align="left">{row.head}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '100px' }} align="left">{row.org}</StyledTableCell></>);
             break;
           case 'bank':
             return (<>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.employeeID}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.accountType}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.bankName}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.accountNumber}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.bankCode}</StyledTableCell>
             </>);
             break;
           case 'imm':
             return (<>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.employeeID}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.documnet}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.documentNumber}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.issueDate}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.expiryDate}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.eligibleReviewDate}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.country}</StyledTableCell>
             </>);
             break;
           case 'cont':
             return (<>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.employeeID}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.contractType}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.contractTitle}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.from}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.to}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.designation}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.description}</StyledTableCell>
             </>);
             break;
           case 'qual':
             return (<>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.employeeID}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.university}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.education_level}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.from}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.to}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.field}</StyledTableCell>
             </>);
             break;
           case 'work':
             return (<>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.employeeID}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.company_name}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.position}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.from}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.to}</StyledTableCell>
             </>);
             break;
            case 'emm':
             return (<>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.employeeID}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.firstName}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.middleName}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.lastName}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.relation}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.email}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.address}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.contactNumber}</StyledTableCell>
             </>);
             break;
           case 'lea':
             return (<>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.employeeID}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.leaveType}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.from}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.to}</StyledTableCell>
             </>);
             break;
           case 'announce':
             return (<>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.title}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{getParsedDate(row.start_date)}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{getParsedDate(row.end_date)}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.company}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.location}</StyledTableCell>
               <StyledTableCell style={{ minWidth: '80px' }} align="left">{row.department}</StyledTableCell>
               
             </>);
             break;
          default:
            console.log('not found');
        }
  }
    const del = (id) => {
        switch (props.type) {
          case 'org': dispatch(deleteOrganization(id));
            this.forceUpdate();
                break;
            case 'dep': dispatch(deleteDepartment(id));
                break;
           case 'basic': dispatch(deleteBasicInformation(id));
            break;
          case 'bank': dispatch(deleteBankAccount(id));
            break;
          case 'imm': dispatch(deleteImmigration(id));
            break;
          case 'cont': dispatch(deleteContract(id));
            break;
          case 'qual': dispatch(deleteQualification(id));
            break;
          case 'announce': dispatch(deleteAnnouncement(id));
            default:
                break;
        }
        
        window.location.reload(false);
}
const dispatch = useDispatch();

      const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

   const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const modal = (row) => {
    switch (props.type) {
      case 'org': 
           
                break;
            case 'dep': 
                break;
           case 'basic': 
            break;
          case 'bank': 
            break;
          case 'imm': 
            break;
          case 'cont': 
            break;
          case 'qual': 
            break;
      case 'announce': 
        return (
            <div>
          <div style={{float:'left', width:"300px"}}>
            <Typography>Title: {data.title}</Typography>
            <Typography>Start Date: {getParsedDate(data.start_date)}</Typography>
            <Typography>{getParsedDate(data.end_date)}</Typography>
            <Typography>{data.company}</Typography>
            <Typography>{data.loation}</Typography>
            <Typography>{data.department}</Typography>
            <Typography>{data.summary}</Typography>
          </div>
          <div style={{float:'right', width:"300px"}}>
              {data.description}
            </div>
            </div>
        )
            default:
                break;

   }
 }

  

  return (
    <center>
      <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{width:'600px'}}
      >
        <Box sx={style}>
          {modal()}
        </Box>
      </Modal>
      </div>
        <div >
          <FormControl style={{ margin: 10,marginLeft:300, minWidth: 120, float:'left' }} >
            <InputLabel id="demo-simple-select-helper-label">Search By</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Search By"
              onChange={handleChange}
          >
            {props.heads.map((head) => (
                  
            <MenuItem value={head}>{head}</MenuItem>
        ))}
            
            </Select>
          </FormControl>
        </div>
        <SearchBar
              style={{  width:'40vw',border:'0.3px solid lightGrey', float:'right', margin:'10px',marginRight:'22px'}}
              // value={this.state.value}
              // onChange={(newValue) => this.setState({ value: newValue })}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
  <TableContainer component={Paper}
       
  sx={{
    "&::-webkit-scrollbar": {
	  width: 20
    },
    "&::-webkit-scrollbar-track": {
	  backgroundColor: "orange"
    },
    "&::-webkit-scrollbar-thumb": {
	  backgroundColor: "black",
	  borderRadius: 2
    }
      }}
      style={{width:'77vw', minWidth:'325px',margin:'10px'}}
>
    <Table  aria-label="customized table" >
        <TableHead style={{minWidth:'300px'}}>
          <TableRow style={{backgroundColor :'#3f51b5'}}>
              {props.heads.map((head) => (
                  
            <StyledTableCell>{head}</StyledTableCell>
              ))}
               <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>

          <TableBody>
           
          {(rowsPerPage > 0
            ? props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : props.rows
                  ).map((row) => (
                    <StyledTableRow key={row.id}>
                      {cells(row)}
                        <StyledTableCell style={{ minWidth: '80px' }} align="left"
                        onClick={(e)=>{
                          handleOpen(row)
                        }
                        }
                        ><VisibilityIcon /></StyledTableCell>     
                      <StyledTableCell align="left">  
                        <EditIcon onClick={(e) => {
                          props.setCurrentId(row._id);
                          { props.showDot ? props.setShowDot(false) : props.setShowDot(true) };
                        }} style={{ marginRight: '15px' }} />
                      <DeleteIcon onClick={() => del(row._id)} />
                  </StyledTableCell>
            </StyledTableRow>
          ))}
           <Divider/>
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={11}
              count={props.rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
        </TableContainer>
      </center>
              );
      }