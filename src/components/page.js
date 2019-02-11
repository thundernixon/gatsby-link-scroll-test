import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import sizes from '../_vars/sizes'

const Wrapper = styled.div`
  width: 100%;
  padding-top: calc(${sizes.header} + 1rem);
`
const MainCol = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 0;
`

const ProjectPage = ({ className, children }) => (
  <Wrapper className={className}>
    <MainCol>{children}</MainCol>
  </Wrapper>
)

// ProjectPage.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default ProjectPage
