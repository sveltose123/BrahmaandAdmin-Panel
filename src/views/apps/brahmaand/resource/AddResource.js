import React, { Component } from "react";
import {
    Card,
    CardBody,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
// import { history } from "../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';
import Accordion from 'react-bootstrap/Accordion';

export default class AddResource extends Component {
    constructor (props) {
        super(props);
        this.state = {
            script_type: "",
            script_name: "",
        };
    }
    changeHandler1 = (e) => {
        this.setState({ status: e.target.value });
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    submitHandler = (e) => {
        e.preventDefault();

        axiosConfig
            .post("/addScript", this.state, {
                // headers: {
                //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
                // },
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
                                <BreadcrumbItem active>Add Resource</BreadcrumbItem>

                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Add Resource
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
                                {/* <Col lg="6" md="6" className="mb-2">
                                    <Label for="exampleSelect">Entry Script</Label>
                                    <Input
                                        id="exampleSelect"
                                        name="script_type"
                                        type="select"
                                        value={this.state.script_type}
                                        onChange={this.changeHandler}
                                    >
                                        <option>Select Script</option>
                                    
                                        <option>FNO INDEX</option>
                                        <option>FNO EQUITY</option>
                                        <option>CASH EQUITY</option>
                                     
                                    </Input>
                                </Col> */}
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
                                <Col lg="" md="6" className="mb-2">
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
                            </Row>

                            <Row>
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

                                <Col lg="6" md="6" sm="6" className="mb-2 ">
                                    {/* <Accordion>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What harsh truths do you prefer to ignore?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel region={false}>
                                                <Card>
                                                    <Form>
                                                        <Input type="text" placeholder="this is a text" />
                                                        <Input type="text" placeholder="this is a text" />
                                                        <Input type="text" placeholder="this is a text" />
                                                        <Input type="text" placeholder="this is a text" />
                                                        <Input type="text" placeholder="this is a text" />
                                                    </Form>
                                                </Card>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                    </Accordion> */}
                                    <Accordion defaultActiveKey="0">

                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                {/* <Row> */}
                                                {/* <Col lg="12"> */}
                                                <Label className="d-flex my-2" style={{ marginTop: '10px', padding: "-2px -1px" }}>Optional</Label>
                                                {/* </Col> */}
                                                {/* </Row> */}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Form> <Label>Title</Label>
                                                    <Input type="text" name="Title" placeholder="Enter Title" />
                                                    <Label>Creator Name</Label>
                                                    <Input type="text" />
                                                    <Label>Release Year</Label>
                                                    <Input type="text" />
                                                    <Label>Descripition</Label>
                                                    <Input type="text" />
                                                    <Label>Comments</Label>
                                                    <Input type="text" />
                                                </Form>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
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