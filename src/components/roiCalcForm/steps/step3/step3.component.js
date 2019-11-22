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
} from './step3.styled';
class Step3 extends React.Component {

  render() {
    const {
      currentStep,
      onNextStep,
      onPrevStep,
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
        <InputWrap>
          <Input
            type="number"
            placeholder="19.00"
            align="right"
            unit="€"
          />
        </InputWrap>
        <Button
          onClick={ () => onNextStep() }
          center
        >
          See the results
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

export default Step3;
