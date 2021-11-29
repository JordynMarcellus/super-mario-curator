export const TextArea = ({ name, required, labelText }) => (
  <label>
    <span>{labelText}</span>
    <textarea {...{ name, required }} required />
  </label>
);
