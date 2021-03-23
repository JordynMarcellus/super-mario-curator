import { CommonLabelStyles } from "./Input";

export const TextArea = ({ name, required, labelText }) => (
  <label>
    {labelText}
    <textarea {...{ name, required }} required />
    <CommonLabelStyles />
  </label>
);
