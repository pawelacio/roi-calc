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
} from './step2.styled';

class Step2 extends React.Component {

  render() {
    const {
      currentStep,
      onNextStep,
      onPrevStep,
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
        <InputWrap>
          <Input
            type="number"
            placeholder="15,000"
          />
        </InputWrap>
        <Button
          onClick={ () => onNextStep() }
          center
        >
          Next Question
        </Button>
        <BackButton
          onClick={ () => onPrevStep() }
          center
        >
          BACK
        </BackButton>
        <SlideNav active={ currentStep } stepsNum="3" />
      </StepWrap>
    )
  }
}

export default Step2;
