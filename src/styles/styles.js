import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

const linkStyles = `
font-size: 20px;
text-decoration: none;
color: #333333;
&:hover {
  text-decoration: underline;
}
&:visited {
  color: #333333;
}`;

export const StyledLink = styled(Link)`
  ${linkStyles}
`;

export const StyledNavLink = styled(NavLink)`
  ${linkStyles}
  &.active {
    text-decoration: underline;
  }
`;
