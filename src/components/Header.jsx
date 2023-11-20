import React from "react";
import { StyledBox, StyledSquare } from "../styled/StyledBox";
import {
  StyledBellIcon,
  StyledEmailIcon,
  StyledHeartIcon,
  StyledMenuIcon,
  StyledMessageIcon,
  StyledSearchIcon,
} from "../styled/StyledIcons";
import { StyledTextHeader } from "../styled/StyledText";
import { StyledSearch } from "../styled/StyledSearch";
import { InputAdornment } from "@mui/material";
import { FormControl, NativeSelect } from "@mui/material";
import { StyledFormControl, StyledNativeSelect } from "../styled/StyledSelect";

export const Header = () => {
  const [lang, setLang] = React.useState("");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <>
      <StyledBox>
        <StyledMenuIcon></StyledMenuIcon>
        <StyledTextHeader fontSize="1.7rem" color="#262626">
          Guest List
        </StyledTextHeader>
        <StyledSearch
        disableUnderline={true}
          endAdornment={
            <InputAdornment position="start">
              <StyledSearchIcon></StyledSearchIcon>
            </InputAdornment>
          }
        ></StyledSearch>
        <StyledHeartIcon></StyledHeartIcon>
        <StyledEmailIcon></StyledEmailIcon>
        <StyledBellIcon></StyledBellIcon>
        <StyledMessageIcon></StyledMessageIcon>
        <StyledSquare></StyledSquare>

        <FormControl>
          <StyledNativeSelect
          disableUnderline={true}
          style={{color: "#E23428"}}
            defaultValue={10}
          >
            <option value={10}>EN</option>
            <option value={20}>ES</option>
          </StyledNativeSelect>
        </FormControl>
      </StyledBox>
    </>
  );
};
