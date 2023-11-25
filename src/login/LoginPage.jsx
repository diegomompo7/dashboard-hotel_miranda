import React from "react";
import {
  StyledBoxLogin,
  StyledImgLogin,
  StyledFormLogin,
  StyledInputLogin
} from "./StyledLogin";
import logo from "../assets/img/logo.png";
import { StyledButton } from "../common/StyledButton";



export const LoginPage = ({handleOnSubmit}) => {

  return (
    <StyledBoxLogin>
      <StyledImgLogin src={logo}></StyledImgLogin>
      <StyledFormLogin onSubmit={(e) => handleOnSubmit(e)}>
        <StyledInputLogin
          placeholder="Email"
          type="email"
          variant="email"
        ></StyledInputLogin>
        <StyledInputLogin
          placeholder="Password"
          type="password"
          variant="password"
        ></StyledInputLogin>
        <StyledButton name="login" type="submit">LOGIN</StyledButton>
      </StyledFormLogin>
    </StyledBoxLogin>
  );
};
