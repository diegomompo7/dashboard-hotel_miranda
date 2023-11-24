import React, { useState } from "react";
import booking from "../data/booking.json";
import {
  StyledDetailContainer,
  StyledDetailSwiper,
  StyledDetailContent,
  StyledDetailContentPerson,
  StyledDetailImg,
  StyledDetailPersonText,
  StyledDetailText,
  StyledDetailActions,
  StyledDetailIconPhone,
  StyledDetailMessage,
  StyledDetailIconMessage,
  StyleDetailCheck,
  StyledDetailLine,
  StyledDetailInfo,
  StyledDetailInfoRoom,
  StyledDetailInfoPrice,
  StyledDetailAmenities,
  StyledDetailAmeContainer,
  StyledDetailSwiperImg,
  StyledDetailSwiperSlide,
} from "./StyledDetail";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const GuestDetailPage = () => {
  const bookingId = booking[0];

  return (
    <>
      {
        <StyledDetailContainer key={bookingId.id}>
          <StyledDetailContent>
            <StyledDetailContentPerson>
              <StyledDetailImg src={bookingId.userImg}></StyledDetailImg>
              <StyledDetailPersonText>
                <StyledDetailText typeStyle="semibold">
                  {bookingId.name} {bookingId.surname}
                </StyledDetailText>
                <StyledDetailText typeStyle="id">
                  ID {bookingId.id}
                </StyledDetailText>
                <StyledDetailActions>
                  <StyledDetailIconPhone></StyledDetailIconPhone>
                  <StyledDetailMessage>
                    <StyledDetailIconMessage></StyledDetailIconMessage>
                    <StyledDetailText typeStyle="message">
                      Send Message
                    </StyledDetailText>
                  </StyledDetailMessage>
                </StyledDetailActions>
              </StyledDetailPersonText>
            </StyledDetailContentPerson>
            <StyleDetailCheck>
              <div>
                <StyledDetailText typeStyle="normal">
                  {" "}
                  Check In
                </StyledDetailText>
                <StyledDetailText typeStyle="checkMedium">
                  {" "}
                  {bookingId.check_in} | {bookingId.hour_in}{" "}
                </StyledDetailText>
              </div>
              <div>
                <StyledDetailText typeStyle="normal">
                  {" "}
                  Check out
                </StyledDetailText>
                <StyledDetailText typeStyle="checkMedium">
                  {bookingId.check_out} | {bookingId.hour_out}{" "}
                </StyledDetailText>
              </div>
            </StyleDetailCheck>
            <StyledDetailLine />
            <StyledDetailInfo>
              <StyledDetailInfoRoom>
                <StyledDetailText typeStyle="normal">
                  Room Info
                </StyledDetailText>
                <StyledDetailText typeStyle="infoMedium">
                  {bookingId.roomType.roomNumber}
                </StyledDetailText>
              </StyledDetailInfoRoom>
              <StyledDetailInfoPrice>
                <StyledDetailText typeStyle="normal">Price</StyledDetailText>

                <div style={{ display: "flex" }}>
                  <StyledDetailText typeStyle="infoMedium">
                    ${bookingId.roomType.priceNight}
                  </StyledDetailText>
                  <StyledDetailText typeStyle="perNight">
                    {" "}
                    /night
                  </StyledDetailText>
                </div>
              </StyledDetailInfoPrice>
            </StyledDetailInfo>
            <StyledDetailText typeStyle="normalDesc">
              {bookingId.specialRequest}
            </StyledDetailText>
            <StyledDetailAmeContainer>
              <StyledDetailText typeStyle="normalFacilities">
                Facilites
              </StyledDetailText>
              <StyledDetailAmenities>
                {bookingId.roomType.amenities.map((amenities) => (
                  <StyledDetailText key={amenities} typeStyle="amenities">
                    {amenities}
                  </StyledDetailText>
                ))}
              </StyledDetailAmenities>
            </StyledDetailAmeContainer>
          </StyledDetailContent>
          <StyledDetailSwiper navigation={true} modules={[Navigation]} className="mySwiper">
              {
                bookingId.roomType.photos.map((element) => (
                  <StyledDetailSwiperSlide key={element} img={element}>
                    <p>iaj+a+ja</p>
                  </StyledDetailSwiperSlide>
                ))
              }
      </StyledDetailSwiper>
        </StyledDetailContainer>
      }
    </>
  );
};
