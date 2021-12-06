const RadioButton = ({ label, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.nextSibling.nodeValue.toLowerCase());
  };

  return (
    <label>
      <input
        type="radio"
        checked={value}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};

export { RadioButton };
