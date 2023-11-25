import React from "react";
import {
  StyledBoxForm,
  StyledImgForm,
  StyledFormContainer,
  StyledInputForm
} from "../common/StyledForm";
import logo from "../assets/img/logo.png";
import { StyledButton } from "../common/StyledButton";
import { Navigate } from "react-router-dom";



export const LoginPage = ({handleOnSubmit, checkLogin, userLogin}) => {

    

  return (
  
    <StyledBoxForm>

    {userLogin!=="" && <Navigate to="/"/>}

      <StyledImgForm src={logo}></StyledImgForm>
      <StyledFormContainer onSubmit={(e) => handleOnSubmit(e)}>
        <StyledInputForm
          placeholder="Email"
          type="email"
          variant="email"
        ></StyledInputForm>
        <StyledInputForm
          placeholder="Password"
          type="password"
          variant="password"
        ></StyledInputForm>
        <StyledButton name="login" type="submit">LOGIN</StyledButton>
      </StyledFormContainer>
    </StyledBoxForm>
  );
};
