import { useState } from 'react';
import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from '../hooks/useInput.js';

export default function Login() {
  const {
    value: emailValue,
    hasError: emailHasError,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    hasError: passwordHasError,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  return (
    <form onClick={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailHasError && 'Please enter a valid email!'}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={passwordHasError && 'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
