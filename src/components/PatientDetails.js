import React, { Component } from 'react';
import { Toolbar, IconButton, Typography, AppBar, TextField, ThemeProvider, Button, createTheme } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const theme = createTheme();

export class PatientDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  // back = (e) => {
  //   e.preventDefault();
  //   this.props.prevStep();
  // };

  render() {
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Patient Details
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
          <TextField
            label="Enter Patient First Name"
            onChange={handleChange('patientFirstName')}
            defaultValue={values.patientFirstName}
            required
          />
          <br />
          <TextField
            label="Enter Patient Last Name"
            onChange={handleChange('patientLastName')}
            defaultValue={values.patientLastName}
            required
          />
          <br />
          <TextField
            label="Enter Patient ID"
            onChange={handleChange('patientID')}
            defaultValue={values.patientID}
            required
          />
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Enter Patient DOB"
              onChange={(date) => handleChange('patientDOB')(date)}
              value={values.patientDOB ? dayjs(values.patientDOB, 'YYYY-MM-DD') : null}
              required
            />
          </LocalizationProvider>

          <br />
          <Button variant="contained" color="primary" onClick={this.continue}>
            Continue
          </Button>
          <br />
          <Button variant="contained" color="primary" onClick={this.back}>
            Back
          </Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default PatientDetails;
