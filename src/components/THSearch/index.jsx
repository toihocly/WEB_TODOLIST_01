import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const styles = theme => ({});

class THSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { strSearch: '' };
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleKeyPress = (event) =>{
    if(event.key === 'Enter')
      this.props.onHandleSearch(this.state.strSearch);
  }

  render() {
    const { classes } = this.props;
    return (
      <TextField
        fullWidth
        value={this.state.strSearch}
        onChange={this.handleChange("strSearch")}
        onKeyPress={this.handleKeyPress}
        id="outlined-with-placeholder"
        label="Search for"
        placeholder="Enter text key"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    );
  }
}
// THCombobox.propTypes = {
//   values: PropTypes.object.isRequired,
// };
export default withStyles(styles)(THSearch);
