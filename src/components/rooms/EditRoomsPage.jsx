import { StyledButton } from "../common/StyledButton";
import {
  StyledBoxForm,
  StyledFormContainer,
  StyledImgForm,
  StyledInputForm,
  StyledTextAreaForm,
} from "../common/StyledForm";
import {
  StyledFormControl,
  StyledInputLabel,
  StyledSelect,
} from "../common/StyledSelect";
import { MenuItem } from "@mui/material";
import logo from "../../assets/img/logo.png";
import rooms from "../../data/rooms.json"

export const EditRoomsPage = () => {

  const url = new URL(window.location.href)
  const id = url.pathname.split("/").slice(2,3).join("")
  console.log(id)
  const roomId = rooms.find((room) => parseInt(room.id) == id)

  console.log(roomId)

  return (
    <StyledBoxForm name="createForm">
      <StyledImgForm src={logo}></StyledImgForm>
      <StyledFormContainer
        onSubmit={(e) => handleOnSubmit(e)}
        name="createForm"
      >
        <StyledFormControl name="selectCreate">
          <StyledInputLabel>Status</StyledInputLabel>
          <StyledSelect label="roomType" defaultValue={roomId.roomType}>
            <MenuItem value="Single Bed">Single Bed</MenuItem>
            <MenuItem value="Double Bed">Double Bed</MenuItem>
            <MenuItem value="Double Superior">Double Superior</MenuItem>
            <MenuItem value="Suite">Suite</MenuItem>
          </StyledSelect>
        </StyledFormControl>
        <StyledFormControl name="selectCreate">
          <StyledInputLabel>Offer</StyledInputLabel>
          <StyledSelect label="offer" defaultValue={roomId.offer}>
            <MenuItem value="YES">YES</MenuItem>
            <MenuItem value="NO">NO</MenuItem>
          </StyledSelect>
        </StyledFormControl>

        <StyledTextAreaForm
          value={roomId.photos.join('\n\n')}
          placeholder="Photo"
          type="url"
          name="photo"
          rows="5" cols="10"
        ></StyledTextAreaForm>

        <StyledInputForm
          placeholder="Room Number"
          value={roomId.roomNumber}
          type="text"
          name="RoomNumber"
        ></StyledInputForm>
        <StyledTextAreaForm
          placeholder="Description"
          value={roomId.description}
          type="description"
          name="description"
        ></StyledTextAreaForm>
        <StyledInputForm
        value={roomId.priceNight}
          placeholder="Price per night"
          type="number"
          name="priceNight"
        ></StyledInputForm>
        <StyledInputForm
        value={roomId.discount}
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
          value={roomId.amenities.join('\n\n')}
          type="text"
          name="amenities"
          rows={3}
        ></StyledTextAreaForm>

        <StyledButton name="new" type="submit">
          UPDATE ROOM
        </StyledButton>
      </StyledFormContainer>
    </StyledBoxForm>
  );
};
