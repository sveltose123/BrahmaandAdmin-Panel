import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { history } from "../../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";
// import Datetime from "react-datetime";
// import DatePicker from "react-flatpickr";

export default class AddTU extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desc: "",
      video_link: "",
    };
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/add_Tuniversity", this.state, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/explore/Trupee/trupeeUnivercity");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem
                  href="/app/explore/Trupee/trupeeUnivercity"
                  tag="a"
                >
                  Trupee Univercity List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Trupee Univercity</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Trupee Univercity
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/explore/Trupee/trupeeUnivercity")
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
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Title</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder=""
                    value={this.state.title}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Image</Label>
                  <Input
                    // required
                    type="text"
                    name="image"
                    placeholder=""
                    value={this.state.image}
                    onChange={this.changeHandler}
                  ></Input>
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Image</Label>
                  <Input
                    required
                    type="file"
                    name="image"
                    onChange={this.onChangeHandler}
                  />
                </Col> */}
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Video Link</Label>
                  <Input
                    required
                    type="text"
                    name="video_link"
                    placeholder=""
                    value={this.state.video_link}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Descripition</Label>
                  <Input
                    required
                    type="textarea"
                    name="desc"
                    placeholder=""
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>  */}
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
