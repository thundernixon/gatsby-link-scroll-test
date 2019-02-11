import React from 'react'
import styled from 'styled-components'
// import Img from 'gatsby-image'

const ImageFullWidthWrapper = styled.div`
  /* border: green solid 10px; */
  grid-column: 1/-1;

  img {
    width: 100%;
  }

  p {
    margin: 0;
    max-width: 100%;
  }
`

const ImageFullWidth = props => (
  <ImageFullWidthWrapper>{props.children}</ImageFullWidthWrapper>
)

export default ImageFullWidth
