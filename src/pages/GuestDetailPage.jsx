import React, {useState} from "react";
import { Header } from "../components/Header"
import booking from "../data/booking.json"
import { StyledBody } from "../styled/StyledBody";
import { StyledDetailContainer, StyledDetailPhotos, StyledDetailContent, StyledDetailContentPerson, StyledDetailImg, StyledDetailPersonText, StyledDetailText, StyledDetailActions, StyledDetailIconPhone, StyledDetailMessage, StyledDetailIconMessage, StyleDetailCheck, StyleDeailIn} from "../styled/StyledDetail";

export const GuestDetailPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const bookingId = booking[0]


  return (
    <>
      <Header setIsOpen={setIsOpen} title="Guest Detail"></Header>
      <StyledBody isOpen={isOpen}>
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
      </StyledBody>
    </>
  );
}