import React from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  Form,
  Button,
  Label,
  Input,
  CustomInput,
} from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";

class AddPaidServeice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      editorState: EditorState.createEmpty(),
    };
    this.state = {
      pack_nameM: [],
    };
  }
  componentDidMount() {
    //plan//
    axiosConfig
      .get("/plan_list")
      .then((response) => {
        console.log(response);
        this.setState({
          pack_nameM: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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

    // const data = new FormData();
    // data.append("desc", this.state.desc);

    axiosConfig
      .post("/addPrmiumSrvc", this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/premium/paidServeiceList");
        // alert("Privacy Policy Added Successfully !");
        swal("Good job!", "You clicked the button!", "success");
      })
      .catch((error) => {
        console.log(error);
      });

    // this.state.editorState.getCurrentContent().getPlainText();
  };

  render() {
    return (
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              Add Paid Serveice
            </h1>
          </Col>
          <Col>
            <Route
              render={({ history }) => (
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() => history.push("/app/premium/paidServeiceList")}
                >
                  Back
                </Button>
              )}
            />
          </Col>
        </Row>
        <CardBody>
          <Form onSubmit={this.submitHandler}>
            <Col lg="6" md="6" className="mb-2">
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.changeHandler}
              />
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-2">
              <Label>Membership plan</Label>
              <CustomInput
                type="select"
                name="planId"
                value={this.state.planId?.pack_name}
                onChange={this.changeHandler}
              >
                <option>Select Plan</option>
                {this.state.pack_nameM?.map((planmemship) => (
                  <option value={planmemship?._id} key={planmemship?._id}>
                    {planmemship?.pack_name}
                  </option>
                ))}
              </CustomInput>
            </Col>
            <Editor
              toolbarClassName="demo-toolbar-absolute"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              editorState={this.state.editorState}
              onEditorStateChange={this.onEditorStateChange}
              toolbar={{
                options: ["inline", "blockType", "fontSize", "fontFamily"],
                inline: {
                  options: [
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "monospace",
                  ],
                  bold: { className: "bordered-option-classname" },
                  italic: { className: "bordered-option-classname" },
                  underline: { className: "bordered-option-classname" },
                  strikethrough: { className: "bordered-option-classname" },
                  code: { className: "bordered-option-classname" },
                },
                blockType: {
                  className: "bordered-option-classname",
                },
                fontSize: {
                  className: "bordered-option-classname",
                },
                fontFamily: {
                  className: "bordered-option-classname",
                },
              }}
            />
            <br />
            <Button color="primary"> Add Paid Serveice</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default AddPaidServeice;
