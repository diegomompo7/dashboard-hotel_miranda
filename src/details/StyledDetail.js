import { Text } from "@chakra-ui/react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";


export const StyledDetailContainer = styled(Box)`
    display: flex;
    height: 830px;

`
export const StyledDetailContent = styled(Box)`
    width: 50%;
    background: #FFFFFF;
    border-radius: 0.75em;
    padding-left: 5.4%;
    
`
export const StyledDetailContentPerson = styled.div`
    display: flex;
    padding-top: 2.5em;
    margin-bottom: 2em;
    
`
export const StyledDetailImg = styled.img`
    width: 9.75em;
    height: 9.75em;
`
export const StyledDetailPersonText = styled(Box)`
    margin-left: 5.2%;
`
export const StyledDetailText = styled(Text) `

    font-family: "Poppins", sans-serif;

    ${props => props.typeStyle === "semibold" && `
    
        font-size: 1.875rem;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 0.433em;
        
    `}
    ${props => props.typeStyle === "id" && `
    
    font-size: 0.875rem;
    font-weight: 400;
    color: #799283;
    margin-top: 0;
    margin-bottom: 1.5em;
    
`}
${props => props.typeStyle === "message" && `
    
font-size: 1rem;
font-weight: 500;
color: #FFFFFF;
padding-left: 1.438em;
padding-right: 1.625em;

`}

${props => props.typeStyle === "normal" && `
    
font-size: 0.875rem;
font-weight: 400;
color: #6E6E6E;
margin-bottom 0.714em;
`}

${props => props.typeStyle === "normalFacilities" && `
    
font-size: 0.875rem;
font-weight: 500;
color: #6E6E6E;
margin: 0;
`}

${props => props.typeStyle === "checkMedium" && `
    
font-size: 1rem;
font-weight: 500;
color: #212121;
margin: 0;
padding-right: 72px;
`}

${props => props.typeStyle === "infoMedium" && `
    
font-size: 1.5rem;
font-weight: 500;
color: #212121;
margin: 0;
`}

${props => props.typeStyle === "perNight" && `
    
font-size: 0.875rem;
font-weight: 400;
color: #799283;
padding-left: 0.857em;
`}
${props => props.typeStyle === "normalDesc" && `
    
font-size: 0.875rem;
font-weight: 400;
color: #363636;
line-height: 1.5em;
margin-top: 2.142em;
width: 90.7%;
`}
${props => props.typeStyle === "amenities" && `
    
font-size: 1rem;
font-weight: 600;
color: #2c6a5a;
background: #e8f2ef;
padding: 13px 15px 13px 15px;
margin-right: 13px;
`}

`

export const StyledDetailActions = styled(Box)`

 display: flex;

`
export const StyledDetailIconPhone = styled(FaPhoneAlt)`
    width: 1.25em;
    width: 1.25em;
    padding: 1.25em 1.25em 1.25em 1.04%;
    color: #135846;
`

export const StyledDetailMessage = styled(Box) `
    background: #135846;
    display: flex;
    border-radius: 0.75em;
    width: 100%
`

export const StyledDetailIconMessage = styled(MdOutlineMessage)`
    color: #FFFFFF;
    width: 1.5em;
    height: 1.5em;
    padding-top: 1.063em;
    padding-left: 1.125em;

`

export const StyleDetailCheck = styled(Box)`
    display: flex;

`

export const StyledDetailLine = styled.hr`
    margin: 20px 0 0;
    width: 97%
`

export const StyledDetailInfo = styled(Box)`
    display:flex;
    margin-top: 1.3125em;
`

export const StyledDetailInfoRoom = styled(Box)`
    margin-right: 13.1%
`
export const StyledDetailInfoPrice = styled(Box)`

`

export const StyledDetailAmeContainer= styled(Box)`
    margin-top: 2em;
 display: flex;
 flex-wrap: wrap;
 width: 78.8%;
`

export const StyledDetailAmenities= styled(Box)`
 display: flex;
 flex-wrap: wrap;
 margin-left: 0;
`

export const StyledDetailSwiper = styled(Swiper)`
    width: 50%;
    border-radius: 0.75em;
`


export const StyledDetailSwiperImg = styled.div`

    background-image: url(${props => props.img})
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;`

export const StyledDetailSwiperSlide = styled(SwiperSlide)`
  border-radius: 1.25em;
  width: 22.4%;
  height: auto;
  background-image: url(${props => props.img});
  background-size: 100% ;
  z-index: -1;
`;