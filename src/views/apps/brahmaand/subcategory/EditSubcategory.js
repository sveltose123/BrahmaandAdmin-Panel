import React, { Component } from "react";
import { Card, CardBody, Row, Col, Form, Label, Input, Button, Breadcrumb, BreadcrumbItem, CustomInput } from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
// import { history } from "../../../history";
import { Route } from "react-router-dom";
import swal from "sweetalert";
export default class EditSubcategory extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: "",
            desc: "",
            Subcat_img: "",
            category: "",
            selectedFile: null,
            selectedName: "",

        };
        this.state = {
            categoryT: [],
        };

    }
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
    changeHandler1 = (e) => {
        this.setState({ status: e.target.value });
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidMount() {
        let { id } = this.props.match.params;
        axiosConfig
            .get(`/admin/getoneSubCategory/${id}`, {

            })
            .then((response) => {
                console.log(response);
                this.setState({
                    title: response.data.data.title,
                    desc: response.data.data.desc,
                });
            })
            .catch((error) => {
                console.log(error);
            });
        axiosConfig
            .get("/admin/getallCategory")
            .then((response) => {
                console.log(response);
                this.setState({
                    categoryT: response.data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    submitHandler = (e) => {
        e.preventDefault();
        let { id } = this.props.match.params;
        const data = new FormData();
        data.append("title", this.state.title);
        data.append("desc", this.state.desc);
        data.append("category", this.state.category);
        for (const file of this.state.selectedFile) {
            if (this.state.selectedFile !== null) {
                data.append("Subcat_img", file, file.name);
            }
        }
        for (var value of data.values()) {
            console.log(value);
        }
        for (var key of data.keys()) {
            console.log(key);
        }

        axiosConfig
            .post(`/admin/editSubCategory/${id}`, this.state, {

            })
            .then((response) => {
                console.log(response);
                swal("Success!", "Submitted SuccessFull!", "success");
                this.props.history.push("/app/brahmaand/subcategory/subcategoryList");
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
                                <BreadcrumbItem href="/app/brahmaand/subcategory/subcategoryList" tag="a">
                                    SubCategory List
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Edit SubCategory</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Edit SubCategory
                            </h1>
                        </Col>
                        <Col>
                            <Route
                                render={({ history }) => (
                                    <Button
                                        className=" btn btn-danger float-right"
                                        onClick={() => history.push("/app/brahmaand/subcategory/subcategoryList")}
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
                                <Col lg="6" md="6" className="mb-2">
                                    <Label for="exampleSelect">Category Selection</Label>
                                    <CustomInput
                                        type="select"
                                        name="category"
                                        value={this.state.category}
                                        onChange={this.changeHandler}
                                    >
                                        <option>select Category</option>
                                        {this.state.categoryT?.map((allCategory) => (
                                            <option value={allCategory?._id} key={allCategory?._id}>
                                                {allCategory?.title}
                                            </option>
                                        ))}
                                    </CustomInput>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>subcategory Name</Label>
                                    <Input

                                        type="text"
                                        name="title"
                                        placeholder=""
                                        value={this.state.title}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Note</Label>
                                    <Input

                                        type="text"
                                        name="desc"
                                        placeholder=""
                                        value={this.state.desc}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <Label>Upload Image</Label>
                                    <CustomInput
                                        type="file"
                                        //   multiple
                                        onChange={this.onChangeHandler} />
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
