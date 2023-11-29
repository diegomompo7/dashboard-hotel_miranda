import { DataTableGuest } from "./DataTableGuest";
import booking from "../../data/booking.json";
import { TableHead, TableBody, TableRow, MenuItem } from "@mui/material";
import { StyledTable, StyledTableCellRow, StyledTableContainer } from "../common/StyledTable";
import { useState } from "react";
import { StyledNav, StyledNavText } from "../common/StyledNav";
import { StyledTextField } from "../common/StyledTextField";
import { StyledFormControl, StyledInputLabel, StyledSelect } from "../common/StyledSelect";
import { StyledPagination, StyledPaginationText , StyledButtonPage, StyledTextPage} from "../common/StyledPagination";
import { StyledButton } from "../common/StyledButton";
import { ModalComponent } from "../ModalComponent/ModalComponent";

export const GuestsPage = () => {

  const [isOpen] = useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [specialRequest, setSpecialRequest] = useState("")

  console.log(open)

  return (
    <>

    <ModalComponent open={open} handleClose={handleClose} description={specialRequest}></ModalComponent>

      <div style={{display: 'flex'}}>
      <StyledNav>
          <StyledNavText>All Bookings</StyledNavText>
          <StyledNavText>Checking In</StyledNavText>
          <StyledNavText>Checking Out</StyledNavText>
          <StyledNavText name="last">In Progress</StyledNavText>
        </StyledNav>
        <StyledTextField label="Client"/>
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
            <DataTableGuest data={booking} handleOpen={handleOpen} setSpecialRequest={setSpecialRequest}></DataTableGuest>
          </TableBody>
        </StyledTable>
        </StyledTableContainer>
        <StyledPagination>
          <StyledPaginationText> Showing 1 of 5 Data</StyledPaginationText>
          <StyledButtonPage>
              <StyledButton name="Prev">Prev</StyledButton>
              <StyledTextPage>1</StyledTextPage>
              <StyledTextPage>2</StyledTextPage>
              <StyledTextPage >3</StyledTextPage>
              <StyledTextPage>4</StyledTextPage>
              <StyledButton  name="Next">Next</StyledButton>
          </StyledButtonPage>
        </StyledPagination>
    </>
  );
};
