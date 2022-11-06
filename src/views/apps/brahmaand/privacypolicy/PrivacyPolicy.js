import React from "react";
import { Card, CardBody, Row, Col, Form, Label, Input, Button, FormGroup } from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class PrivacyPolicy extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      desc: "",
    };

  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("http://3.108.185.7/nodejs/api/admin/addabout", this.state)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/about/AllaboutUs");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle=" Privacy Policy"
          breadCrumbParent="Home"
          breadCrumbActive=" Privacy Policy"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Privacy Policy
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/brahmaand/privacypolicy/PrivacyPolicy")
                    }
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

                <Col lg="12" md="12" sm="12" className="mb-2">
                  <FormGroup>
                    <Label>Descripition</Label>
                    <Editor
                      toolbarClassName="demo-toolbar-absolute"
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      editorState={this.state.editorState}
                      onEditorStateChange={this.onEditorStateChange}
                    // toolbar={{
                    //   options: [
                    //     "inline",
                    //     "blockType",
                    //     "fontSize",
                    //     "fontFamily",

                    //     "image",


                    //   ],
                    //   inline: {
                    //     options: [
                    //       "bold",
                    //       "italic",
                    //       "underline",
                    //       "strikethrough",
                    //       "monospace",
                    //     ],
                    //     bold: {
                    //       className: "bordered-option-classname",
                    //     },
                    //     italic: {
                    //       className: "bordered-option-classname",
                    //     },
                    //     underline: {
                    //       className: "bordered-option-classname",
                    //     },
                    //     strikethrough: {
                    //       className: "bordered-option-classname",
                    //     },
                    //     code: {
                    //       className: "bordered-option-classname",
                    //     },
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
                    //     className: "bordered-option-classname"
                    //   },

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
                    Submit
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default PrivacyPolicy






