import React from 'react';
import styled from 'styled-components';
import sizes from '../_vars/sizes';
import colors from '../_vars/colors';

import '../layouts/global.scss';

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
`;
const Footer = ({ className }) => (
	<StyledFooter>
		<div className="main-column">
			<div>
				<p>Gatsby Link Scroll Test</p>
				<p>This site is a design in progress.</p>
			</div>
			<div>
				<p>
					Site created to test GatsbyJS Issue <a href="https://github.com/gatsbyjs/gatsby/issues/7454">#7454</a>.
				</p>
				<p>Typeset in IBM Plex.</p>
			</div>
		</div>
	</StyledFooter>
);
export default Footer;
