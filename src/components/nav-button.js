import React from 'react'
import styled from 'styled-components'
import sizes from '../_vars/sizes'
import colors from '../_vars/colors'

const StyledNavButton = styled.div`
  border-radius: 0.75em;
  transition: 0.5s;
  background: #ddd;
  z-index: 99997;
  overflow: hidden;
  display: grid;
  align-content: center;
  height: ${sizes.headerHeight};
  /* padding: 0.5rem 0.75rem; */

  box-shadow: ${colors.shadow};

  a {
    display: block;
    color: ${colors.card};
    font-weight: 700;
    text-decoration: none;
    transition: 0.25s ease;
    border-bottom: 1px solid transparent;
    padding: 0.5rem 0.75rem;

    &:hover {
      color: ${colors.accentColorful};
      /* background: ${colors.accent}; */
    }
  }

  svg {
    display: block;
    margin: 0.5rem 0.75rem;
  }
`
const NavButton = ({ className, children }) => (
  <StyledNavButton className={className}>{children}</StyledNavButton>
)
export default NavButton
