import { useEffect } from 'react';
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';
import { getRedirectResult } from 'firebase/auth';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form.component';
import { Button } from '../../components/button/button.component';

export const SignIn = () => {
  useEffect(() => {
    const redirectRes = async () => {
      const response = await getRedirectResult(auth);
      if (response) createUserDocumentFromAuth(response.user);
    };

    redirectRes();
  }, []);

  const googlePopup = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const googleRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Button buttonType="google" onClick={googlePopup}>
        Sign In with Google Popup
      </Button>
      <Button onClick={googleRedirect}>Sign In with Google Redirect</Button>
      <SignUpForm />
    </div>
  );
};
