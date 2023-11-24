import React from "react";
import { TableRow } from "@mui/material";
import { StyledTableCellBody, StyledTableCellBodyText, StyledTableCellBodyImg } from "../common/StyledTable";
import { StyledButton } from "../common/StyledButton";
import { StyledMoreIcon } from "../common/StyledIcons";


export const DataTableRooms = (props) => {
    return (
        <>{
            props.data.map((data) => (
                    <TableRow
                      key={data.name}
                    >
                        
                    <StyledTableCellBody style={{display: "flex", alignItems: "center"}}>
                        <StyledTableCellBodyImg src={data.userImg} typeImg="rooms"></StyledTableCellBodyImg>
                        <div> 
                            <StyledTableCellBodyText typeStyle="id">#{data.id}</StyledTableCellBodyText> 
                            <StyledTableCellBodyText typeStyle="title">{data.roomNumber}</StyledTableCellBodyText>
                        </div> 
                    </StyledTableCellBody>
                    <StyledTableCellBody>
                        <StyledTableCellBodyText typeStyle="title">{data.roomType}</StyledTableCellBodyText>
                    </StyledTableCellBody>
                    <StyledTableCellBody>
                        {data.amenities.toString(",")}
                    </StyledTableCellBody>
                    <StyledTableCellBody>
                    <div style={{display: "flex"}}> 
                        <StyledTableCellBodyText typeStyle="titleSemiBold">${data.priceNight}</StyledTableCellBodyText>
                        <StyledTableCellBodyText typeStyle="id">/night</StyledTableCellBodyText>
                    </div>
                    </StyledTableCellBody>
                    <StyledTableCellBody>
                     { data.discount !== null &&  
                    <div style={{display: "flex"}}>
                        <StyledTableCellBodyText typeStyle="titleSemiBold">${data.priceNight - (data.priceNight * 20 / 100)}</StyledTableCellBodyText>
                        <StyledTableCellBodyText typeStyle="id">/night</StyledTableCellBodyText>
                    </div>
                    }
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