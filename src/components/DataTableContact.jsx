import React from "react";
import { TableRow } from "@mui/material";
import { StyledTableCellBody, StyledTableCellBodyText, StyledTableCellBodyImg } from "../styled/StyledTable";
import { StyledButton } from "../styled/StyledButton";
import { StyledMoreIcon } from "../styled/StyledIcons";


export const DataTableContact = (props) => {
    console.log(props.data)
    return (
        <>{
            props.data.map((data) => (
                    <TableRow
                      key={data.name}
                    >
                        
                        <StyledTableCellBody>#{data.id}</StyledTableCellBody>
                    <StyledTableCellBody>
                        {data.date}
                    </StyledTableCellBody>
                    <StyledTableCellBody>
                        {data.name} {data.surname}
                    </StyledTableCellBody>
                    <StyledTableCellBody>
                        {data.subject}
                    </StyledTableCellBody>
                    <StyledTableCellBody typeStyle="message">
                        <StyledTableCellBodyText>{data.message}</StyledTableCellBodyText>
                    </StyledTableCellBody>
                    <StyledTableCellBody typeStyle="message">
                        <StyledButton name="archived">Archived</StyledButton>
                    </StyledTableCellBody>
                   
                    <StyledMoreIcon></StyledMoreIcon>
                    </TableRow>

            ))
        }</>
    )

}