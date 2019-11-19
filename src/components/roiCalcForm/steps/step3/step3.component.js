import React from 'react';
import SlideNav from '../../../slideNav/slideNav.component';
import { Button } from '../../../button/button.styled';

import {
  StepWrap,
  Title,
  Text,
} from './step3.styled';
class Step3 extends React.Component {

  render() {
    const {
      currentStep,
      onNextStep,
    } = this.props;

    if (currentStep !== 3)
      return null;

    return(
      <StepWrap>
        <Title>
          LIVE PPV EVENT ROI CALCULATOR
        </Title>
        <Text>
          Working with a Live PPV specialist can help you define your best pricing strategy.
        </Text>
        <Text>
        How much do you plan to charge per ticket for your Live PPV event?
        </Text>
        <Button
          onClick={ () => onNextStep() }
          center
        >
          See the results
        </Button>
        <SlideNav active={ currentStep } stepsNum="3" />
      </StepWrap>
    )
  }
}

export default Step3;
