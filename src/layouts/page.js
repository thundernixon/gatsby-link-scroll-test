import React from 'react'
import styled from 'styled-components'
import sizes from '../_vars/sizes'

const Wrapper = styled.div`
  width: 100%;
  /* padding-top: calc(${sizes.header} + 1rem); */
  padding: 0;
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

export default ProjectPage
