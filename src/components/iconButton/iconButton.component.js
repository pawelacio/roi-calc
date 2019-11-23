import React from 'react';

import {
  Container,
  IconWrap,
  Text,
} from './iconButton.styled';

import { 
  ArrowRightIcon
 } from '../icons';

class IconButton extends React.Component {

  renderIcon = () => {
    const { icon } = this.props;

    switch(icon) {
      case 'arrow-right':
        return <ArrowRightIcon />;
    }
  }

  render() {
    const { children, onClick } = this.props;

    return(
      <Container onClick={ onClick }>
        <Text>{ children }</Text>
        <IconWrap>
          { this.renderIcon() }
        </IconWrap>
      </Container>
    )
  }
}

export default IconButton;
