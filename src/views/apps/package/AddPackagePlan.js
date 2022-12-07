import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class AddMembership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pack_name: "",
      mrp_price: "",
      desc: "",
      des_price: "",
     
      status: "",
      
   
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
      .post("/addPlan", this.state, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/package/PackagePlanList");
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
                <BreadcrumbItem href="/app/package/PackagePlanList" tag="a">
                Membership List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Membership</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Membership
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/package/PackagePlanList")}
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
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>User ID</Label>
                  <Input
                    type="text"
                    placeholder="Enter User Id"
                    // name="desc"{
  
    

                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col> */}
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Package Plan</Label>
                  <Input
                    id="exampleSelect"
                    name="pack_name"
                    type="select"
                    value={this.state.pack_name}
                    onChange={this.changeHandler}
                  >
                    <option>Select Plan</option>
                    <option>FREE</option>
                    <option>1 Month</option>
                    <option>3 Month</option>
                    <option>6 Month</option>
                    <option>1 Year</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>MRP Price</Label>
                  <Input
                    type="text"
                    placeholder="Enter MRP Price"
                    name="mrp_price"
                    value={this.state.mrp_price}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Discount Price</Label>
                  <Input
                    type="text"
                    placeholder="Enter Discount Price"
                    name="des_price"
                    value={this.state.des_price}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>Discount </Label>
                  <Input
                    type="text"
                    placeholder="Enter Discount "
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
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
                </Col>
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