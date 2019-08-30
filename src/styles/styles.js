import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

const linkStyles = `
  color: #333333;
  &:visited {
    color: #333333;
  }
`;

export const StyledLink = styled(Link)`
  ${linkStyles}
`;

export const StyledNavLink = styled(NavLink)`
  ${linkStyles}
  &.active {
    color: #444444;
    text-decoration: underline;
  }
`;
