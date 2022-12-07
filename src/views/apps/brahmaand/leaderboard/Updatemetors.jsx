import Axios from "axios";
import React, { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Table,
} from "reactstrap";

function Updatemetors() {
  const [planetmetors, setPlanetmetors] = useState([]);

  useEffect(() => {
    getallplanetdata();
  }, []);

  const getallplanetdata = () => {
    axios
      .get(`http://3.7.173.138:9000/user/user_planet_position`)
      .then((res) => {
        setPlanetmetors(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  const handleupdatemetors = () => {
    console.log("clicked it");
  };
  return (
    <>
      <h3 className="d-flex justify-content-center">
        Update Points Counter Metors
      </h3>
      <hr />

      <Table striped bordered hover>
        <thead aria-colspan={1}>
          <tr>
            <th>No.</th>
            <th>Parameters</th>
            <th>Current Point</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Submit a content</td>
            <td>10 Points</td>
            <td>
              <input type="text" />
              <button type="button">Update</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Rating</td>
            <td>2 Points</td>
            <td>
              {" "}
              <input type="text" />
              <button type="button">Update</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Review</td>
            <td>5 Points</td>
            <td>
              {" "}
              <input type="text" />
              <button type="button">Update</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Reaching a level</td>
            <td>50 Points</td>
            <td>
              {" "}
              <input type="text" />
              <button type="button">Update</button>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr />

      <h3 className="d-flex justify-content-center mt-2">
        Update Planet Positions Metors
      </h3>
      <hr />
      <Table striped bordered hover>
        <thead aria-colspan={1}>
          <tr>
            <th>No.</th>
            <th>Planet Name</th>
            <th>Meteors Range</th>
            <th>Dollar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {planetmetors !== ""
            ? planetmetors?.map((data, index) => (
                <tr key={data._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img style={{ width: "70px" }} src={data?.img} />
                  </td>
                  <td>{data?.planet_name}</td>
                  <td>{data?.point_range}</td>
                  <td>{data?.doller_rupees}</td>
                  <td>
                    <Link
                      to={`/app/brahmaand/leaderboard/editplanet/${data._id}`}
                    >
                      <AiFillEdit
                        className="aifillediticon"
                        size={30}
                        style={{ color: "green", border: "none" }}
                      />
                    </Link>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </>
  );
}

export default Updatemetors;
