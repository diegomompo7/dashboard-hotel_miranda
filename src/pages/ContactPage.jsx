import { Header } from "../components/Header";
import { DataTableContact } from "../components/DataTableContact";
import contact from "../data/contact.json";
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

export const ContactPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header setIsOpen={setIsOpen} title="Reviews"></Header>
      <StyledBody isOpen={isOpen} typeBody="contact">

      <StyledNav>
          <StyledNavText>All Contacts</StyledNavText>
          <StyledNavText name="last">Archived</StyledNavText>
        </StyledNav>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCellRow >ID</StyledTableCellRow>
              <StyledTableCellRow>Date</StyledTableCellRow>
              <StyledTableCellRow>Customer</StyledTableCellRow>
              <StyledTableCellRow>Subject</StyledTableCellRow>
              <StyledTableCellRow>Comment</StyledTableCellRow>
              <StyledTableCellRow>Archived</StyledTableCellRow>
            </TableRow>
          </TableHead>
          <TableBody>
            <DataTableContact data={contact}></DataTableContact>
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