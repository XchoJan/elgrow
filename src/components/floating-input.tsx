import React from 'react';

interface FloatingInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  name?: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  label,
  name = 'input'
}) => (
  <div id="float-label" className={value ? 'has-value' : ''}>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={name}
    />

    <label htmlFor={name}>
      {label || placeholder}
    </label>
  </div>
);

export default FloatingInput;
