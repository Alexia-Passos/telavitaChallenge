import React from "react";
import { HomeHeaderContainer, HomeHeaderButton} from './home-header.styles'

export default function HomeHeader (props) {
  return (
    <div>
      <HomeHeaderContainer>
          <HomeHeaderButton onClick={() => {props.renderProps(true)}}>Listar Animes</HomeHeaderButton>   
          <HomeHeaderButton onClick={() => {props.renderProps(false)}}>Listar Mangas</HomeHeaderButton>   
      </HomeHeaderContainer>  
    </div>
  )
}