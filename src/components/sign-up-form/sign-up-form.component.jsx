import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';
import { FormInput } from '../form-input/form-input.component';
import { Button } from '../button/button.component';
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords have to be identical');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use')
        alert('email is already used');
      else alert(err.code);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          otherOptions={{
            onChange: handleChange,
            type: 'text',
            name: 'displayName',
            value: displayName,
            required: true,
          }}
        />

        <FormInput
          label="Email"
          otherOptions={{
            onChange: handleChange,
            type: 'email',
            name: 'email',
            value: email,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          otherOptions={{
            onChange: handleChange,
            type: 'password',
            name: 'password',
            value: password,
            required: true,
          }}
        />

        <FormInput
          label="Confirm Password"
          otherOptions={{
            onChange: handleChange,
            type: 'password',
            name: 'confirmPassword',
            value: confirmPassword,
            required: true,
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
