import React, { Component } from "react";
import { Card, CardBody, CustomInput, Row, Col, Form, Label, Input, Button, Breadcrumb, BreadcrumbItem, } from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
// import { history } from "../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class AddSubcategory extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: "",
            desc: "",
        };

        this.state = {
            categoryT: []
        };
    }
    changeHandler1 = (e) => {
        this.setState({ status: e.target.value });
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    async componentDidMount() {
        axiosConfig
            .get("/getallCategory")
            .then((response) => {
                console.log(response);
                this.setState({
                    // scriptT: response.data.data,
                    categoryT: response.data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    submitHandler = (e) => {
        e.preventDefault();

        axiosConfig
            .post("/addSubCategory", this.state, {
                // headers: {
                //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
                // },
            })
            .then((response) => {
                console.log(response);
                swal("Success!", "Submitted SuccessFull!", "success");
                this.props.history.push("/app/brahmaand/subcategory/subcategoryList");
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
                                <BreadcrumbItem href="/app/brahmaand/subcategory/subcategoryList" tag="a">
                                    SubCategory List
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Add SubCategory</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Add SubCategory
                            </h1>
                        </Col>
                        <Col>
                            <Route
                                render={({ history }) => (
                                    <Button
                                        className=" btn btn-danger float-right"
                                        onClick={() => history.push("/app/brahmaand/subcategory/subcategoryList")}
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
                                <Col lg="6" md="6" className="mb-2">
                                    <Label for="exampleSelect">SubCategory</Label>

                                    <CustomInput
                                        type="select"
                                        name="category"
                                        value={this.state.category}
                                        onChange={this.changeHandler}
                                    >
                                        <option>select Category</option>
                                        {this.state.categoryT?.map((allCategory) => (
                                            <option value={allCategory?._id} key={allCategory?._id}>
                                                {allCategory?.title}
                                            </option>
                                        ))}
                                    </CustomInput>
                                </Col>
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
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Note</Label>
                                    <Input
                                        required
                                        type="text"
                                        name="desc"
                                        placeholder=""
                                        value={this.state.desc}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Upload Image</Label>
                                    <Input
                                        // required
                                        type="file"
                                        name="script_name"
                                        placeholder="Enter mobile no"
                                        value={this.state.script_name}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col> */}
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