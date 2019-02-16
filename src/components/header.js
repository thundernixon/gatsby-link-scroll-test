import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import NavButton from './nav-button';
import IconMenu from './icon-menu';
import colors from '../_vars/colors';

import '../layouts/global.scss';

// let menuWidthCollapsed = '14rem'
let menuWidthCollapsed = '7rem';
let menuHeightCollapsed = '2.5rem';
let menuWidthExpanded = '20rem';
let menuHeightExpanded = '12rem';

let menuTransitionTime = `0.25`;

const Nav = styled.nav`
	z-index: 999;
	position: fixed;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem;
	width: 100vw;
	height: ${menuHeightCollapsed};
`;

const Names = styled.div`
	transform-origin: top;
	transition: 0.5s;
`;

const Menu = styled(NavButton)`
	overflow: hidden;
	align-content: start;
	width: ${menuWidthCollapsed};
	height: ${menuHeightCollapsed};
	z-index: 99997;
	position: relative;

	width: ${props => (props.menuOpen ? menuWidthExpanded : menuWidthCollapsed)};
	height: ${props => (props.menuOpen ? menuHeightExpanded : menuHeightCollapsed)};

	transition: ${props =>
		props.menuOpen
			? `background-color 0.5s, width 0.25s, height 0.25s 0.25s`
			: `background-color 0.5s, height 0.25s, width 0.25s 0.25s`};

	svg path {
		stroke: ${props => (props.menuOpen ? colors.accentColorful : colors.text)};
	}

	ul {
		list-style: none;
		padding-left: 0;
		display: ${props => (props.menuOpen ? 'block' : 'none')};
	}
	li a {
		display: grid;
		grid-template-columns: 60% 40%;
		line-height: 2em;
		padding: 0 1rem;

		&:hover {
			background: ${colors.accent};
		}
	}
	li a span:last-of-type:before {
		content: '→ ';
		transition: margin-left 0.25s;
	}
	li a:hover span:last-of-type:before {
		margin-left: -0.75em;
	}
	ul a:hover {
		color: ${colors.accentColorful};
	}
`;

const StyledIcon = styled.button`
  background-color: transparent;
  transition: 0.25s ease;
  border: none;
  margin: 0.25em;
  padding: 0;
  border-radius: 0.6rem;
  height: calc( ${menuHeightCollapsed} - 0.375rem);
  &:hover {
    background-color: ${colors.accent};
    cursor: pointer;
  }
  &:focus {
    outline: none;
    /* outline: 4px ${colors.accentColorful} solid; */
    background-color: ${colors.accent};
    /* border: 4px ${colors.accentColorful} solid; */
  }
`;

const SiteTitle = styled.div`
	display: grid;
	align-items: center;
	justify-content: space-between;
	height: var(--menu-height-collapsed);
	grid-template-rows: 1fr;
	grid-template-columns: auto auto;

	a {
		/* full name */
		span {
			display: block;
			transition: ${menuTransitionTime}s;
		}
		span#fullName {
			transform: ${props => (props.menuOpen ? `translateX(0%)` : `translateX(-150%)`)};
		}
		/* short name */
		span#shortName {
			transform: ${props => (props.menuOpen ? `translateX(-150%)` : `translateX(0%)`)};
		}
	}
`;

const MenuScrim = styled.div`
  /* display: ${props => (props.menuOpen ? 'block' : 'none')}; */
  pointer-events: ${props => (props.menuOpen ? 'auto' : 'none')};
  background: ${props => (props.menuOpen ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0)')};
  /* background: rgba(0, 0, 0, 0.25); */
  transition: ${menuTransitionTime}s;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

// const AboutButton = styled(NavButton)`
//   display: ${props => (props.menuOpen ? 'none' : 'grid')};
// `

// const Header = props => {

export default class Header extends React.Component {
	state = {
		menuOpen: false,
		fullName: false
	};

	toggleMenu = () => {
		let menuOpen = !this.state.menuOpen;
		this.setState({
			menuOpen
		});
		setTimeout(() => {
			this.setState(prev => ({
				fullName: !prev.fullName
			}));
		}, menuTransitionTime * 1000);
	};

	render() {
		// <TransitionPortal>
		return (
			<Nav>
				<MenuScrim menuOpen={this.state.menuOpen} onClick={this.toggleMenu} />
				<Menu menuOpen={this.state.menuOpen}>
					<SiteTitle menuOpen={this.state.menuOpen}>
						<Link
							onClick={this.state.menuOpen ? this.toggleMenu : false}
							fullName={this.state.fullName}
							menuOpen={this.state.menuOpen}
							to="/">
							{this.state.fullName ? (
								<span id="fullName"> {this.props.title} </span>
							) : (
								<span id="shortName"> Test </span>
							)}
						</Link>
						<StyledIcon onClick={this.toggleMenu} onFocus={this.toggleMenu} menuOpen={this.state.menuOpen}>
							<IconMenu />
						</StyledIcon>
					</SiteTitle>
					<Names>
						<ul onClick={this.toggleMenu}> {this.props.children} </ul>
					</Names>
				</Menu>
			</Nav>
		);
	}
}
