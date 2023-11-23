import { Header } from "../components/Header";
import { DataTableContact } from "../components/DataTableContact";
import contact from "../data/contact.json";
import { TableHead, TableBody, TableRow } from "@mui/material";
import { StyledTable, StyledTableCellRow, StyledTableContainer} from "../styled/StyledTable";
import { StyledBody } from "../styled/StyledBody";
import { useState } from "react";
import { StyledNav, StyledNavText } from "../styled/StyledNav";
import { StyledPagination, StyledPaginationText , StyledButtonPage, StyledTextPage} from "../styled/StyledPagination";
import { StyledButton } from "../styled/StyledButton";
import { CardContact } from "../components/CardContact";

export const ContactPage = () => {

  const [isOpen, setIsOpen] = useState(false)
  const contactTable = contact

  console.log(contact)

  return (
    <>
      <Header setIsOpen={setIsOpen} title="Reviews"></Header>
      <StyledBody isOpen={isOpen} typeBody="contact">

       <CardContact contact={contact}></CardContact> 

      <StyledNav>
          <StyledNavText>All Contacts</StyledNavText>
          <StyledNavText name="last">Archived</StyledNavText>
        </StyledNav>
        <StyledTableContainer isOpen={isOpen}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCellRow >Date & ID</StyledTableCellRow>
              <StyledTableCellRow>Customer</StyledTableCellRow>
              <StyledTableCellRow>Comment</StyledTableCellRow>
            </TableRow>
          </TableHead>
          <TableBody>
            <DataTableContact data={contactTable}></DataTableContact>
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