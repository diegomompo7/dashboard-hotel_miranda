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
import { StyledLink } from "../styled/StyledLink";

export const Header = () => {
  const [open, setOpen] = React.useState(false);


  return (
    <div style={{display: 'flex'}}>
    { open === true &&
    <StyledMenuBox >
      <StyledLogo>
        <StyledImgLogo src={logo} width="47px" height="40px"></StyledImgLogo>
        <StyledTextLogo fontSize="0.75rem" fontFamily="'Poppins', sans-serif" color= "#5D5449" weight="300">
            <StyledTextImgLogo src={textLogo} width="72px" height="23px"></StyledTextImgLogo>
            <p>Hotel Admin Dashboard</p>
        </StyledTextLogo>
      </StyledLogo>

      <StyledMenuItem>
        <StyledDashboardIcon></StyledDashboardIcon>
        <StyledLink to="/">Dashboard</StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledBookingIcon></StyledBookingIcon>
        <StyledLink to="/rooms">Room</StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledRoomsIcon></StyledRoomsIcon>
        <StyledLink to="/booking">Bookings</StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledContactIcon></StyledContactIcon>
        <StyledLink to="/contact">Guest</StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledUsersIcon></StyledUsersIcon>
        <StyledLink to="/users">Concierge</StyledLink>
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
    </StyledMenuBox> }
      <StyledBox>
        <StyledMenuIcon onClick={() => setOpen(!open)}></StyledMenuIcon>
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
