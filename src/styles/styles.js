import styled from "@emotion/styled";
import { Link } from "@reach/router";

export const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: #333333;
  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: #333333;
  }
`;