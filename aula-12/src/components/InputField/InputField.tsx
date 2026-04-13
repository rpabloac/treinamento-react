import { memo, forwardRef } from 'react';
import type { ChangeEvent } from 'react';

export type InputFieldProps = {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputField = memo(
  forwardRef<HTMLInputElement, InputFieldProps>(function InputField(
    { id, type, placeholder, label, value, onChange },
    ref,
  ) {
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <span className="error-message"></span>
      </div>
    );
  }),
);

export default InputField;
