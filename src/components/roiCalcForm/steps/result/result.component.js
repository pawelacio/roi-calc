import React from 'react';
import SlideNav from '../../../slideNav/slideNav.component';
import BackButton from '../../../backButton/backButton.component';
import Input from '../../../input/input.component';
import { Button } from '../../../button/button.styled';

import {
  StepWrap,
  Title,
  Text,
  InputWrap,
} from './result.styled';
class Result extends React.Component {

  render() {
    const {
      currentStep,
      onNextStep,
      onPrevStep,
      onStartAgain,
    } = this.props;

    if (currentStep !== 4)
      return null;

    return(
      <StepWrap>
        <Title>
          LIVE PPV EVENT ROI CALCULATOR
        </Title>
        <Text highlighted>
          Based on your entries, your ROI is negative.
        </Text>
        <Text>
          IMPROVE YOUR RESULTS WITH CLEENG!
        </Text>
        <Text small>
          Do you want to understand the logic behind this calculation? Grab your results and we will explain you everything about conversion rates, customer care and operation fees.
        </Text>
        <Button
          onClick={ () => onNextStep() }
          center
        >
          Find Out Now
        </Button>
        <BackButton
          onClick={ () => onStartAgain() }
          center
        >
          START AGAIN
        </BackButton>
        <BackButton
          onClick={ () => onPrevStep() }
          center
        >
          BACK
        </BackButton>
      </StepWrap>
    )
  }
}

export default Result;
