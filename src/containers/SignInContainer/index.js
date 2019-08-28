import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthenticationContext } from "../../components/Authentication";
import { SignUpForm } from "../../components/SignUpForm";

export const SignInContainer = props => {
  const { signIn, user } = useContext(AuthenticationContext);
  return user.isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <SignUpForm onSubmit={signIn} withMakerId={false} />
  );
};
