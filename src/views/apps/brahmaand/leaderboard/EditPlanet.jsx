import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Route } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
function EditPlanet() {
  const [editplanetdata, setEditplanetdata] = useState({});
  const Params = useParams();
  const [dollar, setDollar] = useState("");
  const [meteors, setMeteors] = useState("");

  const handleplanetchange = () => {
    if (
      dollar !== "" &&
      dollar !== null &&
      meteors !== "" &&
      meteors !== null
    ) {
      axios
        .post(
          `http://3.7.173.138:9000/admin/edit_planet_position/${Params.id}`,
          {
            point_range: meteors,
            doller_rupees: dollar,
          }
        )
        .then((res) => {
          console.log(res.data.message);
          if (res.data.message == "success") {
            swal("Updated Succesfully");
            setDollar("");
            setMeteors("");
          }
        })
        .catch((err) => {
          console.log(err.data.data);
        });
    } else {
      swal("Enter value in both fields");
    }
  };
  return (
    <>
      <h2 className="d-flex justify-content-center">
        Update Planet Positions Metors
      </h2>
      <Row className=" mx-1 mt-2 mb-2 ">
        <Col></Col>
        <Col lg="2">
          <Route
            render={({ history }) => (
              <button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/brahmaand/leaderboard/updatemetors")
                }
              >
                Back
              </button>
            )}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg="4">
          <h5>Meteors Range value</h5>
          <input
            value={meteors}
            onChange={(e) => {
              setMeteors(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </Col>
        <Col lg="4">
          <h5>Dollar value </h5>
          <input
            value={dollar}
            onChange={(e) => {
              setDollar(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </Col>
        <Col style={{ marginTop: "26px" }}>
          <button
            onClick={handleplanetchange}
            type="button"
            class="btn btn-success"
          >
            Update
          </button>
        </Col>
      </Row>
    </>
  );
}

export default EditPlanet;
