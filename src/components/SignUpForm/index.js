import React, { useContext, useState } from "react";
import { Box, Button, Form, FormField, TextInput } from "grommet";

export const SignUpForm = props => {
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
    makerId: "",
  });
  return (
    <Box align="center">
      <Form
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit(userObject);
        }}>
        <FormField label="Username" htmlFor="login-username-input">
          <TextInput
            autocomplete="on"
            id="login-username-input"
            onChange={e =>
              setUserObject({ ...userObject, email: e.target.value })
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
        {props.withMakerId && (
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
        )}
        <Button label="Sign in" type="submit" />
      </Form>
    </Box>
  );
};

SignUpForm.defaultProps = {
  withMakerId: true,
};
