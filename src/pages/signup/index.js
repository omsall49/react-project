import "./index.css";
import React from "react";
import { TextField, Button, Paper } from "@mui/material";
import { CountrySelect } from "../../components/index.js";

class SignupPageComponent extends React.Component {
  render() {
    return (
      <div id="SignUpBow-wrapper">
        <Paper elevation={16}>
          <div id="SignUpBox">
            <div>
              <TextField
                id="standard-name-input"
                label="Name"
                variant="standard"
                helperText="in English"
              />
            </div>
            <div>
              <TextField
                id="standard-Email-input"
                label="Email"
                variant="standard"
                helperText="include @"
              />
            </div>
            <div>
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                helperText="include number"
              />
            </div>
            <div>
              <CountrySelect />
            </div>
            <div id="ButtonBox">
              <Button variant="contained">가입하기</Button>
              <Button variant="outlined">뒤로가기</Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default SignupPageComponent;
