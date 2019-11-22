import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 21px;
  line-height: 21px;
  text-align: center;

  ${ props => props.withUnit && css`
    text-align: right;
    padding-right: 30px;
  `}
`;

export const Unit = styled.span`
  display: block;
  position: absolute;
  right: 10px;
  top: 12px;
  height: 100%;
  font-size: 21px;
  color: #666666;
`;

