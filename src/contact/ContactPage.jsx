
import { DataTableContact } from "./DataTableContact";
import contact from "../data/contact.json";
import { TableHead, TableBody, TableRow } from "@mui/material";
import { StyledTable, StyledTableCellRow, StyledTableContainer} from "../common/StyledTable";
import { useState, useEffect } from "react";
import { StyledNav, StyledNavText } from "../common/StyledNav";
import { StyledPagination, StyledPaginationText , StyledButtonPage, StyledTextPage} from "../common/StyledPagination";
import { StyledButton } from "../common/StyledButton";
import { CardContact } from "./CardContact";
import { useDispatch, useSelector } from "react-redux";
import {
  getContactData,
  getContactError,
  getContactStatus,
} from "../features/contact/contactSlice";
import { getContactFromApiTrunk } from "../features/contact/contactTrunk";


export const ContactPage = () => {

  const [isOpen, setIsOpen] = useState(false)
  const contactTable = contact

  const dispatch = useDispatch();
  const contactListData = useSelector(getContactData);
  const contactListError = useSelector(getContactError);
  const contactListStatus = useSelector(getContactStatus);
  const [spinner, setSpinner] = useState(true);
  const [contactList, setContactList] = useState([]);

  useEffect(
    () => {

      if (contactListStatus === "idle") {
        dispatch(getContactFromApiTrunk());
      } else if (contactListStatus === "pending") {
        setSpinner(true);
      } else if (contactListStatus === "fulfilled") {
        setSpinner(false)
      }
    },[
    dispatch,
    contactListData,
    contactListStatus]
  );


  return (
    <>

      {spinner ? <p>Loading...</p> :<CardContact contact={contactListData}></CardContact> }

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
    </>
  );
};