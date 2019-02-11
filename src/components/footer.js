import React from 'react'
import styled from 'styled-components'
import sizes from '../_vars/sizes'
import colors from '../_vars/colors'

import '../layouts/global.scss'

const StyledFooter = styled.div`
  background: #222;
  color: white;
  /* height: 200px; */
  padding: ${sizes.padding1};
  z-index: 2;

  .main-column {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    div {
      max-width: 300px;
      min-width: 250px;

      &:first-of-type {
        margin-right: 1rem;
      }
      &:last-of-type {
        margin-bottom: calc(4 * ${sizes.padding1});
      }
    }
  }

  p {
    font-size: 1rem;
  }

  a {
    color: ${colors.accent};
  }
`
const Footer = ({ className }) => (
  <StyledFooter>
    <div className="main-column">
      <div>
        <p>
          <a
            href="http://typemedia.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeMedia
          </a>{' '}
          class of 2018
        </p>
        <p>All type designs the exclusive copyright of their creators.</p>
      </div>
      <div>
        <p>
          Site designed by{' '}
          <a href="http://www.katjaschimmel.de/">Katja Schimmel</a>,{' '}
          <a href="https://dribbble.com/zrin">Zrinka Buljubašić</a>,{' '}
          <a href="http://genramirez.com/">Gen Ramirez</a>,{' '}
          <a href="http://cargocollective.com/namratago">Namrata Goyal</a>, and{' '}
          <a href="https://stephennixon.com/">Stephen Nixon</a> with
          contributions from all of TypeMedia ’18. Site developed by Stephen
          Nixon.
        </p>
        <p>
          Typeface for text and navigation is [awesome typeface], generously
          donated by [wonderful foundry].
        </p>
      </div>
    </div>
  </StyledFooter>
)
export default Footer
