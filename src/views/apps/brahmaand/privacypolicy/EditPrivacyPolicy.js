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
export default class EditPrivacyPolicy extends Component {
    constructor (props) {
        super(props);
        this.state = {
            desc: "",


        };
    }
    onEditorStateChange = (editorState, response) => {
        this.setState({
            editorState,
            desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),

        });
    };
    componentDidMount() {
        let { id } = this.props.match.params;
        axiosConfig
            .get(`/admin/getonePrivcyPlcy/${id}`, {
            })
            .then((response) => {
                console.log(response);
                this.setState({
                    desc: response.data.data.desc,

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
            .post(`/admin/editPrivcyPlcy/${id}`, this.state)
            .then((response) => {
                console.log(response);
                swal("Success!", "Submitted SuccessFull!", "success");
                this.props.history.push("/app/brahmaand/privacypolicy/privacyPolicy");
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
                                <BreadcrumbItem href="/app/brahmaand/privacypolicy/privacyPolicy" tag="a">
                                    PrivacyPolicy
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Edit PrivacyPolicy </BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Edit PrivacyPolicy
                            </h1>
                        </Col>
                        <Col>
                            <Route
                                render={({ history }) => (
                                    <Button
                                        className=" btn btn-danger float-right"
                                        onClick={() => history.push("/app/brahmaand/privacypolicy/privacyPolicy")}
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
                                    <FormGroup>
                                        <Label>Descripition</Label>
                                        <Editor
                                            toolbarClassName="demo-toolbar-absolute"
                                            wrapperClassName="demo-wrapper"
                                            editorClassName="demo-editor"
                                            editorState={this.state.editorState}
                                            onEditorStateChange={this.onEditorStateChange}
                                            dangerouslySetInnerHTML={{ __html: this.state.desc }}
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

