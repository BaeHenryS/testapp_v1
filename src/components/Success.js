import React, { Component } from 'react';
import { AppBar, List, ListItem, ThemeProvider, Button, createTheme } from '@mui/material';

const theme = createTheme();

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();

    // Process Form - send data to FireBase Here

    this.props.nextStep();
  };
   
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static" title="Confirm Data" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>Thank you, your submission was successful.</h1>
            <Button variant="contained" color="primary" onClick={this.back}>
              Back
            </Button>
          </div>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Success;
