import React from "react";

import { Container, ImgContainer, Avatar, ContentContainer } from "./styles";

const User = ({ avatar, name, location }) => {
  return (
    <Container>
      <ImgContainer>
        <Avatar src={avatar} alt={name} />
      </ImgContainer>
      <ContentContainer>
        <h1>{name}</h1>
        <p>{location}</p>
      </ContentContainer>
    </Container>
  );
};

export default User;
