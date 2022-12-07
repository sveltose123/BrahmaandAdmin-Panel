import React, { Component } from "react";
import { Card, CardBody, Row, Col, Form, Label, Input, FormGroup, Button, Breadcrumb, CustomInput, BreadcrumbItem, } from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { Route } from "react-router-dom";
import swal from "sweetalert";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
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
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
            desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        });
    };
    componentDidMount() {
        let { id } = this.props.match.params;
        axiosConfig
            .get(`/admin/getoneBlog_Cmntlist/${id}`, {
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
            .post(`/admin/editBlog_Cmntlist/${id}`, this.state)
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
                                        placeholder="Enter Rating"
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
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <FormGroup>
                                        <Label>Descripition</Label>
                                        <Editor
                                            toolbarClassName="demo-toolbar-absolute"
                                            wrapperClassName="demo-wrapper"
                                            editorClassName="demo-editor"
                                            editorState={this.state.editorState}
                                            onEditorStateChange={this.onEditorStateChange}
                                        // toolbar={{
                                        //     options: [
                                        //         "inline",
                                        //         "blockType",
                                        //         "fontSize",
                                        //         "fontFamily",
                                        //     ],
                                        //     inline: {
                                        //         options: [
                                        //             "bold",
                                        //             "italic",
                                        //             "underline",
                                        //             "strikethrough",
                                        //             "monospace",
                                        //         ],
                                        //         bold: { className: "bordered-option-classname" },
                                        //         italic: { className: "bordered-option-classname" },
                                        //         underline: { className: "bordered-option-classname" },
                                        //         strikethrough: {
                                        //             className: "bordered-option-classname",
                                        //         },
                                        //         code: { className: "bordered-option-classname" },
                                        //     },
                                        //     blockType: {
                                        //         className: "bordered-option-classname",
                                        //     },
                                        //     fontSize: {
                                        //         className: "bordered-option-classname",
                                        //     },
                                        //     fontFamily: {
                                        //         className: "bordered-option-classname",
                                        //     },
                                        // }}

                                        />
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row>
                                <Col lg="6" md="6" sm="6" className="mb-2">
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
