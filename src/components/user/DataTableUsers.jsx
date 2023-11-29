import React from "react";
import { TableRow } from "@mui/material";
import {
  StyledTableCellBody,
  StyledTableCellBodyText,
  StyledTableCellBodyImg,
} from "../common/StyledTable";
import { StyledButton } from "../common/StyledButton";
import { StyledMoreIcon, StyledPhone } from "../common/StyledIcons";;
import { useNavigate } from "react-router-dom";

export const DataTableUsers = (props) => {
  const navigate = useNavigate()

  return (
    <>
      {props.data.map((data) => (
        <TableRow key={data.name}  onClick={ () => navigate(`/createUser/${data.id}`)}>
          <StyledTableCellBody>
          <StyledTableCellBodyImg src={data.photo} typeImg="users"></StyledTableCellBodyImg>
          </StyledTableCellBody>
          <StyledTableCellBody>
                <StyledTableCellBodyText typeStyle="title">{data.fullName}</StyledTableCellBodyText>
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
