import React from "react";
import { HomeCard ,HomeCardsImage, HomeCardsTitle, HomeCardsDescription, HomeCardsText } from './home-card.styles'

export default function HomeCards (props) {
  return (
    <div>
      <HomeCard >
        <HomeCardsImage alt="animePoster" src={props.image ? props.image : 'https://t4.ftcdn.net/jpg/01/60/28/25/360_F_160282536_phkmQJ06kTyA8mAYnCXvWKrfup1HJVCz.jpg'}/>
        <HomeCardsTitle>{props.name}</HomeCardsTitle>
        <HomeCardsDescription>{props.description}</HomeCardsDescription>
        <HomeCardsText><b>{props.title ? `Também conhecido como: ${props.title}` : " "}</b></HomeCardsText>
      </HomeCard> 
    </div>
  )
}