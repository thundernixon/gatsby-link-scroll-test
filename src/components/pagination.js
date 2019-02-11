import React from 'react'
import { Link } from 'gatsby'
// import { Link } from './LinkToTop'
import styled from 'styled-components'
// import sizes from '../_vars/sizes'
import colors from '../_vars/colors'

const StyledPagination = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-top: 10vw;
  margin-bottom: 10vw;
  justify-content: space-between;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`

const PageButton = styled(Link)`
  display: block;
  border-radius: 0.75em;
  transition: 0.25s;
  background: ${colors.accent};
  padding: 1rem;
  text-decoration: none;
  color: ${colors.text};
  /* max-width: 32rem; */

  p {
    max-width: none;
    transition: 0.25s;
  }

  &:last-of-type {
    text-align: right;
  }

  &:hover {
    box-shadow: 0px 0px 15px ${colors.lightText};

    p:first-child {
      color: ${colors.accentColorful};
    }
  }
`

const Direction = styled.p`
  font-size: 1rem;
  color: ${colors.lightText};
  margin-bottom: 0;
`
const Project = styled.p`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
`
const Designer = styled.p`
  font-size: 1.25rem;
`

const Pagination = props => {
  return (
    <StyledPagination>
      <PageButton to={props.prevLink}>
        <Direction>← Previous Project</Direction>
        <Project>{props.prevProject}</Project>
        <Designer>{props.prevDesigner}</Designer>
      </PageButton>
      <PageButton to={props.nextLink}>
        <Direction>Next Project →</Direction>
        <Project>{props.nextProject}</Project>
        <Designer>{props.nextDesigner}</Designer>
      </PageButton>
    </StyledPagination>
  )
}
export default Pagination
