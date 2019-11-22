import React from 'react';

import { 
  Container,
  Input,
  Checkmark
} from './radio.styled';

class Radio extends React.Component {
  render() {
    const { text, checked, name } = this.props;
    return(
      <Container>
        { text }
        <Input name={ name } checked={ checked }/>
        <Checkmark />
      </Container>
    )
  }
}

export default Radio;