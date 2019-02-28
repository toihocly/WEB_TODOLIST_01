import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, MenuItem } from "@material-ui/core";


const styles = theme => ({
  csfullwidth:{width: '100%'}
});

class THSort extends Component {
  constructor(props) {
    super(props);
    this.state = { valueRange: "name-asc" };
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    // convert "A-B" ==> "A" and "B"   =split()
    const arry =event.target.value.split("-",2);
    this.props.onHandleSort(arry[0],arry[1]) ;
  };


  componentWillReceiveProps(nextProps){
    this.setState({valueRange: `${nextProps.orderBy}-${nextProps.order}`})
  }



  render() {
      const {classes , values } = this.props;
    return (
      <TextField
        select
        className={classes.csfullwidth}
        variant="outlined"
        label="Sort List"
        margin="normal"
        value={this.state.valueRange}
        onChange={this.handleChange("valueRange")}
        InputProps={{
          startAdornment: <InputAdornment position="start">Type</InputAdornment>
        }}
      >
        {values.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }
}
// THCombobox.propTypes = {
//   values: PropTypes.object.isRequired,
// };
export default withStyles(styles)(THSort);
