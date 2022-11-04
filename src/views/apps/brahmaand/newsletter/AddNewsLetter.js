import React, { Component } from "react";
import { Card, CardBody, Row, Col, Form, Label, Input, Button, Breadcrumb, BreadcrumbItem, CustomInput, } from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
// import { history } from "../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class AddContent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videoid: "",
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
            .post("/admin/add_Video", this.state)

            .then((response) => {
                console.log(response.data.data);
                swal("Success!", "Submitted SuccessFull!", "success");
                this.props.history.push("/app/brahmaand/newsletter/newsLetter");
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
                                <BreadcrumbItem href="/app/brahmaand/newsletter/newsLetter" tag="a">
                                    NewsLetter Video List
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Add Video</BreadcrumbItem>

                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Add Video
                            </h1>
                        </Col>
                        <Col>
                            <Route
                                render={({ history }) => (
                                    <Button
                                        className=" btn btn-danger float-right"
                                        onClick={() => history.push("/app/brahmaand/newsletter/newsLetter")}
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
                                    <Label>Videos</Label>
                                    <Input
                                        required

                                        name="videoid"
                                        placeholder="Enter title"
                                        value={this.state.videoid}
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