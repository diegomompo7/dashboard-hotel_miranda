
import { DataTableUsers } from "./DataTableUsers";
import users from "../data/users.json";
import { TableHead, TableBody, TableRow, MenuItem } from "@mui/material";
import { StyledTable, StyledTableCellRow, StyledTableContainer} from "../common/StyledTable";
import { useEffect, useState } from "react";
import { StyledNav, StyledNavText } from "../common/StyledNav";
import { StyledTextField } from "../common/StyledTextField";
import { StyledFormControl, StyledInputLabel, StyledSelect } from "../common/StyledSelect";
import { StyledPagination, StyledPaginationText , StyledButtonPage, StyledTextPage} from "../common/StyledPagination";
import { StyledButton } from "../common/StyledButton";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersData,
  getUsersError,
  getUsersStatus,
  getAll,
  getActive,
  getInactive,
  getEmployee
} from "../features/users/usersSlice";
import { getUsersFromApiTrunk } from "../features/users/usersTrunk";


export const UserPage = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const dispatch = useDispatch();
  const usersListData = useSelector(getUsersData);
  const usersListError = useSelector(getUsersError);
  const usersListStatus = useSelector(getUsersStatus);
  const [spinner, setSpinner] = useState(true);

  let viewTable = useSelector((state) => state.users.viewTable);
  const [currentView, setCurrentView] = useState("all");

  const [numberPage, setNumberPage] = useState([1, 10])
  const [currentPage, setCurrentPage] = useState(1);

  console.log(currentPage)

  useEffect(
    () => {

      if (usersListStatus === "idle") {
        dispatch(getUsersFromApiTrunk());
      } else if (usersListStatus === "pending") {
        setSpinner(true);
      } else if (usersListStatus === "fulfilled") {
        setSpinner(false)
      }
    },[
    dispatch,
    usersListData,
    usersListStatus]
  );

  const handleClick = (nav) => {

    switch(nav){
      case "all":
      dispatch(getAll())
      setCurrentView("all")
      break;
      case "active":
       dispatch(getActive())
       setCurrentView("active")
      break;
      case "inactive":
        dispatch(getInactive())
        setCurrentView("inactive")
       break;

    }
  }

  const handleOnChange = (e) => {
    dispatch(getEmployee(e.target.value))
  }

  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <StyledNav>
          <StyledNavText onClick={() => handleClick("all")} isActive={currentView === "all"}>All Employee</StyledNavText>
          <StyledNavText onClick={() => handleClick("active")} isActive={currentView === "active"}>Active Employee</StyledNavText>
          <StyledNavText onClick={() => handleClick("inactive")} isActive={currentView === "inactive"}>Inactive Employee</StyledNavText>
        </StyledNav>
        <StyledTextField label="Employee" onChange={(e) => handleOnChange(e)}/>
        <StyledButton name="create" href="/createUser">+ New Employee</StyledButton>
        <StyledFormControl>
        <StyledInputLabel>Order</StyledInputLabel>
        <StyledSelect label="Order"  >
                <MenuItem value="orderDate" >Order Date</MenuItem>
                <MenuItem value="name">Name</MenuItem>

        </StyledSelect>
        </StyledFormControl>
      </div>
      <StyledTableContainer isOpen={isOpen}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCellRow>Photo</StyledTableCellRow>
              <StyledTableCellRow>Name</StyledTableCellRow>
              <StyledTableCellRow>ID</StyledTableCellRow>
              <StyledTableCellRow>Email</StyledTableCellRow>
              <StyledTableCellRow>Start Date</StyledTableCellRow>
              <StyledTableCellRow>Description</StyledTableCellRow>
              <StyledTableCellRow>Users</StyledTableCellRow>
              <StyledTableCellRow>Status</StyledTableCellRow>
            </TableRow>
          </TableHead>
          <TableBody>
          {spinner ? <p>Loading...</p> : viewTable !== undefined ?
           <DataTableUsers data={viewTable} irstItem={numberPage[0]} lastItem={numberPage[1]} ></DataTableUsers> :
           
           <DataTableUsers data={usersListData} firstItem={numberPage[0]} lastItem={numberPage[1]}></DataTableUsers>
           
           }
          </TableBody>
        </StyledTable>
        </StyledTableContainer>
        <StyledPagination>
          <StyledPaginationText> Showing {numberPage[0]} of { usersListData.length >= numberPage[1] ? numberPage[1] : usersListData.length} data</StyledPaginationText>
          <StyledButtonPage>
              <StyledButton name="Prev" disabled={numberPage[0] === 1} onClick={() => {
                numberPage[0] -= 10
                numberPage[1] -= 10
                setCurrentPage(next => next - 1) }}>Prev</StyledButton>
              {
                Array.from({length: Math.ceil((usersListData.length / 10))}, (_, i) => (
                    <StyledTextPage key={i} isCurrentPage={i+1 === currentPage}>{i+1}</StyledTextPage>
                ))
              }
              <StyledButton  name="Next"  disabled={numberPage[1] >= usersListData.length} onClick={() => {
                numberPage[0] += 10
                numberPage[1] += 10
                setCurrentPage(next => next + 1)
              }}>Next</StyledButton>
          </StyledButtonPage>
        </StyledPagination>
    </>
  );
};
