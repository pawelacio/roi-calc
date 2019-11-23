import React from 'react';
import SlideNav from '../../../slideNav/slideNav.component';
import IconButton from '../../../iconButton/iconButton.component';

import {
  StepWrap,
  Title,
  Text,
  RadioList,
} from './step1.styled';
import Radio from '../../../radio/radio.component';

class Step1 extends React.Component {

  handleChange = (e) => {
    const { onLevelChange } = this.props;
    onLevelChange(e.target.value);
  }

  render() {
    const {
      currentStep,
      onNextStep,
    } = this.props;

    if (currentStep !== 1)
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
        <RadioList>
          <Radio
            text={ 'High' } 
            name="streaming-level"
            value="high"
            onChange={ this.handleChange }
          />
          <Radio 
            text={ 'Mid' } 
            name="streaming-level"
            value="mid"
            onChange={ this.handleChange }
          />
          <Radio 
            text={ 'Entry' } 
            name="streaming-level"
            value="entry"
            onChange={ this.handleChange }
          />
        </RadioList>
        <IconButton
          onClick={ () => onNextStep() }
          icon="arrow-right"
          center
        >
          Next Question
        </IconButton>
        <SlideNav active={ currentStep } stepsNum="3" />
      </StepWrap>
    )
  }
}

export default Step1;
