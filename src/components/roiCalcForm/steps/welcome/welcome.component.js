import React from 'react';
import { RoundButton } from '../../../button/button.styled';

import {
  StepWrap,
  Title,
  Text,
} from './welcome.styled';

class Welcome extends React.Component {

  render() {
    const {
      currentStep,
      onNextStep,
    } = this.props;

    if (currentStep !== 0)
      return null;
    
    return(
      <StepWrap>
        <Title>
          Live PPV Event ROI Calculator
        </Title>
        <Text>
          Ever wondered how much money you can generate with the Live Pay-Per-View model? Based on our 
          experience in managing over 10,000 PPV events per year, we created this unique ROI calculator for you.
        </Text>
        <RoundButton
          onClick={ () => onNextStep() }
          center
        >
          Give it a try!
        </RoundButton>
      </StepWrap>
    )
  }
}

export default Welcome;
