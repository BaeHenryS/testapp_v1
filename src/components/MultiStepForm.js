import React, { Component } from 'react';
import PatientDetails from './PatientDetails';
import { Medications } from './Medications';
import { Confirm } from './Confirm';
import { Success } from './Success';
import dayjs from 'dayjs';
import { Auth } from './auth';

export class MultiStepForm extends Component {
  state = {
    step: 0,
    patientFirstName: '',
    patientLastName: '',
    patientID: '',
    patientDOB: '',
    medicationName: '',
    medicationDescription: '',
    medicationID: '',
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
    if (input === 'patientDOB') {
      const date = dayjs(e).format('YYYY-MM-DD');
      this.setState({ [input]: date });
    } else {
      this.setState({ [input]: e.target.value });
    }
  };

  handleContinueAsGuest = () => {
    // Implement the desired actions or state updates for continuing as a guest
    const { step } = this.state;
    this.setState({
      step: step + 1,
      // Update any additional state properties as needed
    });
  };

  render() {
    const { step } = this.state;
    const {
      patientFirstName,
      patientLastName,
      patientID,
      medicationName,
      medicationDescription,
      medicationID,
      patientDOB,
    } = this.state;
    const values = {
      patientFirstName,
      patientLastName,
      patientID,
      medicationName,
      medicationDescription,
      medicationID,
      patientDOB,
    };

    switch (step) {
      case 0:
        return (
          <div>
            <Auth continueAsGuest={this.nextStep} />
          </div>
        );
      case 1:
        return (
          <PatientDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Medications
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Success
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      default:
        return null;
    }
  }
}

export default MultiStepForm;
