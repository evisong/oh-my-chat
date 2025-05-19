import { css } from '@linaria/core';

const formFieldStyles = css`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  width: 100%;
  font-size: 1rem;

  & > label {
    display: flex;

    & > span {
      flex: 0 0 4rem;
      color: #9a9a9a;
    }
  }
`;
const formFieldErrorStyles = css`
  margin-left: 4rem;
  font-size: 0.7rem;
  color: red;
`;

const FormField = ({ children, label, error }) => (
  <div className={formFieldStyles}>
    <label>
      <span>{label}</span>
      {children}
    </label>
    {error && <div className={formFieldErrorStyles}>{error}</div>}
  </div>
);

export default FormField;
