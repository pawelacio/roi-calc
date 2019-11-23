import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 11px solid #f3f3f3;
  border-top: 11px solid #5db98f;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${ rotate } 2s linear infinite;
`;