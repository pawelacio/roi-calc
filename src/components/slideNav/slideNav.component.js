import React from 'react';

import {
  Container,
  NavBar,
} from './slideNav.styled';

class SlideNav extends React.Component {

  createBars = (count, active) => {
    let bars = [];
    for(let i = 0; i < count; i++) {
      bars.push(
        <NavBar active={ i < active }/>
      )
    }
    return bars;
  }

  render() {
    const { active, stepsNum } = this.props;

    return(
      <Container>
        { this.createBars(stepsNum, active) }
      </Container>
    );
  }
}

export default SlideNav;
