import { Header } from "../components/Header";
import { DataTableGuest } from "../components/DataTableGuest";
import booking from "../data/booking.json";
import { TableHead, TableBody, TableRow } from "@mui/material";
import { StyledTable, StyledTableCellRow } from "../styled/StyledTable";
import { StyledBody } from "../styled/StyledBody";
import { useState } from "react";

export const GuestsPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header setIsOpen={setIsOpen}></Header>
      <StyledBody isOpen={isOpen}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCellRow>Guest</StyledTableCellRow>
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
      </StyledBody>
    </>
  );
};
