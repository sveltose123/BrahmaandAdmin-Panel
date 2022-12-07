import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import SalesCard from "./SalesCard";
import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/pages/dashboard-analytics.scss";

class AnalyticsDashboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      basicplanearning: {},
      freeusers: {},
      subcategory: {},
      category: {},
      user: {},
      freeresrc: {},
      subresrc: {},
      paidresrc: {}

    };
  }
  componentDidMount() {
    axiosConfig
      .get("/admin/total_user")
      .then((response) => {
        console.log(response.data);
        this.setState({ user: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/admin/total_sub_resrc")
      .then((response) => {
        console.log(response.data);
        this.setState({ subresrc: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/admin/total_category")
      .then((response) => {
        console.log(response.data);
        this.setState({ category: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/admin/total_subcategory")
      .then((response) => {
        console.log(response.data);
        this.setState({ subcategory: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/admin/total_free_resrc")
      .then((response) => {
        console.log(response.data);
        this.setState({ freeresrc: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/admin/total_paid_resrc")
      .then((response) => {
        console.log(response.data);
        this.setState({ paidresrc: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Col lg="12" md="12">
        </Col>
        <Row className="match-height">
          <Col lg="4" md="12" >
            <Card
              className="gt"
              body
              inverse
              style={{ borderColor: "white", background: '#D3D3D3', padding: '2.4rem' }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black", textAlign: 'center' }}>
                Total no of user
              </CardTitle>

              <CardText tag="h3" style={{ color: "black", textAlign: 'center' }}>
                {this.state.user.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="gt-1"
              body
              inverse
              style={{ borderColor: "white", background: '#00FFFF', padding: '2.4rem' }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black", textAlign: 'center' }}>
                Total no of resources
              </CardTitle>

              <CardText tag="h3" style={{ color: "black", textAlign: 'center' }}>
                {this.state.subresrc.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="gt-2"
              body
              inverse
              style={{ borderColor: "white", background: '#999900', padding: '2.4rem' }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black", textAlign: 'center' }}>
                Total no of category
              </CardTitle>

              <CardText tag="h3" style={{ color: "black", textAlign: 'center' }}>
                {this.state.category.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="gt-3"
              body
              inverse
              style={{ borderColor: "white", background: '#3399FF', padding: '2.4rem' }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black", textAlign: 'center' }}>
                Total no of subcategory
              </CardTitle>
              <CardText tag="h3" style={{ color: "black", textAlign: 'center' }}>
                {this.state.subcategory.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="gt-4"
              body
              inverse
              style={{ borderColor: "white", background: '#FFFF33', padding: '2.4rem' }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black", textAlign: 'center' }}>
                Total no of current points
              </CardTitle>
              <CardText tag="h3" style={{ color: "black", textAlign: 'center' }}>
                {this.state.freeusers.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="gt-4"
              body
              inverse
              style={{ borderColor: "white", background: '#FF0033', padding: '2.4rem' }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black", textAlign: 'center' }}>
                Total no of all time points
              </CardTitle>
              <CardText tag="h3" style={{ color: "black", textAlign: 'center' }}>
                {this.state.freeusers.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="gt-5"
              body
              inverse
              style={{ borderColor: "white", background: '#F08080', padding: '2.4rem' }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black", textAlign: 'center' }}>
                Total no of paid resource
              </CardTitle>

              <CardText tag="h3" style={{ color: "black", textAlign: 'center' }}>
                {this.state.paidresrc.data}
              </CardText>
            </Card>
          </Col>

          <Col lg="4" md="12">
            <Card
              className="gt-6"
              body
              inverse
              style={{ borderColor: "white", background: '#FF8C00', padding: '2.4rem' }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black", textAlign: 'center' }}>
                Total no of free resource
              </CardTitle>

              <CardText tag="h3" style={{ color: "black", textAlign: 'center' }}>
                {this.state.freeresrc.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="gt-7"
              body
              inverse
              style={{ borderColor: "white", background: '#B266FF', padding: '2.4rem' }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black", textAlign: 'center' }}>
                Total no of Promotion
              </CardTitle>

              <CardText tag="h3" style={{ color: "black", textAlign: 'center' }}>
                {this.state.basicplanearning.Earning}
              </CardText>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AnalyticsDashboard;
