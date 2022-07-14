import { SignInForm } from '../../components/sign-in-form/sign-in-form.component';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form.component';
import { SignInMainContainer } from './authentication.styles.jsx';

export const Authentication = () => {
  return (
    <SignInMainContainer>
      <SignInForm />
      <SignUpForm />
    </SignInMainContainer>
  );
};
