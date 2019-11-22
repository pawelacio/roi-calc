import styled from 'styled-components';

export const Input = styled.input.attrs({
  type: 'radio',
})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
  transition: all .2s;

  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #5db98f;
  }
`;

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  color: #FFFFFF;

  &:hover {
    ${ Input } {
      ~ ${ Checkmark } {
        background-color: #CCCCCC;
      }
    }
  }

  ${ Input }:checked {
    ~ ${ Checkmark } {
      background-color: #FFFFFF;
    }
  }

  ${ Input }:checked {
    ~ ${ Checkmark }:after {
      display: block;
    }
  }
`;
