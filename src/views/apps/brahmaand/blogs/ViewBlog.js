import React from "react";
import {
    Card,
    CardBody,
    Row,
    Col,
    Button,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";
import { history } from "../../../../history";
import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import "../../../../assets/scss/pages/users.scss";
import axiosConfig from "../../../../axiosConfig";
import axios from "axios";
import { Route } from "react-router-dom";
class ViewBlog extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: {},
        };
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        axiosConfig
            .get(`/getoneuser/${id}`)

            .then((response) => {
                // console.log(response.data);
                console.log(response.data.data);
                this.setState({ data: response.data.data });
            })
            .catch((error) => {
                console.log(error.response);
            });
    }

    render() {
        return (
            <React.Fragment>
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
                                    <BreadcrumbItem active> View ResourceList</BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </Col>
                    </Row>
                    <Card className="overflow-hidden app-ecommerce-details">
                        <Row className="m-2">
                            <Col>
                                <h1 col-sm-6 className="float-left">
                                    View ResourceList
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
                        <CardBody className="pb-0">
                            <Row className="ml-4">
                                <Col sm="9" md="12" lg="12">
                                    <div className="users-page-view-table">
                                        <div className="d-flex user-info">
                                            <div className="user-info-title font-weight-bold">
                                                Creator Name :
                                            </div>
                                            <div className="text-truncate">
                                                <span>
                                                    {this.state.data.creatorName}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex user-info">
                                            <div className="user-info-title font-weight-bold">
                                                Link :
                                            </div>
                                            <div className="text-truncate">
                                                <span>{this.state.data.link}</span>
                                            </div>
                                        </div>
                                        <div className="d-flex user-info">
                                            <div className="user-info-title font-weight-bold">
                                                Category :
                                            </div>
                                            <div className="text-truncate">
                                                <span>{this.state.data.category?.title}</span>
                                            </div>
                                        </div>
                                        <div className="d-flex user-info">
                                            <div className="user-info-title font-weight-bold">
                                                SubCategory :
                                            </div>
                                            <div className="text-truncate">
                                                <span>{this.state.data.sub_category?.title}</span>
                                            </div>
                                        </div>
                                        <div className="d-flex user-info">
                                            <div className="user-info-title font-weight-bold">
                                                Type :
                                            </div>
                                            <div className="text-truncate">
                                                <span>{this.state.data.type}</span>
                                            </div>
                                        </div>
                                        <div className="d-flex user-info">
                                            <div className="user-info-title font-weight-bold">
                                                Format :
                                            </div>
                                            <div className="text-truncate">
                                                <span>{this.state.data.format}</span>
                                            </div>
                                        </div>
                                        <div className="d-flex user-info">
                                            <div className="user-info-title font-weight-bold">
                                                Language :
                                            </div>
                                            <div className="text-truncate">
                                                <span>{this.state.data.language}</span>
                                            </div>
                                        </div>
                                        <div className="d-flex user-info">
                                            <div className="user-info-title font-weight-bold">
                                                Image :
                                            </div>
                                            <div className="text-truncate">
                                                <span>{this.state.data.img}</span>
                                            </div>
                                        </div>
                                        <div className="d-flex user-info">
                                            <div className="user-info-title font-weight-bold">
                                                Topic :
                                            </div>
                                            <div className="text-truncate">
                                                <span>{this.state.data.topics}</span>
                                            </div>
                                        </div>

                                        <div className="d-flex user-info">
                                            <div className="user-info-title font-weight-bold">
                                                Status :
                                            </div>
                                            <div className="text-truncate">
                                                <span>{this.state.data.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
}

export default ViewBlog;
