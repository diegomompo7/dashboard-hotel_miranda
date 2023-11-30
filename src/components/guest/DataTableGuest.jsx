import React, { useState } from "react";
import { Menu, MenuItem, Modal, TableRow } from "@mui/material";
import {
  StyledTableCellBody,
  StyledTableCellBodyText,
  StyledTableCellBodyImg,
} from "../common/StyledTable";
import { StyledButton } from "../common/StyledButton";
import { StyledMoreIcon } from "../common/StyledIcons";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

export const DataTableGuest = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataPage = [...props.data].slice(
    props.numberPage[0],
    props.numberPage[1]
  );

  const [anchorEl, setAnchorEl] = useState(null);
    const [menuId, setMenuId] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event, id) => {
        event.stopPropagation();
        console.log(id)
        setAnchorEl(event.currentTarget);
        setMenuId(id)
    };
    const handleClose = () => {
        setAnchorEl(null);
        setMenuId(null)
    };


  //onClick={ () => navigate(`/booking/${data.id}`)}

  return (
    <>
      {dataPage.map((data) => (
        <TableRow key="data.id">
          <StyledTableCellBody
            style={{ display: "flex", alignItems: "center" }}
          >
            <StyledTableCellBodyImg
              src={data.userImg}
              typeImg="booking"
            ></StyledTableCellBodyImg>
            <div>
              <StyledTableCellBodyText typeStyle="title">
                {data.name}
              </StyledTableCellBodyText>
              <StyledTableCellBodyText typeStyle="id">
                #{data.id}
              </StyledTableCellBodyText>
            </div>
          </StyledTableCellBody>
          <StyledTableCellBody>{data.orderDate}</StyledTableCellBody>
          <StyledTableCellBody>
            <StyledTableCellBodyText typeStyle="title">
              {data.check_in}
            </StyledTableCellBodyText>
            <StyledTableCellBodyText typeStyle="subtitle">
              {data.hour_in}
            </StyledTableCellBodyText>
          </StyledTableCellBody>
          <StyledTableCellBody>
            <StyledTableCellBodyText typeStyle="title">
              {data.check_out}
            </StyledTableCellBodyText>
            <StyledTableCellBodyText typeStyle="subtitle">
              {data.hour_out}
            </StyledTableCellBodyText>
          </StyledTableCellBody>
          <StyledTableCellBody>
            <StyledButton
              name="view_notes"
              onClick={() => {
                props.handleOpen(),
                  props.setSpecialRequest(data.specialRequest);
              }}
            >
              View Notes
            </StyledButton>
          </StyledTableCellBody>
          <StyledTableCellBody>
              <StyledTableCellBodyText typeStyle="title">{data.roomId.roomNumber}</StyledTableCellBodyText>
          </StyledTableCellBody>
          <StyledTableCellBody>
            <StyledButton name={data.status}>{data.status}</StyledButton>
          </StyledTableCellBody>
          <StyledTableCellBody>
                        <StyledMoreIcon onClick={(e) => handleClick(e, data.id)}></StyledMoreIcon>
                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                            <MenuItem onClick={ () => navigate(`/booking/${menuId}`)}>
                                View details
                            </MenuItem>
                        </Menu>
                    </StyledTableCellBody>
        </TableRow>
      ))}
    </>
  );
};
