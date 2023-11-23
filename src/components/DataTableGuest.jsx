import React from "react";
import { TableRow } from "@mui/material";
import { StyledTableCellBody, StyledTableCellBodyText, StyledTableCellBodyImg } from "../styled/StyledTable";
import { StyledButton } from "../styled/StyledButton";
import { StyledMoreIcon } from "../styled/StyledIcons";


export const DataTableGuest = (props) => {
    console.log(props.data)
    return (
        <>{
            props.data.map((data) => (
                    <TableRow
                      key={data.name}
                    >
                        
                    <StyledTableCellBody style={{display: "flex", alignItems: "center"}}>
                        <StyledTableCellBodyImg src={data.userImg} typeImg="booking"></StyledTableCellBodyImg>
                        <div> 
                            <StyledTableCellBodyText typeStyle="title">{data.name} {data.surname}</StyledTableCellBodyText> 
                            <StyledTableCellBodyText typeStyle="id">#{data.id}</StyledTableCellBodyText>
                        </div> 
                    </StyledTableCellBody>
                    <StyledTableCellBody>{data.orderDate}</StyledTableCellBody>
                    <StyledTableCellBody>
                        <StyledTableCellBodyText typeStyle="title">{data.check_in}</StyledTableCellBodyText>
                        <StyledTableCellBodyText typeStyle="subtitle">{data.hour_in}</StyledTableCellBodyText>
                    </StyledTableCellBody>
                    <StyledTableCellBody>
                    <StyledTableCellBodyText typeStyle="title">{data.check_out}</StyledTableCellBodyText>
                    <StyledTableCellBodyText typeStyle="subtitle">{data.hour_out}</StyledTableCellBodyText>
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
                    <StyledTableCellBody>
                        <StyledMoreIcon></StyledMoreIcon>
                    </StyledTableCellBody>
                    </TableRow>

            ))
        }</>
    )

}