import "./TextField.css";

const TextField = (props) => {
  const placeholderModified = `${props.placeholder}...`;

  const typed = (event) => {
    props.modified(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={typed}
        required={props.required}
        placeholder={placeholderModified}
      />
    </div>
  );
};

export default TextField;
