import React, { memo } from "react";
import { Router } from "@reach/router";
import { LoginForm } from "../../components/LoginForm";

import { HomeContainer } from "../HomeContainer";
// import { UserContainer } from "../UserContainer";
export const RoutesContainer = memo(props => (
  <Router>
    <HomeContainer exact path="/" />
    <LoginForm path="/login" />
  </Router>
));
