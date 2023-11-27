
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
  getAll,
  getArchived,
  getContactData,
  getContactError,
  getContactStatus,
} from "../features/contact/contactSlice";
import { getContactFromApiTrunk } from "../features/contact/contactTrunk";


export const ContactPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch();
  const contactListData = useSelector(getContactData);
  const contactListError = useSelector(getContactError);
  const contactListStatus = useSelector(getContactStatus);
  const [spinner, setSpinner] = useState(true);
  let viewTable = useSelector((state) => state.contact.viewTable);

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

  const handleClick = (nav) => {

    switch(nav){
      case "all":
      dispatch(getAll())
      break;
      case "archived":
       dispatch(getArchived())
      break;

    }
  }


  return (
    <>

      {spinner ? <p>Loading...</p> :<CardContact contact={contactListData}></CardContact> }

      <StyledNav>
          <StyledNavText onClick={() => handleClick("all")}>All Contacts</StyledNavText>
          <StyledNavText name="last" onClick={() => handleClick("archived")}>Archived</StyledNavText>
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
          {spinner ? <p>Loading...</p> : viewTable !== undefined ?
           <DataTableContact data={viewTable} ></DataTableContact> :
           
           <DataTableContact data={contactListData}></DataTableContact>
           
           }
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