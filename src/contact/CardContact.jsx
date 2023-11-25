import React from "react";
import {StyledSwiper, StyledSwiperSlide, StyledSSText, StyledSSImg } from "../common/StyledCardContact";
import { Keyboard,  Navigation } from "swiper/modules";
import { useState } from "react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ModalComponent } from "../ModalComponent/ModalComponent";



export const CardContact = (props) => {

    const contact = props.contact
    const orderContactDate = contact.sort((a,b) => new Date(b.date) - new Date(a.date))
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [messageContact, setMessageContact] = useState("")


    return (
      <>

      <ModalComponent open={open} handleClose={handleClose} description={messageContact}></ModalComponent>

        <StyledSwiper
        slidesPerView={3}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}
        className="mySwiper"

      >
        {
            orderContactDate.map((contact) => (
            
            <StyledSwiperSlide key={contact.id} onClick={() => {handleOpen(), setMessageContact(contact.message)}}>
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
      </>
    )
}