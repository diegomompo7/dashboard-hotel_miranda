
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
  getContactTable
} from "../features/contact/contactSlice";
import { getContactFromApiTrunk } from "../features/contact/contactTrunk";


export const ContactPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch();
  const contactListData = useSelector(getContactData);
  const contactTable = useSelector(getContactTable)
  const contactListError = useSelector(getContactError);
  const contactListStatus = useSelector(getContactStatus);
  const [spinner, setSpinner] = useState(true);
  let viewTable = useSelector((state) => state.contact.viewTable);


  const [numberPage, setNumberPage] = useState([0, 10])
  const [currentPage, setCurrentPage] = useState(1);
  const [currentView, setCurrentView] = useState("all");
 
  console.log(numberPage)

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
      setCurrentView("all")
      break;
      case "archived":
       dispatch(getArchived())
       setCurrentView("archived")
      break;

    }
    numberPage[0] = 0;
    numberPage[1] = 10;
    setCurrentPage(1)
  }



  return (
    <>

      { contactTable !== undefined &&

        <>
      {spinner ? <p>Loading...</p> :<CardContact contact={contactTable}></CardContact> }

      <StyledNav>
          <StyledNavText onClick={() => handleClick("all")} isActive={currentView === "all"}>All Contacts</StyledNavText>
          <StyledNavText name="last" onClick={() => handleClick("archived")} isActive={currentView === "archived"}>Archived</StyledNavText>
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
          {spinner ? <p>Loading...</p> :
           <DataTableContact data={contactTable} numberPage={numberPage} setCurrentPage={setCurrentPage} setCurrentView={setCurrentView}></DataTableContact>
           
           }
          </TableBody>
        </StyledTable>
        </StyledTableContainer>
        <StyledPagination>
          <StyledPaginationText> Showing {contactTable.length !== 0 ? numberPage[0]+1 : numberPage[0]} of { contactTable.length >= numberPage[1] ? numberPage[1] : contactTable.length } data</StyledPaginationText>
          <StyledButtonPage>
              <StyledButton name="Prev" disabled={numberPage[0] <= 1} onClick={() => {
                numberPage[0] -= 10
                numberPage[1] -= 10
                setCurrentPage(next => next - 1) }}>Prev</StyledButton>
              {
                Array.from({length: Math.ceil((contactTable.length / 10))}, (_, i) => (
                    <StyledTextPage key={i} isCurrentPage={i+1 === currentPage}>{i+1}</StyledTextPage>
                ))
              }
              <StyledButton  name="Next"  disabled={numberPage[1] >= contactTable.length} onClick={() => {
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