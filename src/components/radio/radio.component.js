import React from 'react';

import { 
  Container,
  Input,
  Checkmark
} from './radio.styled';

class Radio extends React.Component {
  render() {
    const { text } = this.props;
    return(
      <Container>
        { text }
        <Input { ...this.props }/>
        <Checkmark />
      </Container>
    )
  }
}

export default Radio;