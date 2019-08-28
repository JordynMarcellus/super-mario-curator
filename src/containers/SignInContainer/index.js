import React, { useContext } from "react";
import { AuthenticationContext } from "../../components/Authentication";
import { SignUpForm } from "../../components/SignUpForm";

export const SignInContainer = props => {
  const { signIn } = useContext(AuthenticationContext);

  return <SignUpForm onSubmit={signIn} withMakerId={false} />;
};
