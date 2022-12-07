import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import { Card, CardBody, Row, Col, Form, Label, Input, Button, Breadcrumb, BreadcrumbItem, CustomInput, } from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class AddBlog extends Component {
    constructor (props) {
        super(props);
        this.state = {
            blog_title: "",
            desc: "",
            blogImg: "",
            posted_by: "",
            posted_by_img: "",
            blog_type: "",
            selectedFile: null,
            selectedName: "",
            status: "",
            selectedFile1: null,
        };
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
            desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        });
    };
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
    onChangeHandler1 = (event) => {
        this.setState({ selectedFile1: event.target.files });
        this.setState({ selectedName: event.target.files.name });
        console.log(event.target.files);
    };
    changeHandler1 = (e) => {
        this.setState({ status: e.target.value });
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    submitHandler = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("blog_title", this.state.blog_title);
        data.append("posted_by", this.state.posted_by);
        data.append("desc", this.state.desc);
        data.append("blog_type", this.state.blog_type);
        for (const file of this.state.selectedFile) {
            if (this.state.selectedFile !== null) {
                data.append("blogImg", file, file.name);
            }
        }
        for (const file of this.state.selectedFile1) {
            if (this.state.selectedFile1 !== null) {
                data.append("posted_by_img", file, file.name);
            }
        }
        for (var value of data.values()) {
            console.log(value);
        }
        for (var key of data.keys()) {
            console.log(key);
        }

        axiosConfig
            .post("/admin/addBlog", data)

            .then((response) => {
                console.log(response.data.data);
                swal("Success!", "Submitted SuccessFull!", "success");
                this.props.history.push("/app/brahmaand/blogs/blogList");
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
                                <BreadcrumbItem href="/app/brahmaand/blogs/BlogList" tag="a">
                                    Blog List
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Add Blog </BreadcrumbItem>

                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Add Blog
                            </h1>
                        </Col>
                        <Col>
                            <Route
                                render={({ history }) => (
                                    <Button
                                        className=" btn btn-danger float-right"
                                        onClick={() => history.push("/app/brahmaand/blogs/BlogList")}
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
                                        placeholder="Enter title"
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
                                        placeholder="Enter name"
                                        value={this.state.posted_by}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
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

                                    //         "image",


                                    //     ],
                                    //     inline: {
                                    //         options: [
                                    //             "bold",
                                    //             "italic",
                                    //             "underline",
                                    //             "strikethrough",
                                    //             "monospace",
                                    //         ],
                                    //         bold: {
                                    //             className: "bordered-option-classname",
                                    //         },
                                    //         italic: {
                                    //             className: "bordered-option-classname",
                                    //         },
                                    //         underline: {
                                    //             className: "bordered-option-classname",
                                    //         },
                                    //         strikethrough: {
                                    //             className: "bordered-option-classname",
                                    //         },
                                    //         code: {
                                    //             className: "bordered-option-classname",
                                    //         },
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
                                    //     image: {
                                    //         className: "bordered-option-classname"
                                    //     },

                                    // }}
                                    />
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
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Thumnail Image</Label>
                                    <CustomInput
                                        // required
                                        type="file"
                                        onChange={this.onChangeHandler}
                                    ></CustomInput>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Posted Image</Label>
                                    <CustomInput
                                        // required
                                        type="file"
                                        onChange={this.onChangeHandler1}
                                    ></CustomInput>
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