import styled, { css } from 'styled-components';

export const Button = styled.button`
  max-width: 200px;
  font-size: 24px;
  padding: 8px 16px;
  margin: 20px 0;
  text-align: center;
  color: #FFFFFF;
  transition: opacity .3s;
  background: linear-gradient(-21deg, rgb(97, 186, 166), rgb(99, 189, 116));

  ${ props => props.center && css`
    margin-left: auto;
    margin-right: auto;
  `}

  &:hover {
    cursor: pointer;
    opacity: .7;
  }
`;

export const RoundButton = styled(Button)`
  border-radius: 20px;
`;