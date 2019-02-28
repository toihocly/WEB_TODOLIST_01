import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import THSearch from "../THSearch";
import THSort from "../THSort";
import THForm from "../THForm";
const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "20px 40px 0 40px"
  },
  input: {
    display: "none"
  },
  // button:{
  //   backgroundColor:'blue'
  // },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  paper: {
    padding: "0 20px"
  },
  padding: {
    paddingLeft: 10
  }
});

const ranges = [
  {
    value: "name-asc",
    label: "TASK ASC"
  },
  {
    value: "name-desc",
    label: "TASK DESC"
  },
  {
    value: "level-asc",
    label: "LEVEL ASC"
  },
  {
    value: "level-desc",
    label: "LEVEL DESC"
  }
];

class THControls extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  render() {
    const { classes ,isShowForm } = this.props;
    let elmShow = null;
    if(isShowForm){
      elmShow = <THForm  onClickSumbit={this.props.onHandleAddNode} onClickCancel={this.props.onHandleToogle}/>;
    }
    return (
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={2}>
          <Grid
            spacing={16}
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={6} sm={3}>
              <THSearch  onHandleSearch={this.props.onHandleSearch} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <THSort 
              order ={this.props.order}
              orderBy={this.props.orderBy}
              values={ranges} 
              onHandleSort={this.props.onHandleSort}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                disabled ={isShowForm ? true: false}
                className={classes.button}
                onClick={this.props.onHandleToogle}
              >
                Add Task
                <Send className={classes.rightIcon} />
              </Button>
            </Grid>
          </Grid>

           {elmShow}

        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(THControls);
