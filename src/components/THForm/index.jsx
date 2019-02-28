import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { AddCircle, Cancel } from "@material-ui/icons";
import {
  Grid,
  Button,
  TextField,
  MenuItem,
  InputAdornment
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "20px 40px 0 40px"
  },
  button: {
    //margin: theme.spacing.unit
    // backgroundColor: "blue"
  },
  csfullWidth: {
    width: "100%"
  },
  margin: {
    margin: 0
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});
const ranges = [
  {
    value: 0,
    label: "Small"
  },
  {
    value: 1,
    label: "Medium"
  },
  {
    value: 2,
    label: "High"
  }
];

class THForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      level: 0,
    };
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = event => {
    
    let item = {
      name: this.state.name,
      level : this.state.level
    }
    this.props.onClickSumbit(item);
    event.preventDefault();
  };

  render() {
    const { classes, } = this.props;
    return (
        <form onSubmit={this.handleSubmit}> 
      <Grid container spacing={16}>
       
          <Grid item sm={12} md={6} />
          <Grid
            item
            sm={12}
            md={6}
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={6} lg={3}>
              <TextField
                className={classes.csfullWidth}
                id="outlined-with-placeholder"
                label="Task note"
                placeholder="Enter text key"
                margin="normal"
                variant="outlined"
                value={this.state.name}
                onChange={this.handleChange("name")}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
            <TextField
                select
                className={classes.csfullWidth}
                variant="outlined"
                label="Sort List"
                margin="normal"
                value={this.state.level}
                onChange={this.handleChange("level")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Type</InputAdornment>
                  )
                }}
              >
                {ranges.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid
              item
              md={12}
              lg={6}
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Grid item md={4} lg={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  size="large"
                  type='summit'
                >
                  Summit
                  {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                  <AddCircle className={classes.rightIcon} />
                </Button>
              </Grid>
              <Grid item md={4} lg={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="default"
                  size="large"
                  onClick={this.props.onClickCancel}
                >
                  Cancel
                  {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                  <Cancel className={classes.rightIcon} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        
      </Grid>
       </form> 
    );
  }
}

export default withStyles(styles)(THForm);
