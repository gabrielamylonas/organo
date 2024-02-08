import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Programming",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX and Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Innovation and Management",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [employees, setEmployees] = useState([]);

  const addedEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div>
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        registeredEmployee={(employee) => addedEmployee(employee)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          employees={employees.filter(
            (employee) => employee.team === team.name
          )}
        />
      ))}
    </div>
  );
}

export default App;
