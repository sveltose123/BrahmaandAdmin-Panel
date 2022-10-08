import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  // CustomInput,
} from "reactstrap";
import { Route } from "react-router-dom";
import Select from "react-select";
// import { history } from "../../../history";
// import axiosConfig from "../../../../axiosConfig";
// import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

export class AddFaq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addTextbox: [{}],
      title: "",
      desc: "",
    };
  }
  addControls() {
    this.setState({
      title: [...this.state.title, ""],
      desc: [...this.state.desc, ""],

      addTextbox: [...this.state.addTextbox, ""],
    });
  }
  delControl(i) {
    console.log(this.state);
    this.state.addTextbox.splice(i, 1);
    this.state.title.splice(i, 1);
    this.state.desc.splice(i, 1);

    this.setState({});
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post(
        "/addFAQ",
        this.state
        // {
        //   headers: {
        //     "auth-adtoken": localStorage.getItem("auth-adtoken"),
        //   },
        // }
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/faq/faqList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add FAQ
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/faq/faqList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6" className="mb-2">
                  <Label>Title</Label>
                  <Input
                    type="text"
                    placeholder="Enter Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Description</Label>
                  <Input
                    type="text"
                    placeholder="Enter Description"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Add FAQ
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddFaq;
