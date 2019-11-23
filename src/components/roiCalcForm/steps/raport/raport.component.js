import React from 'react';
import BackButton from '../../../backButton/backButton.component';
import IconButton from '../../../iconButton/iconButton.component';
import Table from '../../../table/table.component';

import {
  StepWrap,
  Title,
  Text,
  FieldWrap,
} from './raport.styled';

class Raport extends React.Component {

  render() {
    const {
      currentStep,
      onNextStep,
      onPrevStep,
      onStartAgain,
    } = this.props;

    if (currentStep !== 5)
      return null;

    const heading = ['', 'Home Grown', 'Cleeng'];
    const data = [
      ['Revenues', '€12,000,000.00', '€17,144,000.00'],
      ['Costs', '€738,130.00', '€1,080,395.08'],
      ['Profits', '€11,261,870.00', '€16,063,604.92'],
    ];

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
        <FieldWrap>
          <Table 
            heading={ heading }
            data={ data }
          />
        </FieldWrap>
        <FieldWrap>
          <Text small>
            Do you want to understand the logic behind this calculation? Grab your results and we will explain you everything about conversion rates, customer care and operation fees.
          </Text>
        </FieldWrap>
        <BackButton
          onClick={ () => onStartAgain() }
          center
        >
          START AGAIN
        </BackButton>
      </StepWrap>
    )
  }
}

export default Raport;
