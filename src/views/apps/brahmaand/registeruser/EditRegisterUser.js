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
export default class EditRegisterUser extends Component {
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
                this.props.history.push("/app/brahmaand/registeruser/registerUserList");
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
                                <BreadcrumbItem href="/app/brahmaand/registeruser/registerUserList" tag="a">
                                    Register User List
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Edit  Register User</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Edit Register User
                            </h1>
                        </Col>
                        <Col>
                            <Route
                                render={({ history }) => (
                                    <Button
                                        className=" btn btn-danger float-right"
                                        onClick={() => history.push("/app/brahmaand/registeruser/registerUserList")}
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
                                    <Label> Name</Label>
                                    <Input
                                        required
                                        type="text"
                                        name="script_name"
                                        placeholder="Enter name"
                                        value={this.state.script_name}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Email Id</Label>
                                    <Input
                                        required
                                        type="text"
                                        name="script_name"
                                        placeholder=" Enter Email id"
                                        value={this.state.script_name}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Password</Label>
                                    <Input
                                        required
                                        type="text"
                                        name="script_name"
                                        placeholder="Enter Password"
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
            </div>
        );
    }
}
