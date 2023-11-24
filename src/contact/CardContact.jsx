import React from "react";
import {StyledSwiper, StyledSwiperSlide, StyledSSText, StyledSSImg } from "../common/StyledCardContact";
import { Keyboard,  Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



export const CardContact = (props) => {

    const contact = props.contact
    const orderContactDate = contact.sort((a,b) => new Date(b.date) - new Date(a.date))


    return (
        <StyledSwiper
        slidesPerView={3}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}

      >
        {
            orderContactDate.map((contact) => (
            
            <StyledSwiperSlide key={contact.id}>
                <StyledSSText name="message">{contact.message}</StyledSSText>
                <div style={{display: 'flex'}}>
                <StyledSSImg src={contact.userImg}></StyledSSImg>
                <div>
                <StyledSSText name="title">{contact.name} {contact.surname}</StyledSSText>
                <StyledSSText name="subtitle">{
                
                Math.floor((Date.now() - new Date(contact.date)) / 1000 / 60)
                
                
                }m ago</StyledSSText>
                </div>
                
                </div>
            </StyledSwiperSlide>

            ))
        }

      </StyledSwiper>
    )
}