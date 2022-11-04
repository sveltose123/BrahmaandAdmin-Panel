import React, { Component } from "react";
import { Card, CardBody, Row, Col, Form, Label, Input, Button, Breadcrumb, CustomInput, BreadcrumbItem, } from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
// import { history } from "../../../history";
import { Route } from "react-router-dom";
import swal from "sweetalert";
export default class EditCommentBlog extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            rating: "",
            date: "",
            comment: "",
            status: "",
        };
    }
    componentDidMount() {
        let { id } = this.props.match.params;
        axiosConfig
            .get(`/admin/viewoneBlog/${id}`, {
            })
            .then((response) => {
                console.log(response);
                this.setState({
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    changeHandler1 = (e) => {
        this.setState({ status: e.target.value });
    };
    submitHandler = (e) => {
        e.preventDefault();
        let { id } = this.props.match.params;
        axiosConfig
            .post(`/admin/editBlog/${id}`, this.state)
            .then((response) => {
                console.log(response);
                swal("Success!", "Submitted SuccessFull!", "success");
                this.props.history.push("/app/brahmaand/blogs/CommentBlog");
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
                                <BreadcrumbItem href="/app/brahmaand/blogs/CommentBlog" tag="a">
                                    CommentBlog List
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Edit CommentBlog </BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Edit CommentBlog
                            </h1>
                        </Col>
                        <Col>
                            <Route
                                render={({ history }) => (
                                    <Button
                                        className=" btn btn-danger float-right"
                                        onClick={() => history.push("/app/brahmaand/blogs/CommentBlog")}
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
                                    <Label>Username</Label>
                                    <Input
                                        required
                                        type="text"
                                        name="username"
                                        placeholder=""
                                        value={this.state.username}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Rating</Label>
                                    <Input
                                        required
                                        type="text"
                                        name="rating"
                                        placeholder="Enter Name"
                                        value={this.state.rating}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Comment</Label>
                                    <Input
                                        required
                                        type="text"
                                        name="comment"
                                        placeholder=""
                                        value={this.state.comment}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
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
