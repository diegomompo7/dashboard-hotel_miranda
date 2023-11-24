import React from "react";
import { TableRow } from "@mui/material";
import {
  StyledTableCellBody,
  StyledTableCellBodyText,
} from "../common/StyledTable";
import { StyledButton } from "../common/StyledButton";
import { StyledMoreIcon } from "../common/StyledIcons";

export const DataTableContact = (props) => {
  

  return (
    <>
      {props.data.map((data) => (
        <TableRow key={data.name}>
          <StyledTableCellBody>
          <StyledTableCellBodyText>{data.date}</StyledTableCellBodyText>
           <StyledTableCellBodyText>#{data.id}</StyledTableCellBodyText>
          </StyledTableCellBody>
          <StyledTableCellBody>
          <StyledTableCellBodyText>{data.name} {data.surname}</StyledTableCellBodyText>
          <StyledTableCellBodyText>{data.email} {data.phone}</StyledTableCellBodyText>
          </StyledTableCellBody>
          <StyledTableCellBody typeStyle="message">
            <StyledTableCellBodyText>{data.subject}</StyledTableCellBodyText>
            <StyledTableCellBodyText>{data.message}</StyledTableCellBodyText>
          </StyledTableCellBody>
          <StyledTableCellBody>
            <StyledButton name="archived">Archived</StyledButton>
          </StyledTableCellBody>
          <StyledTableCellBody>
            <StyledMoreIcon></StyledMoreIcon>
          </StyledTableCellBody>
        </TableRow>
      ))}
    </>
  );
};
