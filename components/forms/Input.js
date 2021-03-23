export const CommonLabelStyles = () => (
  <style jsx>
    {`
      label {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
      }
    `}
  </style>
);

export const Input = ({ type, name, required, labelText }) => (
  <label>
    {labelText}
    <input {...{ type, name, required }} required />
    <CommonLabelStyles />
    <style jsx>{`
      input {
        padding: 1rem;
      }
    `}</style>
  </label>
);
