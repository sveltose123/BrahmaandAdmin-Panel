import draftToHtml from "draftjs-to-html";
import React from "react";
import { Card, CardBody, Col, Row, Form, Button, Label } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import axiosConfig from "../../../../axiosConfig";
import { history } from "../../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";

class AddPrivacyPolicy extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            desc: "",
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
            desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        });
    };
    submitHandler = (e) => {
        e.preventDefault();
        axiosConfig
            .post("/admin/addprivcyPlcy", this.state)
            .then((response) => {
                console.log(response);
                this.props.history.push(
                    "/app/brahmaand/privacypolicy/privacyPolicy"
                );
                swal("Good job!", "You clicked the button!", "success");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render() {
        return (
            <Card>
                <Row className="m-2">
                    <Col>
                        <h1 col-sm-6 className="float-left">
                            Add New PrivacyPolicy
                        </h1>
                    </Col>
                    <Col>
                        <Route
                            render={({ history }) => (
                                <Button
                                    className=" btn btn-danger float-right"
                                    onClick={() =>
                                        history.push("/app/brahmaand/privacypolicy/privacyPolicy")
                                    }
                                >
                                    Back
                                </Button>
                            )}
                        />
                    </Col>
                </Row>
                <CardBody>
                    <Form onSubmit={this.submitHandler}>
                        <Col lg="6" md="6" sm="6" className="mb-2">
                            <Label>Descripition</Label>
                            <Editor
                                toolbarClassName="demo-toolbar-absolute"
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                editorState={this.state.editorState}
                                onEditorStateChange={this.onEditorStateChange}
                            // toolbar={{
                            //   options: ["inline", "blockType", "fontSize", "fontFamily", "image"],
                            //   inline: {
                            //     options: [
                            //       "bold",
                            //       "italic",
                            //       "underline",
                            //       "strikethrough",
                            //       "monospace",
                            //     ],
                            //     bold: { className: "bordered-option-classname" },
                            //     italic: { className: "bordered-option-classname" },
                            //     underline: { className: "bordered-option-classname" },
                            //     strikethrough: { className: "bordered-option-classname" },
                            //     code: { className: "bordered-option-classname" },
                            //   },
                            //   blockType: {
                            //     className: "bordered-option-classname",
                            //   },
                            //   fontSize: {
                            //     className: "bordered-option-classname",
                            //   },
                            //   fontFamily: {
                            //     className: "bordered-option-classname",
                            //   },
                            //   image: {
                            //     className: "bordered-option-classname",
                            //   },

                            // }}
                            />
                            <br />
                            <Button color="primary">Add New T&C</Button>
                        </Col>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}
export default AddPrivacyPolicy;

