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
import axiosConfig from "../../../../axiosConfig";
// import { history } from "../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class AddCategory extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: "",
            desc: "",
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
            .post("/addCategory", this.state, {
                // headers: {
                //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
                // },
            })
            .then((response) => {
                console.log(response);
                swal("Success!", "Submitted SuccessFull!", "success");
                this.props.history.push("/app/brahmaand/category/categoryList");
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
                                <BreadcrumbItem href="/app/brahmaand/category/categoryList" tag="a">
                                    Category List
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Add Category</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Add Category
                            </h1>
                        </Col>
                        <Col>
                            <Route
                                render={({ history }) => (
                                    <Button
                                        className=" btn btn-danger float-right"
                                        onClick={() => history.push("/app/brahmaand/category/categoryList")}
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
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Image</Label>
                                    <Input
                                        // required
                                        type="file"
                                        name="script_name"
                                        placeholder=""
                                        value={this.state.script_name}
                                        onChange={this.changeHandler}
                                    ></Input>
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