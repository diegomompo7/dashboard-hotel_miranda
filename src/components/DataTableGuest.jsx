import React from "react";
import { TableRow } from "@mui/material";
import { StyledTableCellBody, StyledTableCellBodyText } from "../styled/StyledTable";
import { StyledButton } from "../styled/StyledButton";


export const DataTableGuest = (props) => {
    console.log(props.data)
    return (
        <>{
            props.data.map((data) => (
                    <TableRow
                      key={data.name}
                    >
                    <StyledTableCellBody>
                        <StyledTableCellBodyText typeStyle="title">{data.name} {data.surname}</StyledTableCellBodyText> 
                        <StyledTableCellBodyText typeStyle="subtitle">#{data.roomType.id}</StyledTableCellBodyText>
                    </StyledTableCellBody>
                    <StyledTableCellBody>{data.orderDate}</StyledTableCellBody>
                    <StyledTableCellBody>
                        <StyledTableCellBodyText typeStyle="title">{data.check_in}</StyledTableCellBodyText>
                    </StyledTableCellBody>
                    <StyledTableCellBody>
                    <StyledTableCellBodyText typeStyle="title">{data.check_out}</StyledTableCellBodyText>
                    </StyledTableCellBody>
                    <StyledTableCellBody>
                        <StyledButton name="view_notes">View Notes</StyledButton>
                    </StyledTableCellBody>
                    <StyledTableCellBody>
                        <StyledTableCellBodyText typeStyle="title">{data.roomType.roomType} - {data.roomType.roomNumber}</StyledTableCellBodyText>
                    </StyledTableCellBody>
                    <StyledTableCellBody>
                        <StyledButton name={data.status}>{data.status}</StyledButton>
                    </StyledTableCellBody>
                    </TableRow>

            ))
        }</>
    )

}