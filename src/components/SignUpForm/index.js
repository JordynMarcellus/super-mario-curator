import React, { useContext, useState } from "react";
import { Box, Button, Form, FormField, TextInput } from "grommet";

import { FirebaseContext } from "../Firebase";

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

export const SignUpForm = props => {
  const [userObject, setUserObject] = useState({
    username: "",
    password: "",
    makerId: "",
  });
  const { firebaseService } = useContext(FirebaseContext);
  return (
    <Box align="center">
      <Form
        onSubmit={e => {
          e.preventDefault();
          authInWithFirebase(firebaseService, userObject);
        }}>
        <FormField label="Username" htmlFor="login-username-input">
          <TextInput
            autocomplete="on"
            id="login-username-input"
            onChange={e =>
              setUserObject({ ...userObject, username: e.target.value })
            }
            placeholder="gooigi@protonmail.com"
            type="email"
            value={userObject.username}
          />
        </FormField>
        <FormField label="Password" htmlFor="login-password-input">
          <TextInput
            autocomplete="on"
            id="login-password-input"
            onChange={e =>
              setUserObject({ ...userObject, password: e.target.value })
            }
            value={userObject.password}
            type="password"
          />
        </FormField>
        <FormField label="Maker ID" htmlFor="maker-id-input">
          <TextInput
            autocomplete="on"
            id="maker-id-input"
            onChange={e =>
              setUserObject({ ...userObject, makerId: e.target.value })
            }
            value={userObject.makerId}
            type="text"
          />
        </FormField>
        <Button label="Sign up now" type="submit" />
      </Form>
    </Box>
  );
};
