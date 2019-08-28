import React, { useContext } from "react";
import { Box } from "grommet";
import { SignUpForm } from "../../components/SignUpForm";
import { AuthenticationContext } from "../../components/Authentication";

export const SignUpContainer = props => {
  const { signIn } = useContext(AuthenticationContext);
  return (
    <Box>
      <SignUpForm onSubmit={signIn} />
    </Box>
  );
};
