import React, { Component } from "react";
import { AppBar, Box, Typography } from "@mui/material";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process Form //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <Box>
        <React.Fragment>
          <AppBar position="static" color="success">
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
              Success
            </Typography>
          </AppBar>
          <h1>Thank You For Your Submission</h1>
          <p>You will ge an email with further instructions</p>
        </React.Fragment>
      </Box>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default Success;
