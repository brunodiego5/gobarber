import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
`;
export const Label = styled.label`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
export const Img = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.3);
  background: #eee;
`;
export const Input = styled.input`
  display: none;
`;
