import { useEffect, useState } from 'react';
import { signInWithEmail } from '../../utils/firebase.utils';
import { signInWithGooglePopup } from '../../utils/firebase.utils';
import { FormInput } from '../form-input/form-input.component';
import { Button } from '../button/button.component';

const defaultFormFields = { email: '', password: '' };

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInWithEmail(email, password);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          alert('Invalid EMAIL');
          break;
        case 'auth/wrong-password':
          alert('Invalid PASSWORD');
          break;
        default:
          console.log(err.code);
      }
    }
  };

  const googleSignInHandler = async () => {
    try {
      const { user } = await signInWithGooglePopup();
    } catch (err) {
      console.log(err.code);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitHandler}>
        <FormInput
          label="email"
          otherOptions={{
            onChange: handleChange,
            name: 'email',
            value: email,
            required: true,
          }}
        />
        <FormInput
          label="password"
          otherOptions={{
            onChange: handleChange,
            name: 'password',
            value: password,
            required: true,
          }}
        />
        <Button type="submit">Sign in</Button>
      </form>
      <Button onClick={googleSignInHandler} type="button" buttonType="google">
        Sign in with google
      </Button>
    </div>
  );
};
