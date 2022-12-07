import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
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
function Uservalue() {
  return (
    <div>
      <h3 className="d-flex justify-content-center mt-2">
        Update User Dollar value
      </h3>
      <hr />
      <Table striped bordered hover>
        <thead aria-colspan={1}>
          <tr>
            <th>No.</th>
            <th>User Name</th>
            <th>Meteors Points earned</th>
            <th>Dollar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sun</td>
            <td> 500</td>
            <td>$10</td>
            <td>
              <Link to={`/app/brahmaand/leaderboard/edituserdata/:id`}>
                <button
                  className="aifillediticon btn btn-success"
                  size={30}
                  //   style={{ color: "green", border: "none" }}
                >
                  Payout
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mercury</td>
            <td>500 - 1000</td>
            <td>$15</td>
            <td>
              <AiFillEdit
                onClick={() => {
                  console.log("clicked");
                }}
                className="aifillediticon"
                size={30}
                style={{ color: "green", border: "none" }}
              />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Venus</td>
            <td>1000- 2000</td>
            <td>$18</td>
            <td>
              <AiFillEdit
                className="aifillediticon"
                size={30}
                style={{ color: "green", border: "none" }}
              />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mars</td>
            <td>2000 - 5000</td>
            <td>$20</td>
            <td>
              <AiFillEdit
                className="aifillediticon"
                size={30}
                style={{ color: "green", border: "none" }}
              />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Jupiter</td>
            <td>5000 - 7500</td>
            <td>$25</td>
            <td>
              <AiFillEdit
                className="aifillediticon"
                size={30}
                style={{ color: "green", border: "none" }}
              />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Saturn</td>
            <td>7500 - 10000</td>
            <td>$40</td>
            <td>
              <AiFillEdit
                className="aifillediticon"
                size={30}
                style={{ color: "green", border: "none" }}
              />
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Uranus</td>
            <td>10000- 20000</td>
            <td>$50</td>
            <td>
              <AiFillEdit
                className="aifillediticon"
                size={30}
                style={{ color: "green", border: "none" }}
              />
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Neptune</td>
            <td>20000-50000</td>
            <td>$100</td>
            <td>
              <AiFillEdit
                className="aifillediticon"
                size={30}
                style={{ color: "green", border: "none" }}
              />
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Earth</td>
            <td>50000+</td>
            <td>$1000</td>
            <td>
              <AiFillEdit
                className="aifillediticon"
                size={30}
                style={{ color: "green", border: "none" }}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Uservalue;
