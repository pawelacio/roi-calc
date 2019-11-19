import React from 'react';

class Step1 extends React.Component {

  render() {
    const {
      currentStep,
    } = this.props;

    if (currentStep !== 1)
      return null;

    return(
      <div>Step1</div>
    )
  }
}

export default Step1;
