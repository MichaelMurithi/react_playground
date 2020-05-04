import React from "react";
import { css } from "@emotion/core";
import { Link } from "@reach/router";
import colors from "./Colors";
const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.primary};
      color: greenyellow;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <p
      css={css`
        color: ${colors.secondary};
      `}
    >
      'lfkkfkfkkkf
    </p>
  </header>
);
export default NavBar;
