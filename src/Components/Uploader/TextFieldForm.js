import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

class TextFieldForm extends Component {
  state = {
    shoeSize: "",
    shoeDetails: "",
    sellingPrice: "",
    boughtPrice: "",
    isForSale: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleForSale = value => {
    this.setState({
      isForSale: value
    });
  };

  render() {
    // console.log("shoe size: ", this.state.shoeSize);
    // console.log("bought price: ", this.state.boughtPrice);
    // console.log("selling price: ", this.state.sellingPrice);
    console.log(this.state.shoeDetails);
    const { classes } = this.props;

    return (
      <form
        noValidate
        autoComplete="off"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <FormLabel component="legend">Is your shoe for sale?</FormLabel>
            <RadioGroup style={{ margin: 0 }}>
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Yes"
                onClick={() => this.handleForSale(true)}
              />
              <FormControlLabel
                value="false"
                control={<Radio />}
                onClick={() => this.handleForSale(false)}
                label="No"
              />
            </RadioGroup>
            <TextField
              id="standard-multiline-fixed"
              label="Shoe Details"
              multiline
              rows={3}
              value={this.state.multiline}
              onChange={this.handleChange("shoeDetails")}
              style={{ marginTop: "10px", width: "90%" }}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <TextField
              id="standard-number"
              label="Shoe Size"
              value={this.state.shoeSize}
              onChange={this.handleChange("shoeSize")}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />

            <TextField
              id="standard-number"
              label="Bought Price (Dollars)"
              value={this.state.boughtPrice}
              onChange={this.handleChange("boughtPrice")}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />

            <TextField
              id="standard-number"
              label="Selling Price (Dollars)"
              value={this.state.sellingPrice}
              onChange={this.handleChange("sellingPrice")}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {}}
          style={{ width: "90%", marginTop: "3%", marginBottom: "2%" }}
        >
          Add Shoe to Closet
        </Button>
      </form>
    );
  }
}

TextFieldForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default TextFieldForm;