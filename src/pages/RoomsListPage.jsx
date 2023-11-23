import { Header } from "../components/Header";
import { DataTableRooms } from "../components/DataTableRooms";
import rooms from "../data/rooms.json";
import { TableHead, TableBody, TableRow, MenuItem} from "@mui/material";
import { StyledTable, StyledTableCellRow, StyledTableContainer } from "../styled/StyledTable";
import { StyledBody } from "../styled/StyledBody";
import { useState } from "react";
import { StyledNav, StyledNavText } from "../styled/StyledNav";
import { StyledFormControl, StyledInputLabel, StyledSelect } from "../styled/StyledSelect";
import { StyledPagination, StyledPaginationText , StyledButtonPage, StyledTextPage} from "../styled/StyledPagination";
import { StyledButton } from "../styled/StyledButton";

export const RoomsListPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header setIsOpen={setIsOpen} title="Room List"></Header>
      <StyledBody isOpen={isOpen}>

      <div style={{display: 'flex', }}>
      <StyledNav>
          <StyledNavText>All Bookings</StyledNavText>
          <StyledNavText>Available</StyledNavText>
          <StyledNavText>Booked</StyledNavText>
          <StyledNavText name="last">Price</StyledNavText>
        </StyledNav>
        <StyledFormControl>
        <StyledInputLabel>Order</StyledInputLabel>
        <StyledSelect label="Order"  >
                <MenuItem value="available" >Available</MenuItem>
                <MenuItem value="booked">Booked</MenuItem>
                <MenuItem value="price">Price</MenuItem>
        </StyledSelect>
        </StyledFormControl>
      </div>
      <StyledTableContainer isOpen={isOpen}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCellRow >Room Name</StyledTableCellRow>
              <StyledTableCellRow>Bed Type</StyledTableCellRow>
              <StyledTableCellRow>Facilities</StyledTableCellRow>
              <StyledTableCellRow>Price</StyledTableCellRow>
              <StyledTableCellRow>Offer Price</StyledTableCellRow>
              <StyledTableCellRow>Status</StyledTableCellRow>
              <StyledTableCellRow></StyledTableCellRow>
            </TableRow>
          </TableHead>
          <TableBody>
            <DataTableRooms data={rooms}></DataTableRooms>
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
      </StyledBody>
    </>
  );
};
