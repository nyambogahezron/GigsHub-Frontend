import PropTypes from 'prop-types';

const FormInputRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeHolder,
}) => {
  return (
    <div className='mb-6'>
      <label htmlFor={name} className='inline-block text-lg mb-2'>
        {labelText || name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        className='border border-gray-200 rounded p-2 w-full'
      />
    </div>
  );
};

FormInputRow.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  placeHolder: PropTypes.string,
};

export default FormInputRow;
