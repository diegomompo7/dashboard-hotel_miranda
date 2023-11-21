import React from "react";
import { StyledBox, StyledMenuBox, StyledLogo, StyledBoxMenuProfile} from "../styled/StyledBox";
import {
  StyledBellIcon,
  StyledBookingIcon,
  StyledContactIcon,
  StyledDashboardIcon,
  StyledEmailIcon,
  StyledHeartIcon,
  StyledLogOutIcon,
  StyledMenuIcon,
  StyledRoomsIcon,
  StyledUsersIcon,
} from "../styled/StyledIcons";
import { StyledTextUserMenu, StyledTextHeader, StyledTextLogo, StyledTextFooter } from "../styled/StyledText";
import { StyledImgLogo, StyledTextImgLogo, StyledImgProfileMenu } from "../styled/StyledImg";
import { StyledMenuItem } from "../styled/StyledMenuItem";
import logo  from"../assets/img/logo.png"
import textLogo from "../assets/img/textLogo.png"
import { StyledButton } from "../styled/StyledButton";

export const Header = () => {
  const [lang, setLang] = React.useState("");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <div style={{display: 'flex'}}>
    <StyledMenuBox>
      <StyledLogo>
        <StyledImgLogo src={logo} width="47px" height="40px"></StyledImgLogo>
        <StyledTextLogo fontSize="0.75rem" fontFamily="'Poppins', sans-serif" color= "#5D5449" weight="300">
            <StyledTextImgLogo src={textLogo} width="72px" height="23px"></StyledTextImgLogo>
            <p>Hotel Admin Dashboard</p>
        </StyledTextLogo>
      </StyledLogo>

      <StyledMenuItem>
        <StyledDashboardIcon></StyledDashboardIcon>
        <p>Dashboard</p>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledBookingIcon></StyledBookingIcon>
        <p>Room</p>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledRoomsIcon></StyledRoomsIcon>
        <p>Bookings</p>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledContactIcon></StyledContactIcon>
        <p>Guest</p>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledUsersIcon></StyledUsersIcon>
        <p>Concierge</p>
      </StyledMenuItem>
      <StyledBoxMenuProfile>
        <StyledImgProfileMenu style={{background: "#C5C5C5"}} width="70px" height="70px" ></StyledImgProfileMenu>
        <StyledTextUserMenu fontSize="1rem" fontFamily="'Poppins', sans-serif" color= "#5D5449" weight="500" >Diego Mompó</StyledTextUserMenu>
        <StyledTextUserMenu fontSize="0.75rem" fontFamily="'Poppins', sans-serif" color= "#B2B2B2" weight="300" >diego@diegomompo.com</StyledTextUserMenu>
        <StyledButton name="CONTACT_US">Contact Us</StyledButton>
      </StyledBoxMenuProfile>
      <StyledTextFooter name="travl">Travl Hotel Admin Dashboard</StyledTextFooter>
      <StyledTextFooter name="copy">© 2020 All Rights Reserved</StyledTextFooter>
      <StyledTextFooter name="made">Made with ♥ by Peterdraw</StyledTextFooter>
    </StyledMenuBox>
      <StyledBox>
        <StyledMenuIcon></StyledMenuIcon>
        <StyledTextHeader fontSize="1.7rem" color="#393939" fontFamily="'Poppins', sans-serif" weight="600">
          Guest List
        </StyledTextHeader>
        <StyledHeartIcon></StyledHeartIcon>
        <StyledEmailIcon></StyledEmailIcon>
        <StyledBellIcon></StyledBellIcon>
        <StyledLogOutIcon></StyledLogOutIcon>
      </StyledBox>
    </div>
  );
};
