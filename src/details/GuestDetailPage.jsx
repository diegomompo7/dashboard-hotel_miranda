import React, {useState} from "react";
import booking from "../data/booking.json"
import { StyledDetailContainer, StyledDetailPhotos, StyledDetailContent, StyledDetailContentPerson, StyledDetailImg, StyledDetailPersonText, StyledDetailText, StyledDetailActions, StyledDetailIconPhone, StyledDetailMessage, StyledDetailIconMessage, StyleDetailCheck} from "./StyledDetail";

export const GuestDetailPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const bookingId = booking[0]


  return (
    <>
        {
          <StyledDetailContainer key={bookingId.id}>
            <StyledDetailContent>
              <StyledDetailContentPerson>
                <StyledDetailImg src={bookingId.userImg}></StyledDetailImg>
                <StyledDetailPersonText>
                  <StyledDetailText typeStyle="semibold">{bookingId.name} {bookingId.surname}</StyledDetailText>
                  <StyledDetailText typeStyle="id">#{bookingId.id}</StyledDetailText>
                  <StyledDetailActions>
                    <StyledDetailIconPhone></StyledDetailIconPhone>
                    <StyledDetailMessage>
                      <StyledDetailIconMessage></StyledDetailIconMessage>
                      <StyledDetailText typeStyle="message">Send Message</StyledDetailText>
                    </StyledDetailMessage>
                  </StyledDetailActions>
                </StyledDetailPersonText>
              </StyledDetailContentPerson>
              <StyleDetailCheck>
                <div>
                  <StyledDetailText typeStyle="normal"> Check In</StyledDetailText>
                  <StyledDetailText typeStyle="checkMedium"> {bookingId.check_in} | {bookingId.hour_in} </StyledDetailText>
                </div>
                <div>
                  <StyledDetailText typeStyle="normal"> Check out</StyledDetailText>
                  <StyledDetailText typeStyle="checkMedium">{bookingId.check_out} | {bookingId.hour_out} </StyledDetailText>
                </div>
              </StyleDetailCheck>
            </StyledDetailContent>
            <StyledDetailPhotos></StyledDetailPhotos>
          </StyledDetailContainer>

        }
    </>
  );
}