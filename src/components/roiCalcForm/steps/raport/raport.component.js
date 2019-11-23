import React from 'react';
import BackButton from '../../../backButton/backButton.component';
import Table from '../../../table/table.component';
import { Loader } from '../../../loader/loader.styled';

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
      onStartAgain,
      waiting,
      data,
    } = this.props;

    if (currentStep !== 5)
      return null;

    return(
      <StepWrap>
        { waiting && (
          <Loader />
        )}
        { !waiting && (
          <>
            <Title>
              LIVE PPV EVENT ROI CALCULATOR
            </Title>
            <Text highlighted>
              Based on your entries, here is a ready raport for You.
            </Text>
            <FieldWrap>
              <Table 
                heading={ data.heading }
                data={ data.data }
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
          </>
        )}
      </StepWrap>
    )
  }
}

export default Raport;
