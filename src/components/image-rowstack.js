import React from 'react'
import styled from 'styled-components'
// import Img from 'gatsby-image'

const ImageRowStackWrapper = styled.div`
  /* border: red solid 4px; */

  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: 650px) {
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  }

  /* display: block;

  div {
    display: flex;
    justify-content: space-between;
    height: auto !important;
  } */

  img {
    /* width: 50%; */
    /* max-width: 800px; */
    height: auto !important;
    /* display: block; */
  }

  p {
    grid-column: auto;
    margin: 0;
    display: block;
    max-width: 100%;
  }
`

const ImageRowStack = props => (
  //   <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  <ImageRowStackWrapper>{props.children}</ImageRowStackWrapper>
)
export default ImageRowStack
