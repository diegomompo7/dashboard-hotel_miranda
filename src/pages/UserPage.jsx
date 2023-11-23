import { Header } from "../components/Header";
import { DataTableUsers } from "../components/DataTableUsers";
import users from "../data/users.json";
import { TableHead, TableBody, TableRow } from "@mui/material";
import { StyledTable, StyledTableCellRow, StyledTableContainer } from "../styled/StyledTable";
import { StyledBody } from "../styled/StyledBody";
import { useState } from "react";
import { StyledNav, StyledNavText } from "../styled/StyledNav";
import { StyledTextField } from "../styled/StyledTextField";
import { StyledFormControl, StyledInputLabel, StyledSelect } from "../styled/StyledSelect";
import {MenuItem} from "@mui/material";
import { StyledPagination, StyledPaginationText , StyledButtonPage, StyledTextPage} from "../styled/StyledPagination";
import { StyledButton } from "../styled/StyledButton";

export const UserPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header setIsOpen={setIsOpen} title="Concierge List"></Header>
      <StyledBody isOpen={isOpen}>

      <div style={{display: 'flex'}}>
      <StyledNav>
          <StyledNavText>All Employee</StyledNavText>
          <StyledNavText>Active Employee</StyledNavText>
          <StyledNavText name="last">Inactive Employee</StyledNavText>
        </StyledNav>
        <StyledTextField label="Employee"/>
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
              <StyledTableCellRow>Contact</StyledTableCellRow>
              <StyledTableCellRow>Status</StyledTableCellRow>
            </TableRow>
          </TableHead>
          <TableBody>
            <DataTableUsers data={users}></DataTableUsers>
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
