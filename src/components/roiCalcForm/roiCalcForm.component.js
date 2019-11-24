import React from 'react';
import calcBg from '../../assets/roi-calculator-bg.jpg';
import { getRaport } from './fakeAPI/fakeAPI';

import Welcome from './steps/welcome/welcome.component';
import Step1 from './steps/step1/step1.component';
import Step2 from './steps/step2/step2.component';
import Step3 from './steps/step3/step3.component';
import Result from './steps/result/result.component';
import Raport from './steps/raport/raport.component';


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
      waiting: false,
      currentStep: 0,
      streamingLevel: '',
      ticketsNumber: 0,
      chargePerTicket: 0,
      maxSteps: 5,
      availableStep: 1,
    }
  }

  handleNextStep = () => {
    const nextStep = this.state.currentStep + 1;
    console.log(this.state);
    if (nextStep > this.state.maxSteps || nextStep > this.state.availableStep)
      return;
    this.setState({
      currentStep: nextStep,
    });
  }

  handlePrevStep = () => {
    const prevStep = this.state.currentStep - 1;
    if (prevStep < 0)
      return;
    this.setState({
      currentStep: prevStep,
    });
  }

  handleStart = () => {
    this.setState({
      currentStep: 1,
      availableStep: 1,
      streamingLevel: '',
      ticketsNumber: 0,
      chargePerTicket: 0,
    });
  }

  onLevelChange = (newLevel) => {
    if (!newLevel)
      return;
    this.setState({
      availableStep: 2,
      streamingLevel: newLevel,
    });
  }

  onTicketNumberChange = (newTicketNumber) => {
    if (newTicketNumber <= 0)
      return;
    this.setState({
      ticketsNumber: newTicketNumber,
      availableStep: 3,
    });
  }

  onChargePerTicketChange = (newChargePerTicket) => {
    if (newChargePerTicket <= 0)
      return;
    this.setState({
      chargePerTicket: newChargePerTicket,
      availableStep: 5
    })
  }

  handleSubmit = async () => {
    const requestObject = {
      streamingLevel: this.state.streamingLevel,
      ticketsNumber: this.state.ticketsNumber,
      chargePerTicket: this.state.chargePerTicket,
    };
    
    this.setState({
      waiting: true,
    });

    this.handleNextStep();
    
    const res = await getRaport(requestObject);

    this.setState({
      raport: res,
      waiting: false,
    });
  }

  render() {
    const { currentStep } = this.state;

    return (
      <Container>
        <FormBackground path={ calcBg }>
          <Mask/>
          <FormWrap>
            { currentStep === 0 && (
              <Welcome
                currentStep={ currentStep }
                onNextStep={ this.handleNextStep }
                onPrevStep={ this.handlePrevStep }
              />
            )}
            { currentStep === 1 && (
              <Step1
                currentStep={ currentStep }
                onNextStep={ this.handleNextStep }
                onLevelChange={ this.onLevelChange }
              />
            )}
            { currentStep === 2 && (
              <Step2
                currentStep={ currentStep }
                onNextStep={ this.handleNextStep }
                onPrevStep={ this.handlePrevStep }
                onTicketNumberChange={ this.onTicketNumberChange }
              />
            )}
            { currentStep === 3 && (
              <Step3
                currentStep={ currentStep }
                onNextStep={ this.handleNextStep }
                onPrevStep={ this.handlePrevStep }
                onChargePerTicketChange={ this.onChargePerTicketChange }
              />
            )}
            { currentStep === 4 && (
              <Result
                currentStep={ currentStep }
                onPrevStep={ this.handlePrevStep }
                onSubmitForm={ this.handleSubmit }
                onStartAgain={ this.handleStart }
              />
            )}
            { currentStep === 5 && (
              <Raport
                currentStep={ currentStep }
                onStartAgain={ this.handleStart }
                waiting={ this.state.waiting }
                data={ this.state.raport }
              />
            )}
          </FormWrap>
        </FormBackground>
      </Container>
    );
  }
}

export default RoiCalcForm;
