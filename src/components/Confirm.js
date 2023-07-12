import React, { Component } from 'react';
import { AppBar, List, ListItem, ListItemText, ThemeProvider, Button, createTheme } from '@mui/material';
import { Toolbar, IconButton, Typography, TextField } from '@mui/material';
const theme = createTheme();

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();

    // Process Form - send data to Firebase here
    // 

    this.props.nextStep();
  };
  
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values: { patientFirstName, patientLastName, patientID, medicationDescription, medicationName, medicationID, patientDOB } } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Confirmation
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
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
            <ListItem>
              <ListItemText primary={`Patient Date of Birth: ${patientDOB}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Medication: ${medicationName}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Medication Description: ${medicationDescription}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Medication ID: ${medicationID}`} />
            </ListItem>
          </List>
          <br></br>
          <Button variant="contained" color="primary" onClick={this.continue}>
            Confirm and Continue
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

export default Confirm;
