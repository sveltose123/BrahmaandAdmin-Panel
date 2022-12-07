import React, { Component } from "react";
import { Card, CardBody, Row, Col, Form, Label, Input, Button, Breadcrumb, CustomInput, BreadcrumbItem, } from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
// import { history } from "../../../history";
import { Route } from "react-router-dom";
import swal from "sweetalert";
export default class EditBlog extends Component {
    constructor (props) {
        super(props);
        this.state = {
            blog_title: "",
            blogImg: "",
            posted_by: "",
            desc: "",
            blog_type: "",
            selectedFile: null,
            selectedName: "",
            status: "",
        };
    }
    onChangeHandler = (event) => {
        this.setState({ selectedFile: event.target.files[0] });
        this.setState({ selectedName: event.target.files[0].name });
        console.log(event.target.files[0]);
    };
    onChangeHandler = (event) => {
        this.setState({ selectedFile: event.target.files });
        this.setState({ selectedName: event.target.files.name });
        console.log(event.target.files);
    };
    changeHandler1 = (e) => {
        this.setState({ status: e.target.value });
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };


    componentDidMount() {
        let { id } = this.props.match.params;
        axiosConfig
            .get(`/admin/viewoneBlog/${id}`, {

            })
            .then((response) => {
                console.log(response);
                this.setState({
                    blog_title: response.data.data.blog_title,
                    posted_by: response.data.data.posted_by,
                    desc: response.data.data.desc,
                    blog_type: response.data.data.blog_type,
                    blogImg: response.data.data.blogImg,
                    status: response.data.data.status,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    submitHandler = (e) => {
        e.preventDefault();
        let { id } = this.props.match.params;
        const data = new FormData();
        data.append("blog_title", this.state.blog_title);
        data.append("posted_by", this.state.posted_by);
        data.append("desc", this.state.desc);
        data.append("blog_type", this.state.blog_type);
        data.append("status", this.state.status);
        for (const file of this.state.selectedFile) {
            if (this.state.selectedFile !== null) {
                data.append("blogImg", file, file.name);

            }
        }
        for (var value of data.values()) {
            console.log(value);
        }
        for (var key of data.keys()) {
            console.log(key);
        }
        axiosConfig
            .post(`/admin/editBlog/${id}`, data)
            .then((response) => {
                console.log(response);
                swal("Success!", "Submitted SuccessFull!", "success");
                this.props.history.push("/app/brahmaand/blogs/blogList");
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
                                <BreadcrumbItem href="/app/brahmaand/blogs/blogList" tag="a">
                                    Blog List
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Edit Blog </BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Edit Blog
                            </h1>
                        </Col>
                        <Col>
                            <Route
                                render={({ history }) => (
                                    <Button
                                        className=" btn btn-danger float-right"
                                        onClick={() => history.push("/app/brahmaand/blogs/blogList")}
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
                                        name="blog_title"
                                        placeholder=""
                                        value={this.state.blog_title}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Posted By</Label>
                                    <Input
                                        required
                                        type="text"
                                        name="posted_by"
                                        placeholder="Enter Name"
                                        value={this.state.posted_by}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Descripiton</Label>
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
                                    <Label>Thumnail Image</Label>
                                    <CustomInput
                                        type="file"
                                        //   multiple
                                        onChange={this.onChangeHandler} />
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <Label for="exampleSelect"> Blog Type</Label>
                                    <Input

                                        name="blog_type"
                                        type="select"
                                        value={this.state.blog_type}
                                        onChange={this.changeHandler}
                                    >
                                        <option>Select Type</option>

                                        <option value="Recommended">Recommended</option>
                                        <option value="Popular">Popular</option>

                                    </Input>
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
