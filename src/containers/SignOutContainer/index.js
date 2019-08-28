import React, { useContext, useEffect } from "react";
import { Box } from "grommet";
// we'll need one of the two of these
import { Redirect } from "react-router-dom";
import { AuthenticationContext } from "../../components/Authentication";

export const SignOutContainer = props => {
  const { signOut, user } = useContext(AuthenticationContext);

  useEffect(() => {
    signOut().then(() => {
      console.log("signed out...?");
    });
  }, [signOut]);
  return user.isLoggedIn ? <Box>Signing you out...</Box> : <Redirect to="/" />;
};
