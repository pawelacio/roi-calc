import React from 'react';

class Step2 extends React.Component {

  render() {
    const {
      currentStep,
    } = this.props;

    if (currentStep !== 2)
      return null;

    return(
      <div>Step2</div>
    )
  }
}

export default Step2;
