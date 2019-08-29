import React, { useContext } from "react";
import { Layout } from "../../components/Layout";
import { SignUpForm } from "../../components/SignUpForm";
import { AuthenticationContext } from "../../components/Authentication";

export const SignUpContainer = props => {
  const { signUp } = useContext(AuthenticationContext);
  return (
    <Layout justify="center" align="center" height="100%">
      <SignUpForm onSubmit={signUp} />
    </Layout>
  );
};
