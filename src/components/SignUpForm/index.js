import React, { useState } from "react";
import { Box, Button, Form, FormField, TextInput } from "grommet";

export const SignUpForm = props => {
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
    makerId: "",
    displayName: "",
  });
  return (
    <Box width="medium">
      <Form
        style={{ width: "100%" }}
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
          <>
            <FormField label="Maker ID" htmlFor="maker-id-input">
              <TextInput
                autocomplete="on"
                id="maker-id-input"
                required
                onChange={e =>
                  setUserObject({ ...userObject, makerId: e.target.value })
                }
                value={userObject.makerId}
                type="text"
              />
            </FormField>
            <FormField label="Display name" htmlFor="display-name-input">
              <TextInput
                id="display-name-input"
                required
                onChange={e =>
                  setUserObject({
                    ...userObject,
                    displayName: e.target.value,
                  })
                }
                value={userObject.displayName}
                type="text"
              />
            </FormField>
          </>
        )}
        <Button
          label={`${props.withMakerId ? "Sign up" : "Sign in"}`}
          type="submit"
        />
      </Form>
    </Box>
  );
};

SignUpForm.defaultProps = {
  withMakerId: true,
};
