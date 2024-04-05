import React, { Component } from "react";
import { AppBar, Box, TextField, Button, Typography } from "@mui/material";

export class FormUserDetails extends Component {
  state = {
    firstName: "Enter Your First Name",
    lastName: "Enter Your Last Name",
    email: "Enter Your Email",
  };

  handleFocus = (data) => {
    if (data === "firstName") {
      this.setState((prev) => {
        return {
          ...prev,
          firstName: "First Name",
        };
      });
    } else if (data === "lastName") {
      this.setState((prev) => {
        return {
          ...prev,
          lastName: "Last Name",
        };
      });
    } else if (data === "email") {
      this.setState((prev) => {
        return {
          ...prev,
          email: "Email",
        };
      });
    }
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Box>
        <React.Fragment>
          <AppBar position="static">
            {/* <Toolbar> */}
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Form User Details
            </Typography>
            {/* </Toolbar> */}
          </AppBar>
          <TextField
            label={this.state.firstName}
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            sx={{ marginBottom: 1, marginTop: 1 }}
            onFocus={() => this.handleFocus("firstName")}
          />
          <br />
          <TextField
            label={this.state.lastName}
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            sx={{ marginBottom: 1 }}
            onFocus={() => this.handleFocus("lastName")}
          />
          <br />
          <TextField
            label={this.state.email}
            onChange={handleChange("email")}
            defaultValue={values.email}
            onFocus={() => this.handleFocus("email")}
          />
          <br />
          <Button
            variant="contained"
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
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

export default FormUserDetails;
