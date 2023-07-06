import React, { Component } from 'react';
import PatientDetails from './PatientDetails'
import { Medications } from './Medications';
import { Confirm } from './Confirm';
import { Success } from './Success';
import dayjs from 'dayjs';
import { Auth } from './auth'


export class MultiStepForm extends Component {
  state = {
    step: 0,
    patientFirstName: '',
    patientLastName: '',
    patientID: '',
    patientDOB: '',
    medicationName: '',
    medicationDescription: '',
    medicationID: ''
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

  handleChange = (input) => (value) => {
    if (input === 'patientDOB') {
      const date = dayjs(value).format('YYYY-MM-DD');
      this.setState({ [input]: date });
    } else {
      this.setState({ [input]: value });
    }
  };

  render() {
    const { step } = this.state;
    const { patientFirstName, patientLastName, patientID, medicationName, medicationDescription, medicationID, patientDOB } = this.state;
    const values = { patientFirstName, patientLastName, patientID, medicationName, medicationDescription, medicationID, patientDOB };
    switch (step) {
      case 0:
        return (
          <div>
            <Auth/>
            <button onClick={this.nextStep}>Next</button>
          </div>
        );
      case 1:
        return (
          <PatientDetails
            nextStep={this.nextStep}
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
                handleChange={this.handleChange}/>)
    }
  }
}

export default MultiStepForm;