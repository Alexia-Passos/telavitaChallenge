import React from "react";
import { HomePaginationButton, HomePaginationContainer } from './home-pagination.styles'

export default function HomePagination(props) {
  return (
    <HomePaginationContainer>
        {Array.from(Array(props.numberOfPage), (item, index) => {
          return (
            <HomePaginationButton
              key={index}
              value={index}
              onClick={(e) => {
                props.setCurrentPage(Number(e.target.value));
              }}
            >
              {index + 1}
            </HomePaginationButton>
          );
        })}
      </HomePaginationContainer>
  )
}