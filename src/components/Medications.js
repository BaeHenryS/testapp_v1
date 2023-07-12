import React, { Component } from 'react';
import { Toolbar, IconButton, Typography, AppBar, TextField, ThemeProvider, Button, createTheme } from '@mui/material';

const theme = createTheme();

export class Medications extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                Medications
              </Typography>
            </Toolbar>
          </AppBar>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
          <TextField
            label="Enter Medication Name"
            onChange={handleChange('medicationName')}
            defaultValue={values.medicationName}
          />
          <br />
          <TextField
            label="Enter Medication ID"
            onChange={handleChange('medicationID')}
            defaultValue={values.medicationID}
          />
          <br></br>
          <TextField
              label="Enter Medication Description"
              multiline
              rows={4}
              onChange={handleChange('medicationDescription')}
              defaultValue={values.medicationDescription}
              sx={{ width: '90%' }}
          />
          <br />
          <Button variant="contained" color="primary" onClick={this.continue}>
            Continue
          </Button>
          <br></br>
          <Button variant="contained" color="primary" onClick={this.back}>
            Back
          </Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default Medications;
