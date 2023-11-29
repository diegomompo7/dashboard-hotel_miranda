import { StyledButton } from "../common/StyledButton";
import {
  StyledBoxForm,
  StyledFormContainer,
  StyledImgForm,
  StyledInputForm,
  StyledTextAreaForm
} from "../common/StyledForm";
import {
  StyledFormControl,
  StyledInputLabel,
  StyledSelect,
} from "../common/StyledSelect";
import { MenuItem } from "@mui/material";
import logo from "../../assets/img/logo.png";

import {  getChangeData, getNewData, getRoomsData, getRoomsError, getRoomsStatus, createRoom } from "../../features/rooms/roomsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsFromApiTrunk } from "../../features/rooms/roomsTrunk";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const NewRoomPage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const roomsListData = useSelector(getRoomsData);
  const roomsListError = useSelector(getRoomsError);
  const roomsListStatus = useSelector(getRoomsStatus);
  const [spinner, setSpinner] = useState(true);
  let roomCreate= useSelector(getChangeData)

  useEffect(
    () => {
  
      if (roomsListStatus === "idle") {
        dispatch(getRoomsFromApiTrunk());
      } else if (roomsListStatus === "pending") {
        setSpinner(true);
      } else if (roomsListStatus === "fulfilled") {
        setSpinner(false)
      }
    },[
    dispatch,
    roomCreate,
    roomsListStatus]
  );

  
  const [formData, setFormData] = useState({
    roomType: "",
    offer: "",
    photos: [],
    roomNumber: "",
    description: "",
    priceNight: "",
    discount: "",
    cancellation: "",
    amenities: [],
  });

  

  return (
    <StyledBoxForm name="createForm">
      <StyledImgForm src={logo}></StyledImgForm>
      <StyledFormContainer
        onSubmit={(e) => handleOnSubmit(e)}
        name="createForm"
      >
        <StyledFormControl name="selectCreate">
          <StyledInputLabel>Status</StyledInputLabel>
          <StyledSelect label="roomType">
            <MenuItem value="Single Bed">Single Bed</MenuItem>
            <MenuItem value="Double Bed">Double Bed</MenuItem>
            <MenuItem value="Double Superior">Double Superior</MenuItem>
            <MenuItem value="Suite">Suite</MenuItem>
          </StyledSelect>
        </StyledFormControl>
        <StyledFormControl name="selectCreate">
          <StyledInputLabel>Offer</StyledInputLabel>
          <StyledSelect label="offer">
            <MenuItem value="YES">YES</MenuItem>
            <MenuItem value="NO">NO</MenuItem>
          </StyledSelect>
        </StyledFormControl>

        <StyledTextAreaForm
          placeholder="Photo"
          type="url"
          name="photo"
          rows="5" cols="10"
        ></StyledTextAreaForm>

        <StyledInputForm
          placeholder="Room Number"
          type="text"
          name="RoomNumber"
        ></StyledInputForm>
        <StyledTextAreaForm
          placeholder="Description"
          type="description"
          name="description"
        ></StyledTextAreaForm>
        <StyledInputForm
          placeholder="Price per night"
          type="number"
          name="priceNight"
        ></StyledInputForm>
        <StyledInputForm
          placeholder="Discount"
          type="number"
          name="discount"
        ></StyledInputForm>
        <StyledInputForm
          placeholder="Cancelattion"
          type="text"
          name="cancelattion"
        ></StyledInputForm>
        <StyledTextAreaForm
          placeholder="Amenities"
          type="text"
          name="amenities"
          rows="3"
        ></StyledTextAreaForm>

        <StyledButton name="new" type="submit">
          CREATE ROOM
        </StyledButton>
      </StyledFormContainer>
    </StyledBoxForm>
  );
};
