import React from "react";
import { FormField, TextInput } from "grommet";
import debounce from "debounce";

export const FormTextInput = props => (
  <FormField label={props.label} htmlFor={props.id}>
    <TextInput
      {...props.inputProps}
      id={props.id}
      value={props.value}
      required={props.required}
      onChange={e => debounce(props.onChange(e.target.value), 300)}
      type="text"
    />
  </FormField>
);

FormTextInput.defaultProps = {
  required: false,
};
