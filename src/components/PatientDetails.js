import React, { Component } from 'react';
import { AppBar, TextField, ThemeProvider, Button, createTheme } from '@mui/material';

const theme = createTheme();

export class PatientDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static" title="Enter User Details" />
          <TextField
            label="Enter Patient First Name"
            onChange={handleChange('patienFirsttName')}
            defaultValue={values.patientFirstName}
          />
          <br />
          <TextField
            label="Enter Patient Last Name Name"
            onChange={handleChange('patientLastName')}
            defaultValue={values.patientLastName}
          />
          <br />
          <TextField
            label="Enter Patient ID"
            onChange={handleChange('patientID')}
            defaultValue={values.patientID}
          />
          <br />
          <Button variant="contained" color="primary" onClick={this.continue}>
            Continue
          </Button>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default PatientDetails;
