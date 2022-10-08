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
} from "reactstrap";
// import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import moment from "moment";

export default class EditPackagePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pack_name: "",
      mrp_price: "",
      desc: "",
      des_price: "",
    
      status: "",
    
    };
    // this.state = {
    //   planN: [],
    // };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getoneexpDate/${id}`, {
      
      })
      .then((response) => {
        console.log(response);
        this.setState({
          pack_name: response.data.data.pack_name,
          mrp_price: response.data.data.mrp_price,
          status: response.data.data.status,
          des_price: response.data.data.des_price,
          desc: response.data.data.desc,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;

    axiosConfig
      .post(`/editplan/${id}`)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/package/PackagePlanList`);
      })

      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle=" Edit Membership"
          breadCrumbParent="Membership"
          breadCrumbActive=" Edit Membership"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Membership Plan
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
                    type="number"
                    placeholder="Enter MRP Price"
                    name="mrp_price"
                    value={this.state.mrp_price}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Discount Price</Label>
                  <Input
                    type="number"
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
                    Update
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
