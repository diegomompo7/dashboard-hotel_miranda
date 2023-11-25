import { StyledButton } from "../common/StyledButton";
import {
  StyledBoxForm,
  StyledFormContainer,
  StyledImgForm,
  StyledInputForm,
} from "../common/StyledForm";
import {
  StyledFormControl,
  StyledInputLabel,
  StyledSelect,
} from "../common/StyledSelect";
import { MenuItem } from "@mui/material";
import logo from "../assets/img/logo.png";

export const NewRoomPage = () => {
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

        <StyledInputForm
          placeholder="Photo"
          type="url"
          name="photo"
        ></StyledInputForm>

        <StyledInputForm
          placeholder="Room Number"
          type="number"
          name="RoomNumber"
        ></StyledInputForm>
        <StyledInputForm
          placeholder="Description"
          type="description"
          name="description"
        ></StyledInputForm>
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
        <StyledInputForm
          placeholder="Amenities"
          type="text"
          name="amenities"
        ></StyledInputForm>

        <StyledButton name="new" type="submit">
          CREATE ROOM
        </StyledButton>
      </StyledFormContainer>
    </StyledBoxForm>
  );
};
