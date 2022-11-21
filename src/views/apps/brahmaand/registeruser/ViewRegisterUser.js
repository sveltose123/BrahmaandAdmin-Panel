import React from "react";
import { Card, CardBody, Row, Col, Media, Button, Breadcrumb, BreadcrumbItem, } from "reactstrap";
import { history } from "../../../../history";
import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../../axiosConfig";
class ViewRegisterUser extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

            data: {},
        };
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        axiosConfig
            .get(`/user/getoneUser/${id}`)
            .then(response => {
                // console.log(response.data);
                console.log(response.data.data);
                this.setState({ data: response.data.data });

            })
            .catch(error => {
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
                                    <BreadcrumbItem href="/app/brahmaand/registeruser/registerUserList" tag="a">
                                        Register User List
                                    </BreadcrumbItem>
                                    <BreadcrumbItem active>View Register User List</BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </Col>
                    </Row>
                    <Card className="overflow-hidden app-ecommerce-details">
                        <Row className="m-2">
                            <Col>
                                <h1 col-sm-6 className="float-left">
                                    View Register User List
                                </h1>
                            </Col>
                            <Col>
                                <Button
                                    className=" btn btn-danger float-right"
                                    onClick={() => history.push("/app/brahmaand/registeruser/registerUserList")}>
                                    Back
                                </Button>
                            </Col>
                        </Row>
                        <CardBody className="pb-0">
                            <Row className="mb-5 mt-2">
                                <Col md="12" sm="12" className="mb-2">
                                    <h4>Name:</h4>
                                    <span> {this.state.data.username}</span>
                                </Col>
                                <Col md="12" sm="12" className="mb-2">
                                    <h4>Email Id:</h4>
                                    <span> {this.state.data.email}</span>
                                </Col>
                                <Col md="12" sm="12" className="mb-2">
                                    <h4>Current Point:</h4>
                                    <span> {this.state.data.email}</span>
                                </Col>
                                <Col md="12" sm="12" className="mb-2">
                                    <h4>Total Point:</h4>
                                    <span> {this.state.data.email}</span>
                                </Col>
                                <Col md="12" sm="12" className="mb-2">
                                    <h4>Image: </h4>
                                    <h6> {this.state.data.profileImg}</h6>
                                    <Media className="mt-md-1 mt-0" left>

                                        {this.state.data?.profileImg?.map((i) => (
                                            <img
                                                className="border-black m-0"
                                                src={i}
                                                alt="user avatar"
                                                height="400"
                                            />
                                        ))}

                                    </Media>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
}
export default ViewRegisterUser;