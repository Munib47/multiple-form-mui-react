import React, { Component } from "react";
import { AppBar, Box, TextField, Button, Typography } from "@mui/material";

export class FormUserDetails extends Component {
  state = {
    occupation: "Enter Your Occupation",
    city: "Enter Your City",
    bio: "Enter Your Bio",
  };

  handleFocus = (data) => {
    if (data === "occupation") {
      this.setState((prev) => {
        return {
          ...prev,
          occupation: "Occupation",
        };
      });
    } else if (data === "city") {
      this.setState((prev) => {
        return {
          ...prev,
          city: "City",
        };
      });
    } else if (data === "bio") {
      this.setState((prev) => {
        return {
          ...prev,
          bio: "Bio",
        };
      });
    }
  };

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
      <Box>
        <React.Fragment>
          <AppBar position="static">
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Form Personal Details
            </Typography>
          </AppBar>
          <TextField
            label={this.state.occupation}
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
            sx={{ marginBottom: 1, marginTop: 1 }}
            onFocus={() => this.handleFocus("occupation")}
          />
          <br />
          <TextField
            label={this.state.city}
            onChange={handleChange("city")}
            defaultValue={values.city}
            sx={{ marginBottom: 1 }}
            onFocus={() => this.handleFocus("city")}
          />
          <br />
          <TextField
            label={this.state.bio}
            onChange={handleChange("bio")}
            defaultValue={values.bio}
            onFocus={() => this.handleFocus("bio")}
          />
          <br />
          <Button
            variant="contained"
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
          <Button style={styles.button} variant="outlined" onClick={this.back}>
            Back
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
