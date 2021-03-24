import { CommonLabelStyles } from "./Input";

export const TextArea = ({ name, required, labelText }) => (
  <label>
    <span>{labelText}</span>
    <textarea {...{ name, required }} required />
    <CommonLabelStyles />
  </label>
);
