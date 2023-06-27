import React, { Component } from 'react';
import PatientDetails from './PatientDetails'

export class MultiStepForm extends Component {
  state = {
    step: 1,
    patientFirstName: '',
    patientLastName: '',
    patientID: '',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { patientFirstName, patientLastName, patientID } = this.state;
    const values = { patientFirstName, patientLastName, patientID };
    switch (step) {
      case 1:
        return (
          <PatientDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>This is the Medication Page, Fleury will finish tomorrow</h1>;
      case 3:
        return <h1>This is the Description Page, Fleury will finish tomorrow</h1>;
      case 4:
        return <h1>This is the Confirmation Page, Fleury will finish tomorrow</h1>;
      case 5:
        return <h1>This is the Submission Page, Fleury will finish tomorrow</h1>;
    }
  }
}

export default MultiStepForm;