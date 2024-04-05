import React, { Component } from "react";
import {
  AppBar,
  Box,
  Button,
  Typography,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";

export class FormUserDetails extends Component {
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
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <Box>
        <React.Fragment>
          <AppBar position="static">
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Confirm User Data
            </Typography>
          </AppBar>
          <List>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
          <Button
            variant="contained"
            style={styles.button}
            onClick={this.continue}
          >
            Confirm & Continue
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
