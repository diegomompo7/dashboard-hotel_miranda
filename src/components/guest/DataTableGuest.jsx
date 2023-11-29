import React from "react";
import { Modal, TableRow } from "@mui/material";
import { StyledTableCellBody, StyledTableCellBodyText, StyledTableCellBodyImg } from "../common/StyledTable";
import { StyledButton } from "../common/StyledButton";
import { StyledMoreIcon } from "../common/StyledIcons";
import { ModalComponent } from "../ModalComponent/ModalComponent";
import { GuestDetailPage } from "../details/GuestDetailPage";
import { Navigate, useNavigate } from "react-router-dom";


export const DataTableGuest = (props) => {

    const navigate = useNavigate()
    
    return (
        <>{
            props.data.map((data) => (



                    <TableRow
                      key={data.name}
                      onClick={ () => navigate(`/booking/${data.id}`)}
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
                        <StyledButton name="view_notes" onClick={() => {props.handleOpen(), props.setSpecialRequest(data.specialRequest)}}>View Notes</StyledButton>
                    </StyledTableCellBody>
                    <StyledTableCellBody>
                        <StyledTableCellBodyText typeStyle="title">{data.roomType.roomNumber}</StyledTableCellBodyText>
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