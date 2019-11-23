import styled from 'styled-components';
import { Button } from '../button/button.styled';

export const Container = styled(Button)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  display: block;
  font-size: 16px;
  color: #FFFFFF;
`;

export const IconWrap = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  background-color: #FFFFFF;

  svg {
    height: 100%;
    width: 100%;
    fill: ${ props => props.color ? props.color : '#5db98f' };
  }
`;