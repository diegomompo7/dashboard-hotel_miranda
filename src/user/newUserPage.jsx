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

export const NewUserPage = () => {
  return (
    <StyledBoxForm name="createForm">
      <StyledImgForm src={logo}></StyledImgForm>
      <StyledFormContainer
        onSubmit={(e) => handleOnSubmit(e)}
        name="createForm"
      >
        <StyledInputForm
          placeholder="Photo"
          type="url"
          name="photo"
        ></StyledInputForm>
        <StyledInputForm
          placeholder="Full Name"
          type="text"
          name="fullName"
        ></StyledInputForm>
        <StyledInputForm
          placeholder="Job"
          type="text"
          name="job"
        ></StyledInputForm>
        <StyledInputForm
          placeholder="Email"
          type="email"
          name="email"
        ></StyledInputForm>
        <StyledInputForm
          placeholder="Phone"
          type="tel"
          name="phone"
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
        ></StyledInputForm>
        <StyledInputForm
          placeholder="Description about job"
          type="text"
          name="descriptionJob"
        ></StyledInputForm>
        <StyledInputForm
          placeholder="Description about job"
          type="text"
          name="descriptionJob"
        ></StyledInputForm>
        <StyledFormControl name="selectCreate">
          <StyledInputLabel>Status</StyledInputLabel>
          <StyledSelect label="status">
            <MenuItem value="ACTIVE">ACTIVE</MenuItem>
            <MenuItem value="INACTIVE">INACTIVE</MenuItem>
          </StyledSelect>
        </StyledFormControl>
        <StyledInputForm
          placeholder="Password"
          type="Password"
          name="password"
        ></StyledInputForm>

        <StyledButton name="new" type="submit">
          CREATE EMPLOYEE
        </StyledButton>
      </StyledFormContainer>
    </StyledBoxForm>
  );
};
