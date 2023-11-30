import React from "react";
import { StyledBox, StyledMenuBox, StyledLogo, StyledBoxMenuProfile} from "./StyledBox";
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
} from "../common/StyledIcons";
import { StyledTextUserMenu, StyledTextHeader, StyledTextLogo, StyledTextFooter } from "./StyledText";
import { StyledImgLogo, StyledTextImgLogo, StyledImgProfileMenu } from "../common/StyledImg";
import { StyledMenuItem } from "./StyledMenuItem";
import logo  from "../../assets/img/logo.png";
import textLogo from "../../assets/img/textLogo.png"
import { StyledButton } from "../common/StyledButton";
import { StyledLink } from "./StyledLink";
import users from "../../data/users.json"

export const Header = (props) => {
  const [open, setOpen] = React.useState(false);

  const user =  users.filter(user => user.email === localStorage.getItem("email"))

  return (
    <div>
            { open === true ? (
    
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
        <StyledLink to="/" activeClassName="active">Dashboard</StyledLink>
      </StyledMenuItem>
      <StyledMenuItem> 
        <StyledBookingIcon></StyledBookingIcon>
        <StyledLink to="/rooms" activeClassName="active">Room</StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledRoomsIcon></StyledRoomsIcon>
        <StyledLink to="/booking" activeClassName="active">Bookings</StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledContactIcon></StyledContactIcon>
        <StyledLink to="/contact" activeClassName="activeId">Contact</StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledUsersIcon></StyledUsersIcon>
        <StyledLink to="/users" activeClassName="active">Concierge</StyledLink>
      </StyledMenuItem>
      <StyledBoxMenuProfile>
        <StyledImgProfileMenu src={user[0].photo} width="70px" height="70px"></StyledImgProfileMenu>
        <StyledTextUserMenu fontSize="1rem" fontFamily="'Poppins', sans-serif" color= "#5D5449" weight="500" >{user[0].fullName}</StyledTextUserMenu>
        <StyledTextUserMenu fontSize="0.75rem" fontFamily="'Poppins', sans-serif" color= "#B2B2B2" weight="300" >{user[0].email}</StyledTextUserMenu>
        <StyledButton name="CONTACT_US">Contact Us</StyledButton>
      </StyledBoxMenuProfile>
      <StyledTextFooter name="travl">Travl Hotel Admin Dashboard</StyledTextFooter>
      <StyledTextFooter name="copy">© 2020 All Rights Reserved</StyledTextFooter>
      <StyledTextFooter name="made">Made with ♥ by Peterdraw</StyledTextFooter>
    </StyledMenuBox> ) : ''}
      <StyledBox isOpen={open}>
        <StyledMenuIcon onClick={() => {
          setOpen(!open)
          props.setIsOpen(!open)
        }}></StyledMenuIcon>
        <StyledTextHeader fontSize="1.7rem" color="#393939" fontFamily="'Poppins', sans-serif" weight="600">
          {props.title}
        </StyledTextHeader>
        <StyledHeartIcon></StyledHeartIcon>
        <StyledEmailIcon></StyledEmailIcon>
        <StyledBellIcon></StyledBellIcon>
        <StyledLogOutIcon></StyledLogOutIcon>
      </StyledBox>
    </div>
  );
};