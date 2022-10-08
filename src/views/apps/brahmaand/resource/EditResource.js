import React, { Component } from "react";
import {
    Card,
    CardBody,
    Row,
    Col,
    Form,
    Label,
    Input,
    Button,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
// import { history } from "../../../history";
import { Route } from "react-router-dom";
import swal from "sweetalert";
export default class EditResource extends Component {
    constructor (props) {
        super(props);
        this.state = {
            script_type: "",
            script_name: "",
        };
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        axiosConfig
            .get(`/getone_script/${id}`, {
                headers: {
                    "auth-adtoken": localStorage.getItem("auth-adtoken"),
                },
            })
            .then((response) => {
                console.log(response);
                this.setState({
                    script_type: response.data.data.script_type,
                    script_name: response.data.data.script_name,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    changeHandler1 = (e) => {
        this.setState({ status: e.target.value });
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    submitHandler = (e) => {
        e.preventDefault();
        let { id } = this.props.match.params;
        axiosConfig
            .post(`/editScript/${id}`, this.state, {
                headers: {
                    "auth-adtoken": localStorage.getItem("auth-adtoken"),
                },
            })
            .then((response) => {
                console.log(response);
                swal("Success!", "Submitted SuccessFull!", "success");
                this.props.history.push("/app/brahmaand/resource/resourceList");
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
                                <BreadcrumbItem href="/app/brahmaand/resource/resourceList" tag="a">
                                    Resource List
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Edit  Resource</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Edit Resource
                            </h1>
                        </Col>
                        <Col>
                            <Route
                                render={({ history }) => (
                                    <Button
                                        className=" btn btn-danger float-right"
                                        onClick={() => history.push("/app/brahmaand/resource/resourceList")}
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
                                    <Label>Link</Label>
                                    <Input
                                        required
                                        type="text"
                                        name="script_name"
                                        placeholder="Enter name"
                                        value={this.state.script_name}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <Label for="exampleSelect">Type</Label>
                                    <Input
                                        id="exampleSelect"
                                        name="script_type"
                                        type="select"
                                        value={this.state.script_type}
                                        onChange={this.changeHandler}
                                    >
                                        <optgroup>Free</optgroup>

                                        <option>No Register Required</option>
                                        <option>Register Required</option>
                                        <option>Paid</option>

                                    </Input>
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <Label for="exampleSelect">Format</Label>
                                    <Input
                                        id="exampleSelect"
                                        name="script_type"
                                        type="select"
                                        value={this.state.script_type}
                                        onChange={this.changeHandler}
                                    >
                                        <option>Video</option>
                                        <option>Text</option>
                                        <option>Video and Text</option>

                                    </Input>
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <Label for="exampleSelect">Level</Label>
                                    <Input
                                        id="exampleSelect"
                                        name="script_type"
                                        type="select"
                                        value={this.state.script_type}
                                        onChange={this.changeHandler}
                                    >
                                        <option>Beginner</option>
                                        <option>Advanced</option>

                                    </Input>
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <Label for="exampleSelect">Language</Label>
                                    <Input
                                        id="exampleSelect"
                                        name="script_type"
                                        type="select"
                                        value={this.state.script_type}
                                        onChange={this.changeHandler}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>

                                    </Input>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Topic</Label>
                                    <Input
                                        required
                                        type="text"
                                        name="script_name"
                                        placeholder=""
                                        value={this.state.script_name}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Descripition</Label>
                                    <Input
                                        required
                                        type="text"
                                        name="script_name"
                                        placeholder=""
                                        value={this.state.script_name}
                                        onChange={this.changeHandler}
                                    ></Input>
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
            </div >
        );
    }
}