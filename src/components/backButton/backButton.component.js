import React from 'react';
import { ArrowLeftIcon } from '../icons';

import {
  Container,
  Text,
  Icon,
} from './backButton.styled';

class BackButton extends React.Component {
  render() {
    const { children, onClick, center } = this.props;

    return (
      <Container
        onClick={ onClick }
        center={ center }
      >
        <Icon>
          <ArrowLeftIcon />
        </Icon>
        <Text>{ children }</Text>
      </Container>
    )
  }
}

export default BackButton;
