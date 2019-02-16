import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
// import posed from 'react-pose'
// import TransitionLink from 'gatsby-plugin-transition-link'
import Header from '../components/header';
import colors from '../_vars/colors';

import './global.scss';

// const StyledHeader = styled(Header)`
//   position: fixed;
// `

const Global = styled.div`
  /* background-color: ${colors.projectBackground}; */
  background-color: ${colors.homeBackground};

`;

const GlobalLayout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteHeaderQuery {
				site {
					siteMetadata {
						title
					}
				}
				allMdx(sort: { order: ASC, fields: [frontmatter___project] }) {
					edges {
						node {
							id
							excerpt
							frontmatter {
								project
								designer
							}
							fields {
								slug
							}
						}
					}
				}
			}
		`}
		render={data => (
			<Global>
				<Header title={data.site.siteMetadata.title}>
					{data.allMdx.edges.map(({ node }) => (
						<li key={node.id}>
							<Link to={node.fields.slug}>
								<span>{node.frontmatter.designer}</span>
								<span>{node.frontmatter.project}</span>
							</Link>
						</li>
					))}
				</Header>
				<div>{children}</div>
			</Global>
		)}
	/>
);
// }
// }

export default GlobalLayout;
