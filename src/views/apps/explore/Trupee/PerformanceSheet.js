import React from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { Route } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import { ContextLayout } from "../../../../utility/context/Layout";
import { ChevronDown, Trash2, Edit } from "react-feather";
import axiosConfig from "../../../../axiosConfig";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

class PerformanceSheet extends React.Component {
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
        width: 150,
        // filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },
      {
        headerName: "Month",
        field: "month",
        // filter: true,
        width: 250,
        // pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.month}</span>
            </div>
          );
        },
      },
      {
        headerName: "Year",
        field: "year",
        // filter: true,
        width: 250,
        // pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.year}</span>
            </div>
          );
        },
      },
      {
        headerName: "Discount Price",
        field: "dst_price",
        // filter: true,
        width: 250,
        
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.dst_price}</span>
            </div>
          );
        },
      },
      {
        headerName: "MRP",
        field: "mrp",
        // filter: true,
        width: 250,
        // pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.mrp}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "Start Date",
      //   field: "desc",
      //   // filter: true,
      //   width: 250,
      //   // pinned: window.innerWidth > 992 ? "left" : false,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params.data.desc}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "Expiry Date",
      //   field: "desc",
      //   // filter: true,
      //   width: 250,
      //   // pinned: window.innerWidth > 992 ? "left" : false,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params.data.desc}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "Status",
      //   field: "completed",
      //   // filter: completed,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return params.value === "Active" ? (
      //       <div className="badge badge-pill badge-success">
      //         {params.data.completed}
      //       </div>
      //     ) : params.value === "Inactive" ? (
      //       <div className="badge badge-pill badge-warning">
      //         {params.data.completed}
      //       </div>
      //     ) : null;
      //   },
      // },
      {
        headerName: "Actions",
        field: "sortorder",
        width: 250,
        // pinned: window.innerWidth > 992 ? "right" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(
                        `/app/explore/Trupee/editPS/${params.data._id}`
                      )
                    }
                  />
                )}
              />

              <Trash2
                className="mr-50"
                size="25px"
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
  componentDidMount() {
    axiosConfig
      .get(`/getPerSheet`)
      .then((response) => {
        let rowData = response.data.data;
        JSON.stringify(rowData);
        this.setState({ rowData });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/dltPerSheet/${id}`).then((response) => {
      console.log(response);
    });
  }

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
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card className="overflow-hidden agGrid-card">
            <Row className="m-2">
              <Col>
                <h1 sm="6" className="float-left">
                  Performance Sheet List
                </h1>
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className=" btn btn-success float-right"
                      onClick={() => history.push("/app/explore/Trupee/addPS")}
                    >
                      Add
                    </Button>
                  )}
                />
              </Col>
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
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
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
    );
  }
}
export default PerformanceSheet;
