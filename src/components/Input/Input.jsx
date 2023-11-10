const Input = ({ type, placeholder, name, className = "" }) => {
  return (
    <input
      type={type}
      autoComplete="off"
      className={`text-lg w-full font-normal ${className} placeholder:opacity-50`}
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default Input;
