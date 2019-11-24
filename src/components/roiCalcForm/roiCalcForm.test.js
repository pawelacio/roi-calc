import React from 'react';
import { shallow, mount } from 'enzyme';
import RoiCalcForm from './roiCalcForm.component';


import Welcome from './steps/welcome/welcome.component';
import Step1 from './steps/step1/step1.component';
import Step2 from './steps/step2/step2.component';
import Step3 from './steps/step3/step3.component';
import Result from './steps/result/result.component';
import Raport from './steps/raport/raport.component';


describe('test RoiCalcForm class component', () => {

  it('renders RoiCalcForm without crashing', () => {
    const wrapper = shallow(<RoiCalcForm />);
    expect(wrapper.exists()).toBe(true);
  });

  it('has good initial state', () => {
    const wrapper = mount(<RoiCalcForm />);
    expect(wrapper.state().waiting).toEqual(false);
    expect(wrapper.state().currentStep).toEqual(0);
    expect(wrapper.state().streamingLevel).toEqual('');
    expect(wrapper.state().ticketsNumber).toEqual(0);
    expect(wrapper.state().chargePerTicket).toEqual(0);
    expect(wrapper.state().maxSteps).toEqual(5);
    expect(wrapper.state().availableStep).toEqual(1)
  });

  it('shows Welcome component as a initial step', () => {
    const wrapper = mount(<RoiCalcForm />);
    expect(wrapper.find(Welcome)).toHaveLength(1);
  });

  it('shows Step1 component as a first step', () => {
    const wrapper = mount(<RoiCalcForm />);
    wrapper.setState({
      currentStep: 1,
    })
    expect(wrapper.find(Step1)).toHaveLength(1);
  });

  it('shows Step2 component as a second step', () => {
    const wrapper = mount(<RoiCalcForm />);
    wrapper.setState({
      currentStep: 2,
    })
    expect(wrapper.find(Step2)).toHaveLength(1);
  });

  it('shows Step3 component as a third step', () => {
    const wrapper = mount(<RoiCalcForm />);
    wrapper.setState({
      currentStep: 3,
    })
    expect(wrapper.find(Step3)).toHaveLength(1);
  });

  it('shows Result component as a fourth step', () => {
    const wrapper = mount(<RoiCalcForm />);
    wrapper.setState({
      currentStep: 4,
    })
    expect(wrapper.find(Result)).toHaveLength(1);
  });

  it('shows Raport component as a fifth step', () => {
    const wrapper = mount(<RoiCalcForm />);
    wrapper.setState({
      currentStep: 5,
    })
    expect(wrapper.find(Raport)).toHaveLength(1);
  });

})

