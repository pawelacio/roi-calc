import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 200px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${ props => props.center && css`
    margin: 0 auto;
  `}
`;

export const Icon = styled.div`
  position: relative;
  height: 30px;
  width: 30px;

  svg {
    height: 100%;
    width: 100%;
    fill: ${ props => props.color ? props.color : '#5db98f' };
  }
`;

export const Text = styled.div`
  font-size: 14px;
  color: #5db98f;
`;