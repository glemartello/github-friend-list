import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #e0e0de;

  width: 100%;
  height: 100vh;

  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background: #fff;

  width: 580px;
  height: 80%;

  border-radius: 10px;
  padding-bottom: 10px;

  box-shadow: 4px 1px 15px -4px rgba(0, 0, 0, 0.6);
`;

export const Searchbox = styled.div`
  padding: 10% 10% 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > input {
    height: 44px;
    font-size: 16px;
    border-radius: 20px;
    outline: 0;
    border: 1px solid #e6e6e6;
    padding: 0 20px;
    margin-right: 20px;
  }
`;

export const List = styled.div`
  padding: 5% 10% 10%;
  overflow: auto;
`;

export const Button = styled.button`
  background: #000;
  color: #bbb;
  border: 1px solid #aaa;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  height: 44px;
  padding: 0 10px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    opacity: 0.6;
    transition: 0.3s;
  }
`;
