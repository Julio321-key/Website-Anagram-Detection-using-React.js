import React from 'react';

const InputField = ({ label, type, name, value, onChange, error, placeholder }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        className={error ? 'error' : ''}
        placeholder={placeholder}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default InputField;
