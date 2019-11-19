import React from 'react';

class Step3 extends React.Component {

  render() {
    const {
      currentStep,
    } = this.props;

    if (currentStep !== 3)
      return null;

    return(
      <div>Step3</div>
    )
  }
}

export default Step3;
