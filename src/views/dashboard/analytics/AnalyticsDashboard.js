import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import SalesCard from "./SalesCard";

import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/pages/dashboard-analytics.scss";


class AnalyticsDashboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      total7sayplan: {},
      activetrade: {},
      Completetrade: {},
      Activeuser: {},
      endtoend: {},
      day7planearnig: {},
      basicplanearning: {},
      freeusers: {},
    };
  }

  componentDidMount() {
    // //end dealer //
    axiosConfig
      .get("/totlactivetrade")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ activetrade: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/ttlCompletetrade")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ Completetrade: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/ttlfreeusers")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ freeusers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/ttlActiveuser")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ Activeuser: response.data });
      })
      .catch((error) => {
        console.log(error);
      });


  }

  render() {
    return (
      <React.Fragment>
        <Col lg="12" md="12">
          <SalesCard />
        </Col>
        {/* <h3>Menbership Plans</h3> */}
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
                {this.state.activetrade.data}
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
                {this.state.activetrade.data}
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
                {this.state.Completetrade.data}
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
                {this.state.Activeuser.data}
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
                {this.state.basicplanearning.Earning}
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
                {this.state.basicplanearning.Earning}
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
                Total no of sponser
              </CardTitle>

              <CardText tag="h3" style={{ color: "black", textAlign: 'center' }}>
                {this.state.basicplanearning.Earning}
              </CardText>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* <Col sm="12">
            <DispatchedOrders />
          </Col> */}
          <Col sm="12">{/* <Notification />  */}</Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AnalyticsDashboard;
