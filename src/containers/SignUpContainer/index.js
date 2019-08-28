import React from "react";
import { Box } from "grommet";
import { SignUpForm } from "../../components/SignUpForm";

export const authInWithFirebase = async (firebase, { username, password }) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(username, password);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const SignUpContainer = props => (
  <Box>
    <SignUpForm onSubmit={authInWithFirebase} />
  </Box>
);
