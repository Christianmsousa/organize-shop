import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #e5e5e5;
  width: 17rem;
  height: 2.625rem;
  padding: 0 1.5rem;
  margin-bottom: 20px;
  border-radius: 10px;
  img {
    margin-right: 1rem;
  }
  input {
    flex: 1;
    height: 100%;
    background-color: transparent;
    border: 0;
  }
`;

export const ButtonIcon = styled.button`
  border: none;
  outline-style: none;
  background: transparent;
  margin: 0;
`;
