import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  //FormGroup,
  CustomInput,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import Textarea from "../../../forms/form-elements/textarea/Textarea";

class EditFnoIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      trl_type: false,
      trl: "",
      expiryDate: "",
      script_type: "",
      fnoindex_scrpt_name: "",
      active_value: "",
      call_type: "",
      qty: "",
      investment_amt: "",
      no_of_lots: "",
      trade_type: "",
      type: "Index",
      FT1: "",
      FT1_type: false,
      FT2: "",
      FT2_type: false,
      FT3: "",
      FT3_type: false,
      FT5_type: false,
      FT6_type: false,
      FT7_type: false,
      sl_type: false,
      t5: "",
      FT6: "",
      FT7: "",
      status: "",
      cstmMsg: "",
    };
    this.state = {
      scriptN: [],
      expdateI: [],
    };
  }
  async componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewonetrades/${id}`, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
      .then((response) => {
        console.log("sl_type response", response.data.data.sl_type);
        this.setState({
          expiryDate: response.data.data.expiryDate,
          script_type: response.data.data.script_type,
          fnoindex_scrpt_name: response.data.data.fnoindex_scrpt_name,
          call_type: response.data.data.call_type,
          active_value: response.data.data.active_value,
          T1: response.data.data.T1,
          T2: response.data.data.T2,
          T3: response.data.data.T3,
          t4: response.data.data.t5,
          // t: response.data.data.t5,
          t5: response.data.data.t5,
          trl: response.data.data.trl,
          trl_type: response.data.data.trl_type,
          FT1_type: response.data.data.FT1_type,
          FT2_type: response.data.data.FT2_type,
          FT3_type: response.data.data.FT3_type,
          FT5_type: response.data.data.FT5_type,
          FT6_type: response.data.data.FT6_type,
          FT7_type: response.data.data.FT7_type,
          FT6: response.data.data.FT6,
          FT7: response.data.data.FT7,
          qty: response.data.data.qty,
          sl_type: response.data.data.sl_type,
          no_of_lots: response.data.data.no_of_lots,
          trade_type: response.data.data.trade_type,
          type: response.data.data.type,
          cstmMsg: response.data.data.cstmMsg,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //Script//
    axiosConfig
      .get("/getFnoScript")
      .then((response) => {
        console.log(response);
        this.setState({
          scriptN: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // expDate//
    axiosConfig
      .get("/datelist")
      .then((response) => {
        console.log(response);
        this.setState({
          expdateI: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler2 = (e) => {
    if (e.target.checked) {
      this.setState({ FT1_type: "true" });
    } else {
      this.setState({ FT1_type: "false" });
    }
  };
  changeHandler3 = (e) => {
    if (e.target.checked) {
      this.setState({ FT2_type: "true" });
    } else {
      this.setState({ FT2_type: "false" });
    }
  };
  changeHandler4 = (e) => {
    if (e.target.checked) {
      this.setState({ FT3_type: "true" });
    } else {
      this.setState({ FT3_type: "false" });
    }
  };
  changeHandler5 = (e) => {
    if (e.target.checked) {
      this.setState({ FT5_type: "true" });
    } else {
      this.setState({ FT5_type: "false" });
    }
  };
  // changeHandlerT6 = (e) => {
  //   if (e.target.checked) {
  //     this.setState({ FT6_type: "true" });
  //   } else {
  //     this.setState({ FT6_type: "false" });
  //   }
  // };
  // changeHandlerT7 = (e) => {
  //   if (e.target.checked) {
  //     this.setState({ FT7_type: "true" });
  //   } else {
  //     this.setState({ FT7_type: "false" });
  //   }
  // };
  changeHandler6 = (e) => {
    if (e.target.checked) {
      this.setState({ sl_type: "true" });
    } else {
      this.setState({ sl_type: "false" });
    }
  };
  changeHandler7 = (e) => {
    if (e.target.checked) {
      this.setState({ trl_type: "true" });
    } else {
      this.setState({ trl_type: "false" });
    }
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;

    axiosConfig
      .post(`/editFnoindex/${id}`, this.state)
      // , {
      //   // headers: {
      //   //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
      //   // },
      // }
      // )
      .then((response) => {
        console.log("sdjgsjdgjhgsdjh", response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/trade/fnoIndexList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // const { FT1_type,FT2_type,FT3_type,FT5_type } = this.state;
    // console.log("this.state.sl_type", this.state.sl_type);
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Trade"
          breadCrumbParent="Home"
          breadCrumbActive=" Edit FNO Index"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit FNO Index
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/trade/fnoIndexList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Script Name</Label>
                  <CustomInput
                    type="select"
                    name="fnoindex_scrpt_name"
                    value={this.state.fnoindex_scrpt_name}
                    onChange={this.changeHandler}
                  >
                    <option>select script</option>
                    {this.state.scriptN?.map((allScript) => (
                      <option value={allScript?._id} key={allScript?._id}>
                        {allScript?.scriptName}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Expiry Date</Label>
                  <CustomInput
                    type="select"
                    name="expiryDate"
                    value={this.state.expiryDate}
                    onChange={this.changeHandler}
                  >
                    <option>Expiry Date</option>
                    {this.state.expdateI?.map((allExpDate) => (
                      <option value={allExpDate?._id} key={allExpDate?._id}>
                        {allExpDate?.expDate}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Equity Script</Label>
                  <Input
                    id="exampleSelect"
                    name="script_type"
                    type="select"
                    value={this.state.script_type}
                    onChange={this.changeHandler}
                  >
                    <option>Select Script</option>
                    <option>BUY</option>
                    <option>SELL</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Trade Type</Label>
                  <Input
                    id="exampleSelect"
                    name="trade_type"
                    type="select"
                    value={this.state.trade_type}
                    onChange={this.changeHandler}
                  >
                    <option>Select Trade</option>
                    <option value="BankNifty">BANK NIFTY</option>
                    <option value="Nifty">NIFTY</option>
                  </Input>
                </Col>

                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Call Type</Label>
                  <Input
                    id="exampleSelect"
                    name="call_type"
                    type="select"
                    value={this.state.call_type}
                    onChange={this.changeHandler}
                  >
                    <option>Select Call Type</option>
                    <option>Intraday</option>
                    <option>BTST</option>
                    <option>Short Term</option>
                    <option>Intraday or BTST</option>
                    <option>Intraday (Risky)</option>
                    <option>Intraday (Trailed)</option>
                    <option>Intraday (Re-entry)</option>
                    <option>Intraday (Re-entry- Trailed)</option>
                    <option>Intraday (Hero-Zero)</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Active Value</Label>
                  <Input
                    type="number"
                    placeholder="Enter Active Value"
                    name="active_value"
                    value={this.state.active_value}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Achieved Target+</Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 5"
                    name="t5"
                    value={this.state.t5}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    name="qty"
                    placeholder="Enter Quantity"
                    value={this.state.qty}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Number Of Lots</Label>
                  <Input
                    type="number"
                    name="no_of_lots"
                    placeholder="Enter Lots Price"
                    value={this.state.no_of_lots}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>TRAIL</Label>
                  <Input
                    type="number"
                    placeholder="Enter TRAIL"
                    name="trl"
                    value={this.state.trl}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                <Label className="mb-1">SL</Label>
                <div className="form-label-group">
                  <input
                    style={{ marginRight: "3px" }}
                    type="checkbox"
                    name="sl_type"
                    onChange={(e) => this.changeHandler6(e)}
                    checked={
                      this.state.sl_type === "false" ||
                        this.state.sl_type === false
                        ? false
                        : true
                    }
                  />
                  <span style={{ marginRight: "20px" }}>
                    {this.state.sl_type}
                  </span>
                </div>
              </Col>

              <Row className="mb-2">
                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">TRAIL</Label>
                  <div className="form-label-group">
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="trl_type"
                      onChange={(e) => this.changeHandler7(e)}
                      checked={
                        this.state.trl_type === "false" ||
                          this.state.trl_type === false
                          ? false
                          : true
                      }
                    />
                    <span style={{ marginRight: "20px" }}>
                      {this.state.trl_type}
                    </span>
                  </div>
                </Col>

                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">T1</Label>
                  <div className="form-label-group">
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="FT1_type"
                      readOnly
                      onChange={(e) => this.changeHandler2(e)}
                      checked={
                        this.state.FT1_type === "false" ||
                          this.state.FT1_type === false
                          ? false
                          : true
                      }
                    />
                    <span style={{ marginRight: "20px" }}>
                      {this.state.FT1_type}
                    </span>
                  </div>
                </Col>

                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">T2</Label>
                  <div className="form-label-group">
                    <input
                      readOnly
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="FT2_type"
                      onChange={(e) => this.changeHandler3(e)}
                      checked={
                        this.state.FT2_type === "false" ||
                          this.state.FT2_type === false
                          ? false
                          : true
                      }
                    />
                    <span style={{ marginRight: "20px" }}>
                      {this.state.FT2_type}
                    </span>
                  </div>
                </Col>

                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">T3</Label>
                  <div className="form-label-group">
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="FT3_type"
                      onChange={(e) => this.changeHandler4(e)}
                      checked={
                        this.state.FT3_type === "false" ||
                          this.state.FT3_type === false
                          ? false
                          : true
                      }
                    />
                    <span style={{ marginRight: "20px" }}>
                      {this.state.FT3_type}
                    </span>
                  </div>
                </Col>
                {/* <Col lg="4" md="4" className="mb-2">
                  <Label>T4</Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 5"
                    name="t4"
                    value={this.state.t4}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                <Col lg="4" md="4" className="mb-2">
                  <Label>T6</Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 6"
                    name="FT6"
                    value={this.state.FT6}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" className="mb-2">
                  <Label>T7</Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 7"
                    name="FT7"
                    value={this.state.FT7}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1"> Call Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Closed"
                    />
                    <span style={{ marginRight: "3px" }}>Closed</span>
                  </div>
                </Col>
              </Row>
              <Col lg="6" md="6" className="mb-2">
                <Label>Trade Alert</Label>
                <Input
                  type="text"
                  placeholder="Keep booking or trailing stop loss"
                  name="cstmMsg"
                  value={this.state.cstmMsg}
                  onChange={this.changeHandler}
                />
              </Col>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update FNO Index
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
export default EditFnoIndex;
