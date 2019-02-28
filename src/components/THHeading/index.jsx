import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,Typography
} from "@material-ui/core";


const styles = theme => ({
    MarkerColor: {
        backgroundColor: "#ccfd29"
      },
  });

class THHeading extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        const {classes}  = this.props;
        return (
            <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Typography component="h2" variant="h3">
                Project01 -
              </Typography>
              <Typography
                className={classes.MarkerColor}
                component="h2"
                variant="h3"
              >
                TodoList
              </Typography>
              <div style={{ paddingTop: 30, marginLeft: 20 }}>
                <Typography component="h2" variant="h6">
                  ReactJS
                </Typography>
              </div>
            </Grid>
          </Grid>
        );
    }
}

export default withStyles(styles)(THHeading) ;