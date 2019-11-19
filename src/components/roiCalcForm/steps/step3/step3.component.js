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
          Working with a Live PPV specialist can save you a lot of time and development costs.
        </Text>
        <Text>
          When you are building your monetization platform, you consider the
          costs of design, streaming, along with landing page and e-commerce 
          checkout development.
        </Text>
        <Text>
          What level of streaming quality are you aiming for?
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
