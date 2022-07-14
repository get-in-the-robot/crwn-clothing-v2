import { Group, FormInputField, FormInputLabel } from './form-input.styles.jsx';

export const FormInput = ({ label, otherOptions }) => {
  return (
    <Group>
      <FormInputField {...otherOptions} />
      {label && (
        <FormInputLabel shrink={otherOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
