import { useState } from "react";
import "./Form.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";

const Form = (props) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("Programming");

  const onSave = (event) => {
    event.preventDefault();
    props.registeredEmployee({
      name,
      role,
      image,
      team,
    });
    setName("");
    setRole("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Fill in the data to create the employee card</h2>
        <TextField
          required={true}
          label="Name"
          placeholder="Enter your name"
          value={name}
          modified={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Role"
          placeholder="Enter your job title"
          value={role}
          modified={(value) => setRole(value)}
        />
        <TextField
          label="Image"
          placeholder="Enter the image address"
          value={image}
          modified={(value) => setImage(value)}
        />
        <Dropdown
          label="Team"
          items={props.teams}
          value={team}
          modified={(value) => setTeam(value)}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;
