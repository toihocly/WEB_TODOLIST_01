import React, { Component } from "react";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";

import THTable from "./components/THTable";
import { Grid } from "@material-ui/core";
import THHeading from "./components/THHeading";
import THControls from "./components/THControls";
import { filter, includes, lowerCase } from "lodash";
import { items } from "./components/Mocks";
const uuidv4 = require("uuid/v4");
const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "20px 40px 0 40px"
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listDataOrigin: [],
      isShowForm: false,
      strSearch: "",
      orderBy: "name",
      order: "asc",
      selected: [],
      itemSelected: null
    };
    this.handdleToogle = this.handdleToogle.bind(this);
  }

  componentWillMount() {
    const values = localStorage.getItem("tasks");
    
    if (values === null) 
      localStorage.setItem("tasks", []);
    else
      this.setState({listDataOrigin: JSON.parse(values)});
  }

  handdleToogle() {
    this.setState({ isShowForm: !this.state.isShowForm });
  }

  handleChangeSort = (orderBy, order) => {
    this.setState({ orderBy, order });
  };

  handleEdit = item => {};

  handleDelete = slecled => {
    this.setState({ slecled });
    const newItems = filter(this.state.listDataOrigin, item => {
      return !includes(slecled, item.id);
    });

    this.setState({ listDataOrigin: newItems, slecled: [] });

    localStorage.setItem("tasks", JSON.stringify(newItems));
  };

  handleAddNode = newItem => {
    let { listDataOrigin } = this.state;
    listDataOrigin.push({
      id: uuidv4(),
      name: newItem.name,
      level: newItem.level // 0 Small, 1 Medium, 2 High
    });

    this.setState({ listDataOrigin: listDataOrigin, isShowForm: false });

    localStorage.setItem("tasks", JSON.stringify(listDataOrigin));
  };

  handdleChageSearch = value => {
    this.setState({ strSearch: value });
  };

  render() {
    const { classes } = this.props;
    let listData = [];
    const {
      listDataOrigin,
      isShowForm,
      strSearch,
      orderBy,
      order,
      selected,
      itemSelected
    } = this.state;

    listData = filter(listDataOrigin, item => {
      return includes(lowerCase(item.name), lowerCase(strSearch));
    });

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <THHeading />
          <THControls
            order={order}
            orderBy={orderBy}
            itemSelected={itemSelected}
            isShowForm={isShowForm}
            onHandleSort={this.handleChangeSort}
            onHandleSearch={this.handdleChageSearch}
            onHandleAddNode={this.handleAddNode}
            onHandleToogle={this.handdleToogle}
          />
          <THTable
            order={order}
            orderBy={orderBy}
            selected={selected}
            listData={listData}
            onHandleSort={this.handleChangeSort}
            onHandleDelete={this.handleDelete}
            onHandleEdit={this.handleEdit}
          />
        </Grid>
      </div>
    );
  }
}

// App.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(App);
