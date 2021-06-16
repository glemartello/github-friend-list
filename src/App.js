import React, { useState } from "react";

import { Container, Content, Searchbox, List, Button } from "./styles";
import User from "./components/User";

import ResetCSS from "./globals/resetCSS";

function App() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnAddClick = () => {
    // chamar API
    fetch(`https://api.github.com/users/${inputValue}`)
      .then((response) => response.json())
      // setar a resposta no users
      .then((data) => {
        setUsers((oldState) => [...oldState, data]);
        console.log(data);
      });
  };

  return (
    <>
      <ResetCSS />
      <Container>
        <Content>
          <Searchbox>
            <input onChange={handleInputChange} value={inputValue} />
            <Button onClick={handleOnAddClick}>Adicionar</Button>
          </Searchbox>
          <List>
            {users.map((user) => (
              <User
                name={user.name}
                avatar={user.avatar_url}
                location={user.location}
              />
            ))}
          </List>
        </Content>
      </Container>
    </>
  );
}

export default App;
