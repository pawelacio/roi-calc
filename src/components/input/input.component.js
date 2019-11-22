import React from 'react';

import {
  Container,
  Input as InputStyled,
  Unit,
} from './input.styled';

class Input extends React.Component {
  render() {
    const { unit, align } = this.props;

    return (
      <Container>
        <InputStyled { ...this.props } align={ align } withUnit={ unit ? true : false }/>
        { unit && (
          <Unit>{ unit }</Unit>
        )}
      </Container>
    )
  }
}

export default Input;
