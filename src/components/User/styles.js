import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

export const ImgContainer = styled.div``;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 4px 1px 15px -4px rgba(0, 0, 0, 0.3);
`;

export const ContentContainer = styled.div`
  margin-left: 20px;

  & > h1 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
