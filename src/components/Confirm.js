import React, { Component } from 'react';
import { AppBar, List, ListItem, ListItemText, ThemeProvider, Button, createTheme } from '@mui/material';

const theme = createTheme();

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();

    // Process Form - send data to Firebase here

    this.props.nextStep();
  };
   
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values: { patientFirstName, patientLastName, patientID } } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static" title="Confirm Data" />
          <List>
            <ListItem>
              <ListItemText primary={`First Name: ${patientFirstName}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Last Name: ${patientLastName}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`ID: ${patientID}`} />
            </ListItem>
          </List>
          <Button variant="contained" color="primary" onClick={this.continue}>
            Confirm and Continue
          </Button>
          <Button variant="contained" color="primary" onClick={this.back}>
            Back
          </Button>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Confirm;
