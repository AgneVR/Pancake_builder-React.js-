import React, { useState } from 'react';
import './index.scss';

function SingleInput({
  label,
  required,
  type,
  name,
  className,
  placeholder,
  value,
  disabled,
  onChange,
  id,
  min,
}) {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function InputHtml(required, type, name, className, placeholder, value, disabled, id) {
    return (
      <input
        type={type || 'text'}
        name={name}
        id={id || name}
        placeholder={placeholder || ''}
        required={required || false}
        className={`${className} ${showError ? 'has-error' : ''}`}
        value={value}
        disabled={disabled || false}
        onChange={handleChange}
      />
    );
  }

  const handleChange = e => {
    setShowError(false);
    setErrorMessage('');

    if (min && e.target.value.length < min) {
      setErrorMessage(`minimalus simbolių skaičius: ${min}`);
      setShowError(true);
    }
    return onChange(name, e.target.value);
  };

  return (
    <div className='form-field'>
      {Label(label, required)}
      {InputHtml(required, type, name, className, placeholder, value, disabled, id, onChange)}
      {ErrorHtml(showError, errorMessage)}
    </div>
  );
}

function Label(label, required) {
  if (label) {
    return (
      <label>
        {label} <span className='danger-text'>{required ? '*' : ''}</span>
      </label>
    );
  }
}

function ErrorHtml(showError, errorMessage) {
  if (showError === true) {
    return <p className='errorMessage'>{errorMessage}</p>;
  }
}
export default SingleInput;
