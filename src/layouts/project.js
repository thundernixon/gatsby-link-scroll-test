import React from 'react';
import { Link, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Header from '../components/header';
import Footer from '../components/footer';
import Pagination from '../components/pagination';
import Img from 'gatsby-image';

import './global.scss';
import sizes from '../_vars/sizes';
import colors from '../_vars/colors';
// import ProjectPage from './page'

// const StyledLayout = styled(GlobalLayout)``

// const StyledPage = styled(ProjectPage)`
//   display: block;
// `

const heroHeight = `66.66vmin`;

const Hero = styled.div`
	width: 100%;
	z-index: 1;
	position: fixed;
	height: ${heroHeight};
	overflow: hidden;

	.gatsby-image-wrapper {
		height: 100%;
	}
`;

const StyledPage = styled.div`
  /* display: grid; */
  margin-top: ${heroHeight};
  z-index: 2;
  background-color: ${colors.projectBackground};
  min-height: 100vh;
  padding: 0 1rem;
  /* padding-top: calc(${sizes.headerHeight} + 1rem); */
  `;

const StyledFooter = styled(Footer)`
	z-index: 2;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${fadeIn} 1s linear forwards;
  display: grid;
  /* background-color: #fefefe; */
  min-height: 100vh;
  width: 100%;
  margin: 0;
  /* padding: 0 1rem;
  padding-top: calc(${sizes.headerHeight} + 1rem); */
`;

const MainCol = styled.article`
	margin: 0 auto 5vmax;

	h1,
	h2,
	h3,
	h4 {
		grid-column: 1 / -1;
	}
`;

const Intro = styled.header`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 0rem 2.5rem;
	margin-top: 5vw;
	margin-bottom: 3rem;
	@media (min-width: 800px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: 1200px) {
		grid-template-columns: 2fr 1fr;
	}

	p {
		margin-top: 0;
	}
`;

const Project = styled.h1`
	font-size: calc(1.5rem + 0.5vw);
	font-weight: 900;
	margin: 1rem 0 0;
`;
const Designer = styled.h2`
	font-size: calc(1.5rem + 0.5vw);
	font-weight: 400;
	margin: 1rem 0 0;
`;
const WebLinks = styled.ul`
	list-style: none;
	padding: 0;
	margin-top: 1em;
	li {
		display: inline-block;
		padding-right: 1rem;
		line-height: 1.5;
	}
	li:before {
		content: '→ ';
	}
	a {
		color: ${colors.accentColorful};
		transition: 0.25s ease;

		&:hover {
			color: ${colors.text};
		}
	}
`;

const MainContent = styled.section`
	/* main body area of post */
	& > div {
		display: grid;
		grid-gap: 1rem;
		/* grid-template-columns: 1fr; */
		/* grid-auto-flow: row; */

		/* only <p> at top level (e.g. not images) */
		& > p {
			max-width: 60ch;
		}

		p + p {
			margin-top: 0;
		}

		img {
			border-radius: 0.5rem;
		}

		/* https://fvsch.com/css-locks/ */
	}
`;

function ProjectPage({ data, pageContext, className }) {
	const links = data.mdx.frontmatter.links;

	const socialLinks = links.map((link, index) => (
		<li key={index} className="fluid-text">
			<a href={link.split(',')[1]} target="_blank" rel="noopener noreferrer">
				{link.split(',')[0]}
			</a>
		</li>
	));

	const prev = pageContext.prev;
	const next = pageContext.next;

	return (
		<Wrapper>
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
			<Hero>
				<Img
					title="Project header image"
					alt={data.mdx.frontmatter.project}
					fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid}
				/>
			</Hero>
			<StyledPage>
				<MainCol className="main-column">
					<Intro>
						<div>
							<Project>{data.mdx.frontmatter.project}</Project>
							<p className="fluid-text">{data.mdx.frontmatter.description}</p>
						</div>
						<div>
							<Designer>{data.mdx.frontmatter.designer}</Designer>
							<p className="fluid-text">{data.mdx.frontmatter.bio}</p>
							<WebLinks>{socialLinks}</WebLinks>
						</div>
					</Intro>
					<MainContent>
						<MDXRenderer>{data.mdx.code.body}</MDXRenderer>
					</MainContent>

					<Pagination
						prevLink={prev.fields.slug}
						prevProject={prev.frontmatter.project}
						prevDesigner={prev.frontmatter.designer}
						nextLink={next.fields.slug}
						nextProject={next.frontmatter.project}
						nextDesigner={next.frontmatter.designer}
					/>
				</MainCol>
			</StyledPage>
			<StyledFooter className={className} />
		</Wrapper>
	);
}

export default ProjectPage;

export const pageQuery = graphql`
	query ProjectQuery($id: String) {
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
		mdx(id: { eq: $id }) {
			id
			frontmatter {
				project
				description
				designer
				bio
				links
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 2000) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			code {
				body
			}
		}
	}
`;
