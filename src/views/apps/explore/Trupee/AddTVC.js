import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  // FormGroup,
  // CustomInput,
} from "reactstrap";
import { Route } from "react-router-dom";
import Select from "react-select";
// import { history } from "../../../history";
// import axiosConfig from "../../../../axiosConfig";
// import swal from "sweetalert";
import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";
export class AddTVC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      image: "",
      chart_type: "",
      selectedName: "",
      selectedFile: null,
    };
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    const data = new FormData();
    data.append("title", this.state.title);
    data.append("desc", this.state.desc);
    data.append("chart_type", this.state.chart_type);
    data.append("image", this.state.selectedFile, this.state.selectedName);
    for (var value of data.values()) {
      console.log(value);
    }

    for (var key of data.keys()) {
      console.log(key);
    }
    axiosConfig
      .post("/addTrending_chart", data)
      // headers: {
      //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
      // },

      .then((response) => {
        console.log(response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/explore/Trupee/TradingViewCharts");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Trading View Charts
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/explore/Trupee/TradingViewCharts")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6" className="mb-2">
                  <Label>Title</Label>
                  <Input
                    type="text"
                    placeholder="Enter MRP Price"
                    name="title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Descripiton</Label>
                  <Input
                    type="text"
                    placeholder="Enter Discount Price"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Charts</Label>
                  <Input
                    id="exampleSelect"
                    name="chart_type"
                    type="select"
                    value={this.state.chart_type}
                    onChange={this.changeHandler}
                  >
                    <option>Select Charts</option>
                    <option>Stock </option>
                    <option>Index </option>
                  </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Image</Label>
                  <Input
                    required
                    type="file"
                    name="image"
                    onChange={this.onChangeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Add Trading View Charts
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddTVC;
