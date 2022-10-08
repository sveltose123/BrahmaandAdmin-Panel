import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
//import classnames from "classnames";
import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";

class CompletedTradeList extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },

    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },

      {
        headerName: "Type Of Script",
        field: "script_type",
        width: 140,
        // pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex  align-items-center cursor-pointer">
              <span>{params.data.script_type}</span>
            </div>
          );
        },
      },

      {
        headerName: "Script Name",
        field: "scriptName",
        width: 140,
        // pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex  align-items-center cursor-pointer">
              <span>{params.data.fnoindex_scrpt_name?.scriptName}</span>
              <span>{params.data.fnoequty_scrpt_name?.scriptName}</span>
              <span>{params.data.cash_scrpt_name?.scriptName}</span>
            </div>
          );
        },
      },

      // {
      //   headerName: "Expiry Date",
      //   field: "expDate",
      //   width: 140,
      //   // pinned: window.innerWidth > 992 ? "left" : false,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex  align-items-center cursor-pointer">
      //         <span>{params.data.expiryDate?.expDate}</span>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Trade Type",
        field: "type",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.type}</span>
            </div>
          );
        },
      },
      {
        headerName: "Call Type",
        field: "call_type",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.call_type}</span>
            </div>
          );
        },
      },
      {
        headerName: "Active Value",
        field: "active_value",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.active_value}</span>
            </div>
          );
        },
      },
      {
        headerName: "Active Value 2",
        field: "active_value2",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.active_value2}</span>
            </div>
          );
        },
      },
      {
        headerName: " SL",
        field: "SL",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.SL}</span>
            </div>
          );
        },
      },
      {
        headerName: "Trial",
        field: "trl",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.trl}</span>
            </div>
          );
        },
      },
      {
        headerName: "T₹ 1",
        field: "T1",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.T1}</span>
            </div>
          );
        },
      },
      {
        headerName: "T₹ 2",
        field: "T2",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.T2}</span>
            </div>
          );
        },
      },
      {
        headerName: "T₹ 3",
        field: "T3",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.T3}</span>
            </div>
          );
        },
      },
      {
        headerName: "T₹ 4",
        field: "T4",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.T4}</span>
            </div>
          );
        },
      },
      {
        headerName: "T5",
        field: "t5",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.t5}</span>
            </div>
          );
        },
      },

      {
        headerName: "Quantity",
        field: "qty",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.qty}</span>
            </div>
          );
        },
      },
      {
        headerName: "Investment Amount",
        field: "investment_amt",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.investment_amt}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "Profit/Loss",
      //   field: "profit_loss_amt",
      //   width: 140,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params.data.profit_loss_amt}</span>
      //       </div>
      //     );
      //   },
      // },

      {
        headerName: "Number Of Lots",
        field: "no_of_lots",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.no_of_lots}</span>
            </div>
          );
        },
      },
      {
        headerName: "SL Type",
        field: "sl_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.sl_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.sl_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Trial Type",
        field: "trl_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.trl_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.trl_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "FT1 Type",
        field: "FT1_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.FT1_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.FT1_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "FT2 Type",
        field: "FT2_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.FT2_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.FT2_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "FT3 Type",
        field: "FT3_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.FT3_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.FT3_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "T1 Type",
        field: "t1_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.t1_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.t1_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "T2 Type",
        field: "t2_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.t2_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.t2_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "T3 Type",
        field: "t3_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.t3_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.t3_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "T4 Type",
        field: "t4_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.t4_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.t4_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "status ",
        field: "status",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          // return params.value === "Closed" ? (
          //   <div className="badge badge-pill badge-success">
          //     {params.data.tradeStatus}
          //   </div>
          // ) : params.value === "Closed" ? (
          //   <div className="badge badge-pill badge-danger">
          //     {params.data.tradeStatus}
          //   </div>
          // ) : null;

          return params?.data?.FT1_type == "true" ||
            params?.data?.FT2_type == "true" ||
            params?.data?.FT3_type == "true" ||
            params?.data?.t1_type == "true" ||
            params?.data?.t2_type == "true" ||
            params?.data?.t3_type == "true" ||
            params?.data?.t4_type == "true" ||
            params?.data?.trl_type == "true" ||
            params?.data?.t5_type == "true" ? (
            <div className="badge badge-pill badge-success">
              {params?.data?.status}
            </div>
          ) : params?.data?.sl_type == "true" ? (
            <div className="badge badge-pill badge-danger">
              {params?.data?.status}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Actions",
        field: "sortorder",
        // field: "transactions",
        width: 150,
        pinned: window.innerWidth > 992 ? "right" : false,

        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* <Eye
                className="mr-50"
                color="green"
                size={20}
                onClick={() =>
                  history.push(`/app/size/viewSize/${params.data._id}`)
                }
              /> */}
              {/* <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(`/app/trade/editAllTrade/${params.data._id}`)
                    }
                  />
                )}
              /> */}

              <Trash2
                size={20}
                color="red"
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  this.runthisfunction(params.data._id);
                  this.gridApi.updateRowData({ remove: selectedData });
                }}
              />
            </div>
          );
        },
      },
    ],
  };

  async componentDidMount() {
    await axiosConfig.get(`/completedTrade`).then((response) => {
      const rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    });
  }
  //   async runthisfunction(id) {
  //     console.log(id);
  //     await axiosConfig.get(`/dlt_alltrade/${id}`).then(
  //       (response) => {
  //         console.log(response);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      console.log(rowData),
      (
        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 sm="6" className="float-left">
                    Completed Trade List
                  </h1>
                </Col>
                {/* <Col className="pt-4">
                  <Route
                    render={({ history }) => (
                      <Button
                        className=" btn btn-success float-right"
                        onClick={() => history.push("/app/trade/addAllTrade")}
                      >
                        Add
                      </Button>
                    )}
                  />
                </Col> */}
              </Row>
              <CardBody>
                {this.state.rowData === null ? null : (
                  <div className="ag-theme-material w-100 my-2 ag-grid-table">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="mb-1">
                        <UncontrolledDropdown className="p-1 ag-dropdown">
                          <DropdownToggle tag="div">
                            {this.gridApi
                              ? this.state.currenPageSize
                              : "" * this.state.getPageSize -
                                (this.state.getPageSize - 1)}{" "}
                            -{" "}
                            {this.state.rowData.length -
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
                              : this.state.rowData.length}{" "}
                            of {this.state.rowData.length}
                            <ChevronDown className="ml-50" size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(20)}
                            >
                              20
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(50)}
                            >
                              50
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(100)}
                            >
                              100
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(134)}
                            >
                              134
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between mb-1">
                        <div className="table-input mr-1">
                          <Input
                            placeholder="search..."
                            onChange={(e) =>
                              this.updateSearchQuery(e.target.value)
                            }
                            value={this.state.value}
                          />
                        </div>
                        <div className="export-btn">
                          <Button.Ripple
                            color="primary"
                            onClick={() => this.gridApi.exportDataAsCsv()}
                          >
                            Export as CSV
                          </Button.Ripple>
                        </div>
                      </div>
                    </div>
                    <ContextLayout.Consumer>
                      {(context) => (
                        <AgGridReact
                          gridOptions={{}}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
                          floatingFilter={false}
                          pagination={true}
                          paginationPageSize={this.state.paginationPageSize}
                          pivotPanelShow="always"
                          enableRtl={context.state.direction === "rtl"}
                        />
                      )}
                    </ContextLayout.Consumer>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      )
    );
  }
}
export default CompletedTradeList;
