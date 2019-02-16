import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import GlobalLayout from '../layouts/global-layout';
// import Page from '../components/page'
import SEO from '../components/seo';

// import colors from '../_vars/colors';
// import sizes from '../_vars/sizes';

// import './global.scss'

const Wrapper = styled.div`
	display: grid;
	min-height: 100vh;
	width: 100%;
	margin: 0;
`;

const StyledPage = styled.div`
	color: white;
	display: grid;
	justify-content: center;
	align-content: center;
`;

const StyledLink = styled(Link)`
	display: block;
	background: white;
	padding: 2rem;
	width: 300px;
	height: 100px;
	border-radius: 1rem;
`;

class IndexPage extends Component {
	render() {
		return (
			<GlobalLayout>
				<Wrapper>
					<StyledPage className="page-wrapper">
						<SEO title="Home" keywords={['typemedia', 'type design', '2018', 'KABK']} />
						<h1>Welcome home</h1>
						<StyledLink to="/1-one">Go to Font1</StyledLink>
					</StyledPage>
				</Wrapper>
			</GlobalLayout>
		);
	}
}

export default IndexPage;
