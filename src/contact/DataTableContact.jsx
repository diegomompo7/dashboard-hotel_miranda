import React from "react";
import { TableRow } from "@mui/material";
import {
  StyledTableCellBody,
  StyledTableCellBodyText,
} from "../common/StyledTable";
import { StyledButton } from "../common/StyledButton";
import { StyledMoreIcon } from "../common/StyledIcons";
import { useDispatch, useSelector } from "react-redux";
import { getAll, getArchived, updateContact } from "../features/contact/contactSlice";

export const DataTableContact = (props) => {

    const dispatch = useDispatch()

    const handleUpdate = (idContact, isArchived) => {

      switch(isArchived){
        case true:
          dispatch(updateContact({id: idContact, is_archived: !isArchived}))
          dispatch(getAll())
        break;
        case false:
          dispatch(updateContact({id: idContact, is_archived: !isArchived}))
          dispatch(getArchived())
        break;
      }

    }
  

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
            <StyledButton name="archived" onClick={() => handleUpdate(data.id, data.is_archived)}>{data.is_archived ? "Publish" : "Archived"}</StyledButton>
          </StyledTableCellBody>
          <StyledTableCellBody>
            <StyledMoreIcon></StyledMoreIcon>
          </StyledTableCellBody>
        </TableRow>
      ))}
    </>
  );
};
