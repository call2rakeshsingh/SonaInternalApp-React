import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`

`;

export const NavLink = styled(Link)`

${'' /* color: white;

align-items: center;
justify-content: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 1.1vw;
font-weight: bold;
font-family: sans-serif; */}


&:hover {
	color: yellow;
}

&.active {
	color: rgb(238, 255, 198);
	text-decoration: underline;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;

`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0px auto;

`;
