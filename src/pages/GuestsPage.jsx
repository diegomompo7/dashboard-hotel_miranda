import { Header } from "../components/Header";
import { DataTableGuest } from "../components/DataTableGuest";
import booking from "../data/booking.json";
import { TableHead, TableBody, TableRow } from "@mui/material";
import { StyledTable, StyledTableCellRow } from "../styled/StyledTable";
import { StyledBody } from "../styled/StyledBody";
import { useState } from "react";
import { StyledNav, StyledNavText } from "../styled/StyledNav";
import { StyledTextField } from "../styled/StyledTextField";
import { StyledFormControl, StyledInputLabel, StyledSelect } from "../styled/StyledSelect";
import {MenuItem} from "@mui/material";
import { StyledPagination, StyledPaginationText , StyledButtonPage, StyledTextPage} from "../styled/StyledPagination";
import { StyledButton } from "../styled/StyledButton";

export const GuestsPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header setIsOpen={setIsOpen} title="Guest List"></Header>
      <StyledBody isOpen={isOpen}>

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
            <DataTableGuest data={booking}></DataTableGuest>
          </TableBody>
        </StyledTable>
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
      </StyledBody>
    </>
  );
};
