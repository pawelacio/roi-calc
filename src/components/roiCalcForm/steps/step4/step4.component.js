import React from 'react';

class Step4 extends React.Component {

  render() {
    const {
      currentStep,
    } = this.props;

    if (currentStep !== 4)
      return null;

    return(
      <div>Step4</div>
    )
  }
}

export default Step4;
