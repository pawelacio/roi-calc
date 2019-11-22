import React from 'react';
import calcBg from '../../assets/roi-calculator-bg.jpg';

import Welcome from './steps/welcome/welcome.component';
import Step1 from './steps/step1/step1.component';
import Step2 from './steps/step2/step2.component';
import Step3 from './steps/step3/step3.component';
import Step4 from './steps/step4/step4.component';


import {
  Container,
  FormBackground,
  FormWrap,
  Mask,
} from './roiCalcForm.styled';


class RoiCalcForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
    }
  }

  handleNextStep = () => {
    const nextStep = this.state.currentStep + 1;
    this.setState({
      currentStep: nextStep,
    });
  }

  handlePrevStep = () => {
    console.log('prev');
    const prevStep = this.state.currentStep - 1;
    this.setState({
      currentStep: prevStep,
    });
  }

  render() {
    const { currentStep } = this.state;

    return (
      <Container>
        <FormBackground path={ calcBg }>
          <Mask/>
          <FormWrap>
            <Welcome
              currentStep={ currentStep }
              onNextStep={ this.handleNextStep }
              onPrevStep={ this.handlePrevStep }
            />
            <Step1
              currentStep={ currentStep }
              onNextStep={ this.handleNextStep }
              onPrevStep={ this.handlePrevStep }
            />
            <Step2
              currentStep={ currentStep }
              onNextStep={ this.handleNextStep }
              onPrevStep={ this.handlePrevStep }
            />
            <Step3
              currentStep={ currentStep }
              onNextStep={ this.handleNextStep }
              onPrevStep={ this.handlePrevStep }
            />
            <Step4
              currentStep={ currentStep }
              onNextStep={ this.handleNextStep }
              onPrevStep={ this.handlePrevStep }
            />
          </FormWrap>
        </FormBackground>
      </Container>
    );
  }
}

export default RoiCalcForm;
