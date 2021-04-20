import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17rem;
  height: 2.625rem;
  background-color: var(--primary-color);
  border-radius: 0.37rem;
  border: 0.12rem solid #0f4dad;
  font-family: Poppins;
  font-weight: 700;
  font-size: 1rem;
  transition: 200ms all;
  span {
    padding: 0.5rem;
    color: #fff;
  }
  div {
    width: 1.6rem;
  }

  :hover {
    transition: 300ms all;
    background: ${shade(0.2, '#0F4DAD')};
  }
`;
