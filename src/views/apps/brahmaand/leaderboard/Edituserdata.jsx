import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Route } from "react-router-dom";

function Edituserdata() {
  return (
    <div>
      <h2 className="d-flex justify-content-center">Update dollar Payout</h2>
      <Row className=" mx-1 mt-2 mb-2 ">
        <Col></Col>
        <Col lg="2">
          <Route
            render={({ history }) => (
              <button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/brahmaand/leaderboard/userearning/")
                }
              >
                Back
              </button>
            )}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        {/* <Col lg="4">
          <h5>Meteors </h5>
          <input className="form-control" type="text" />
        </Col> */}
        <Col lg="4">
          <h5>Dollar value</h5>
          <input className="form-control" type="text" />
        </Col>
        <Col style={{ marginTop: "26px" }}>
          <button type="button" class="btn btn-success">
            Update
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default Edituserdata;
