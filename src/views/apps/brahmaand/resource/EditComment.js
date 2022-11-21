import React, { Component } from "react";
import { Card, CardBody, Row, Col, Form, Label, Input, Button, Breadcrumb, BreadcrumbItem, } from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
// import { history } from "../../../history";
import { Route } from "react-router-dom";
import swal from "sweetalert";
export default class EditComment extends Component {
    constructor (props) {
        super(props);
        this.state = {
            status: "",

        };
    }
    async componentDidMount() {
        axiosConfig
            .get("/admin/getone_coment_list")
            .then((response) => {
                console.log(response);
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
            .post(`/admin/admin_edit_coment/${id}`, this.state, {

            })
            .then((response) => {
                console.log(response);
                swal("Success!", "Submitted SuccessFull!", "success");
                this.props.history.push("/app/brahmaand/resource/resourceComment");
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
                                <BreadcrumbItem href="/app/brahmaand/resource/resourceComment" tag="a">
                                    Resource Comment List
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Edit  Resource Comment</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Edit Resource Comment
                            </h1>
                        </Col>
                        <Col>
                            <Route
                                render={({ history }) => (
                                    <Button
                                        className=" btn btn-danger float-right"
                                        onClick={() => history.push("/app/brahmaand/resource/resourceComment")}
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
                                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>UserName</Label>
                                    <Input
                                        required
                                        type="text"
                                        name="username"
                                        placeholder="Enter name"
                                        value={this.state.username}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col> */}
                                {/* <Col lg="6" md="6" className="mb-2">
                                    <Label>Rating</Label>
                                    <Input
                                        name="rating"
                                        type="text"
                                        value={this.state.rating}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col> */}
                                {/* <Col lg="6" md="6" className="mb-2">
                                    <Label>Comment</Label>
                                    <Input
                                        name="comment"
                                        type="text"
                                        value={this.state.comment}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col> */}
                            </Row>
                            <Row>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                                        <Label className="mb-1"><h4>Status</h4></Label>
                                        <div
                                            className="form-label-group"
                                            onChange={this.changeHandler1}
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
                                                value="Deactive"
                                            />
                                            <span style={{ marginRight: "3px" }}>Deactive</span>
                                        </div>
                                    </Col>
                                </Col></Row>
                            <Row>
                                <Col lg="6" md="6" sm="6" className="mb-2"><br></br>
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