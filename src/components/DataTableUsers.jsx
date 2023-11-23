import React from "react";
import { TableRow } from "@mui/material";
import {
  StyledTableCellBody,
  StyledTableCellBodyText,
  StyledTableCellBodyImg,
} from "../styled/StyledTable";
import { StyledButton } from "../styled/StyledButton";
import { StyledMoreIcon, StyledPhone } from "../styled/StyledIcons";

export const DataTableUsers = (props) => {

  return (
    <>
      {props.data.map((data) => (
        <TableRow key={data.name}>
          <StyledTableCellBody>
          <StyledTableCellBodyImg src={data.userImg} typeImg="users"></StyledTableCellBodyImg>
          </StyledTableCellBody>
          <StyledTableCellBody>
                <StyledTableCellBodyText typeStyle="title">{data.name} {data.surname}</StyledTableCellBodyText>
          </StyledTableCellBody>
          <StyledTableCellBody>
            {data.id}
          </StyledTableCellBody>
          <StyledTableCellBody>
            {data.email}
          </StyledTableCellBody>
          <StyledTableCellBody>
            {data.startDate}
          </StyledTableCellBody>
          <StyledTableCellBody typeStyle="description">
            {data.descriptionJob}
          </StyledTableCellBody>
          <StyledTableCellBody>
            <div style={{display: 'flex'}}>
            <StyledPhone></StyledPhone>
            <StyledTableCellBodyText typeStyle="titleSemiBold">{data.phone}</StyledTableCellBodyText>
            </div>
          </StyledTableCellBody>
          <StyledTableCellBody>
            <StyledButton name={data.status}>{data.status}</StyledButton>
          </StyledTableCellBody>
          <StyledTableCellBody>
            <StyledMoreIcon></StyledMoreIcon>
          </StyledTableCellBody>
        </TableRow>
      ))}
    </>
  );
};
