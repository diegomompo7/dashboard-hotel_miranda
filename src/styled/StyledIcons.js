import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { FiAlignLeft, FiBell } from "react-icons/fi";
import { MdOutlineMail, MdOutlineMessage } from "react-icons/md";
import styled from "styled-components";

const styleIcons = `
    width: 24px;
    height: 24px
    
`

const styleIconsHeader = `
       margin-top: 51px;
       margin-left: 57px;
`

export const StyledMenuIcon = styled(FiAlignLeft)`
        margin-top: 51px;
        margin-left: 41px;
        ${styleIcons}
`
export const StyledSearchIcon = styled(IoIosSearch)`
       ${styleIcons}
      
`
export const StyledHeartIcon = styled(IoMdHeartEmpty)`
       ${styleIcons};
       margin-top: 51px;
       margin-left: 52px;

`
export const StyledEmailIcon = styled(MdOutlineMail)`
       ${styleIcons};
       ${styleIconsHeader};

`
export const StyledBellIcon = styled(FiBell)`
       ${styleIcons};
       ${styleIconsHeader};

`
export const StyledMessageIcon = styled(MdOutlineMessage)`
       ${styleIcons};
       ${styleIconsHeader};

`