import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Card, CardBody, Col, Row, Label, FormGroup, Form, Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import axiosConfig from "../../../../axiosConfig";
// import { history } from "../../../history";
import swal from 'sweetalert';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default class EditTermCondition extends Component {

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
      .post(`/admin/edit_term_cond/${id}`, this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/brahmaand/termscondition/termConditionList");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { desc } = this.state
    return (

      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/brahmaand/termscondition/termConditionList" tag="a">
                  TermCondition
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit TermCondition </BreadcrumbItem>
              </Breadcrumb>
            </div>

          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit TermCondition
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/brahmaand/termscondition/termConditionList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Label>Descripition</Label>
            <Form onSubmit={this.submitHandler}>

              <Editor
                toolbarClassName="demo-toolbar-absolute"
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                editorState={this.state.editorState}
                onEditorStateChange={this.onEditorStateChange}




              // toolbar={{
              //   options: ["inline", "blockType", "fontSize", "fontFamily"],
              //   inline: {
              //     options: [
              //       "bold",
              //       "italic",
              //       "underline",
              //       "strikethrough",
              //       "monospace",],
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
              // }}

              />



              < br />
              <Button color="primary">Update New T&C</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

