import { Header } from "../components/Header";
import { DataTableGuest } from "../components/DataTableGuest";
import booking from "../data/booking.json";
import { TableHead, TableBody, TableRow} from "@mui/material";
import { StyledTable, StyledTableCellRow } from "../styled/StyledTable";

export const GuestsPage = () => {
  return (
    <>
      <Header></Header>
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
          </TableRow>
        </TableHead>
        <TableBody>
          <DataTableGuest data={booking}></DataTableGuest>
        </TableBody>
      </StyledTable>
    </>
  );
};
