import React from 'react';
import SlideNav from '../../../slideNav/slideNav.component';
import { Button } from '../../../button/button.styled';

import {
  StepWrap,
  Title,
  Text,
} from './step2.styled';

class Step2 extends React.Component {

  render() {
    const {
      currentStep,
      onNextStep,
    } = this.props;

    if (currentStep !== 2)
      return null;

    return(
      <StepWrap>
        <Title>
          LIVE PPV EVENT ROI CALCULATOR
        </Title>
        <Text>
          Working with a Live PPV specialist can boost your conversion rate and ultimately your ROI.
        </Text>
        <Text>
          How many tickets do you estimate to sell?
        </Text>
        <Button
          onClick={ () => onNextStep() }
          center
        >
          Next Question
        </Button>
        <SlideNav active={ currentStep } stepsNum="3" />
      </StepWrap>
    )
  }
}

export default Step2;
