import React, { Component } from 'react';
import { Link } from 'gatsby';
// import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'
import { TransitionState } from 'gatsby-plugin-transition-link';
import posed from 'react-pose';
import styled from 'styled-components';

import GlobalLayout from '../layouts/global-layout';
// import Page from '../components/page'
import SEO from '../components/seo';

import colors from '../_vars/colors';
import sizes from '../_vars/sizes';

// import './global.scss'

import { TimelineMax, Power1 } from 'gsap';

const PosedContainer = posed.div({
	hidden: {
		opacity: 0,
		x: '-100%'
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 250 }
	}
});

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
	constructor(props) {
		super(props);

		this.verticalAnimation = this.verticalAnimation.bind(this);

		this.layoutContents = React.createRef();
		this.transitionCover = React.createRef();
	}
	verticalAnimation = ({ length }, direction) => {
		const directionTo = direction === 'up' ? '-100%' : '100%';
		const directionFrom = direction === 'up' ? '100%' : '-100%';

		// convert ms to s for gsap
		const seconds = length;

		return new TimelineMax()
			.set(this.transitionCover, { y: directionFrom })
			.to(this.transitionCover, seconds / 2, {
				y: '0%',
				ease: Power1.easeInOut
			})
			.set(this.layoutContents, { opacity: 0 })
			.to(this.transitionCover, seconds / 2, {
				y: directionTo,
				ease: Power1.easeIn
			});
	};
	render() {
		return (
			<TransitionState>
				{({ transitionStatus }) => {
					return (
						<PosedContainer pose={['entering', 'entered'].includes(transitionStatus) ? 'visible' : 'hidden'}>
							<GlobalLayout>
								<Wrapper>
									<StyledPage className="page-wrapper">
										<SEO title="Home" keywords={['typemedia', 'type design', '2018', 'KABK']} />
										<h1>Welcome home</h1>
										<StyledLink to="/1-one">Go to Font1</StyledLink>
									</StyledPage>
								</Wrapper>
							</GlobalLayout>
						</PosedContainer>
					);
				}}
			</TransitionState>
		);
	}
}

export default IndexPage;
