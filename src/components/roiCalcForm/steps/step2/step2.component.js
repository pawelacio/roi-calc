import React from 'react';
import SlideNav from '../../../slideNav/slideNav.component';
import BackButton from '../../../backButton/backButton.component';
import Input from '../../../input/input.component';
import IconButton from '../../../iconButton/iconButton.component';

import {
  StepWrap,
  Title,
  Text,
  InputWrap,
} from './step2.styled';

class Step2 extends React.Component {

  handleChange = (e) => {
    const { onTicketNumberChange } = this.props;
    onTicketNumberChange(e.target.value);
  }

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
            onChange={ this.handleChange }
          />
        </InputWrap>
        <IconButton
          onClick={ () => onNextStep() }
          icon="arrow-right"
          center
        >
          Next Question
        </IconButton>
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
