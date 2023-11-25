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
  StyledDetailTextContainer,
  StyledDetailSwiperSlide,
  StyleDetailStatus
} from "./StyledDetail";

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { StyledMoreIcon } from "../common/StyledIcons";

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
              <StyledMoreIcon name="moreDetail"></StyledMoreIcon>
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
          <StyledDetailSwiper
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {bookingId.roomType.photos.map((element) => (
              <StyledDetailSwiperSlide key={element} img={element}>
                <StyleDetailStatus typeStyle={bookingId.status}>
                    {bookingId.status}
                </StyleDetailStatus>
                <StyledDetailTextContainer>
                  <StyledDetailText typeStyle="roomType">
                    {bookingId.roomType.roomType}
                  </StyledDetailText>
                  <StyledDetailText typeStyle="roomDescription">
                    {bookingId.roomType.description}
                  </StyledDetailText>
                </StyledDetailTextContainer>
              </StyledDetailSwiperSlide>
            ))}

<div className="swiper-button-next"><IoIosArrowRoundForward /></div>
      <div className="swiper-button-prev"><IoIosArrowRoundBack /></div>
          </StyledDetailSwiper>
        </StyledDetailContainer>
      }
    </>
  );
};
