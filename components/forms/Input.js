export const CommonLabelStyles = () => ();

export const Input = ({ type, name, required, labelText }) => (
  <label>
    <span>{labelText}</span>
    <input {...{ type, name, required }} required />
    <CommonLabelStyles />
  </label>
);
