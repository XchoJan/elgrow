import React, { useMemo } from 'react';

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
}) => {
  const id = useMemo(()=>Math.random().toString(), []);
  return (
    <div className="float-label">
      <label className="floating-placeholder" htmlFor={id}>
        {label || placeholder}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        className={label && label.length > 60 ? 'large-label' : ''}
      />
    </div>
  );
};

export default FloatingInput;
