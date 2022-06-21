import './form-input.styles.scss';

export const FormInput = ({ label, otherOptions }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherOptions} />
      {label && (
        <label
          className={`${
            otherOptions.value.length > 0 ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
