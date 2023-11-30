import { DataTableGuest } from "./DataTableGuest";
import booking from "../../data/booking.json";
import { TableHead, TableBody, TableRow, MenuItem } from "@mui/material";
import { StyledTable, StyledTableCellRow, StyledTableContainer } from "../common/StyledTable";
import { useEffect, useState } from "react";
import { StyledNav, StyledNavText } from "../common/StyledNav";
import { StyledTextField } from "../common/StyledTextField";
import { StyledFormControl, StyledInputLabel, StyledSelect } from "../common/StyledSelect";
import { StyledPagination, StyledPaginationText , StyledButtonPage, StyledTextPage} from "../common/StyledPagination";
import { StyledButton } from "../common/StyledButton";
import { ModalComponent } from "../ModalComponent/ModalComponent";
import { useDispatch, useSelector } from "react-redux";

import { getBookingsData, getBookingsDataInProgress, getBookingsError, getBookingsStatus, getClient, getSelect } from "../../features/bookings/bookingsSlice";
import { getBookingsFromApiTrunk } from "../../features/bookings/bookingsTrunk";

export const GuestsPage = () => {

  const [isOpen] = useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [specialRequest, setSpecialRequest] = useState("")

  const dispatch = useDispatch()
  const bookingsListData = useSelector(getBookingsData)
  const bookingsListError = useSelector(getBookingsError)
  const bookingsListStatus = useSelector(getBookingsStatus)
  const [spinner, setSpinner] = useState(true);

  const bookingListInProgress= useSelector(getBookingsDataInProgress)

  const [currentView, setCurrentView] = useState("all");

  const [numberPage, setNumberPage] = useState([0, 10])
  const [currentPage, setCurrentPage] = useState(1);

  console.log(currentPage)

  console.log(open)

  useEffect(
    () => {

      if (bookingsListStatus === "idle") {
        dispatch(getBookingsFromApiTrunk());
      } else if (bookingsListStatus === "pending") {
        setSpinner(true);
      } else if (bookingsListStatus === "fulfilled") {
        setSpinner(false)
      }
    },[
    dispatch,
    bookingsListData,
    bookingsListStatus]
  );

  const handleClick = (click) => {

    setCurrentView(click)

    numberPage[0] = 0
    numberPage[1] = 10
    setCurrentPage(1)
  }

  const handleOnChange = (e) => {
    dispatch(getClient(e.target.value))
  }


  const currentBookingsListData = 
  currentView ==="checkIn" ? 
    [...bookingsListData].sort((a,b) => new Date(b.check_in) - new Date(a.check_in)) :
    currentView ==="checkOut" ? 
    [...bookingsListData].sort((a,b) => new Date(b.check_out) - new Date(a.check_out)) :
    currentView ==="inProgress" ? 
    bookingListInProgress.sort((a,b) => new Date(b.orderDate) - new Date(a.orderDate)) :
    [...bookingsListData].sort((a,b) => new Date(b.orderDate) - new Date(a.orderDate))

  return (
    <>

    { currentBookingsListData !== undefined &&
    <>

    <ModalComponent open={open} handleClose={handleClose} description={specialRequest}></ModalComponent>

      <div style={{display: 'flex'}}>
      <StyledNav>
          <StyledNavText onClick={() =>handleClick("all")} isActive={currentView === "all"}>All Bookings</StyledNavText>
          <StyledNavText onClick={() =>handleClick("checkIn")} isActive={currentView === "checkIn"}>Checking In</StyledNavText>
          <StyledNavText onClick={() =>handleClick("checkOut")} isActive={currentView === "checkOut"}>Checking Out</StyledNavText>
          <StyledNavText onClick={() =>handleClick("inProgress")} isActive={currentView === "inProgress"}>In Progress</StyledNavText>
        </StyledNav>
        <StyledTextField label="Client" onChange={(e) => handleOnChange(e)}/>
        <StyledFormControl>
        <StyledInputLabel>Order</StyledInputLabel>
        <StyledSelect label="Order"  >
                <MenuItem value="guest" >Guest</MenuItem>
                <MenuItem value="orderDate">Order Date</MenuItem>
                <MenuItem value="checkIn">Check In</MenuItem>
                <MenuItem value="CheckOut">Check Out</MenuItem>

        </StyledSelect>
        </StyledFormControl>
      </div>
      <StyledTableContainer isOpen={isOpen}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCellRow >Guest</StyledTableCellRow>
              <StyledTableCellRow>OrderDate</StyledTableCellRow>
              <StyledTableCellRow>Check In</StyledTableCellRow>
              <StyledTableCellRow>Check Out</StyledTableCellRow>
              <StyledTableCellRow>Special Request</StyledTableCellRow>
              <StyledTableCellRow>Room Type</StyledTableCellRow>
              <StyledTableCellRow>Status</StyledTableCellRow>
              <StyledTableCellRow></StyledTableCellRow>
            </TableRow>
          </TableHead>
          <TableBody>
          {spinner ? <p>Loading...</p> : 
            <DataTableGuest data={currentBookingsListData} numberPage={numberPage}handleOpen={handleOpen} setSpecialRequest={setSpecialRequest}></DataTableGuest>
          }
          </TableBody>
        </StyledTable>
        </StyledTableContainer>
        <StyledPagination>
          <StyledPaginationText> Showing {currentBookingsListData.length !== 0 ? numberPage[0]+1 : numberPage[0]} of { currentBookingsListData.length >= numberPage[1] ? numberPage[1] : currentBookingsListData.length} data</StyledPaginationText>
          <StyledButtonPage>
              <StyledButton name="Prev" disabled={numberPage[0] === 1} onClick={() => {
                numberPage[0] -= 10
                numberPage[1] -= 10
                setCurrentPage(next => next - 1) }}>Prev</StyledButton>
              {
                Array.from({length: Math.ceil((currentBookingsListData.length / 10))}, (_, i) => (
                    <StyledTextPage key={i} isCurrentPage={i+1 === currentPage}>{i+1}</StyledTextPage>
                ))
              }
              <StyledButton  name="Next"  disabled={numberPage[1] >= currentBookingsListData.length} onClick={() => {
                numberPage[0] += 10
                numberPage[1] += 10
                setCurrentPage(next => next + 1)
              }}>Next</StyledButton>
          </StyledButtonPage>
        </StyledPagination>
        </>
}
    </>
  );
};
