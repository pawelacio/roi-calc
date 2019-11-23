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
      currentStep: 4,
      streamingLevel: '',
      ticketsNumber: 0,
      chargePerTicket: 0,
    }
  }

  handleNextStep = () => {
    const nextStep = this.state.currentStep + 1;
    this.setState({
      currentStep: nextStep,
    });
  }

  handlePrevStep = () => {
    const prevStep = this.state.currentStep - 1;
    this.setState({
      currentStep: prevStep,
    });
  }

  handleStart = () => {
    this.setState({
      currentStep: 1,
    });
  }

  onLevelChange = (newLevel) => {
    this.setState({
      streamingLevel: newLevel,
    });
  }

  onTicketNumberChange = (newTicketNumber) => {
    this.setState({
      ticketsNumber: newTicketNumber,
    });
  }

  onChargePerTicketChange = (newChargePerTicket) => {
    this.setState({
      chargePerTicket: newChargePerTicket,
    })
  }

  handleSubmit = async () => {
    const requestObject = {
      streamingLevel: this.state.streamingLevel,
      ticketsNumber: this.state.ticketsNumber,
      chargePerTicket: this.state.chargePerTicket,
    };
    
    this.handleNextStep();
    this.setState({
      waiting: true,
    });

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
            <Welcome
              currentStep={ currentStep }
              onNextStep={ this.handleNextStep }
              onPrevStep={ this.handlePrevStep }
            />
            <Step1
              currentStep={ currentStep }
              onNextStep={ this.handleNextStep }
              onLevelChange={ this.onLevelChange }
            />
            <Step2
              currentStep={ currentStep }
              onNextStep={ this.handleNextStep }
              onPrevStep={ this.handlePrevStep }
              onTicketNumberChange={ this.onTicketNumberChange }
            />
            <Step3
              currentStep={ currentStep }
              onNextStep={ this.handleNextStep }
              onPrevStep={ this.handlePrevStep }
              onChargePerTicketChange={ this.onChargePerTicketChange }
            />
            <Result
              currentStep={ currentStep }
              onPrevStep={ this.handlePrevStep }
              onSubmitForm={ this.handleSubmit }
              onStartAgain={ this.handleStart }
            />
            <Raport
              currentStep={ currentStep }
              onStartAgain={ this.handleStart }
              waiting={ this.state.waiting }
              data={ this.state.raport }
            />
          </FormWrap>
        </FormBackground>
      </Container>
    );
  }
}

export default RoiCalcForm;
