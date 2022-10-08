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
import axiosConfig from "../../../../axiosConfig";
import moment from "moment";

import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown, Smartphone } from "react-feather";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import swal from "sweetalert";

class CategoryList extends React.Component {
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
                headerName: "Title",
                field: "title",
                width: 250,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex align-items-center cursor-pointer">
                            <span>{params.data.title}</span>
                        </div>
                    );
                },
            },

            {
                headerName: "Note",
                field: "desc",
                width: 250,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex  align-items-center cursor-pointer">
                            <span>{params.data.desc}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Upload Image",
                field: "image",
                // filter: true,
                width: 300,
                // pinned: window.innerWidth > 992 ? "left" : false,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex align-items-center cursor-pointer">
                            <span>{params.data.image}</span>
                        </div>
                    );
                },
            },





            {
                headerName: "Actions",
                field: "sortorder",
                width: 150,
                // pinned: window.innerWidth > 992 ? "right" : false,
                cellRendererFramework: (params) => {
                    return (
                        <div className="actions cursor-pointer">
                            {/* <Smartphone
                                className="mr-50"
                                size="25px"
                                color={params.data.status === "Active" ? "green" : "red"}
                                onClick={() => {
                                    let selectedData = this.gridApi.getSelectedRows();
                                    this.runthisfunctionEdit(params.data._id, selectedData);
                                }}
                            /> */}

                            <Route
                                render={({ history }) => (
                                    <Edit
                                        className="mr-50"
                                        size="25px"
                                        color="blue"
                                        onClick={() =>
                                            history.push(`/app/brahmaand/category/editCategory/${params.data._id}`)
                                        }
                                    />
                                )}
                            />

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
        await axiosConfig.get(`/getallCategory`).then((response) => {
            const rowData = response.data.data;
            console.log(rowData);
            this.setState({ rowData });
        });
    }
    // async runthisfunction(id) {
    //     console.log(id);
    //     await axiosConfig.get(`/dlt_alltrade/${id}`).then(
    //         (response) => {
    //             console.log(response);
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );
    // }

    async runthisfunctionEdit(id, selectedData) {
        console.log("@@selectedData", id, selectedData[0].FT1);
        //
        let status = selectedData[0].status === "Active" ? "Deactive" : "Active";
        let payload = {
            // expiryDate:selectedData[0].expiryDate,
            // script_type:selectedData[0].script_type,
            // fnoindex_scrpt_name:selectedData[0].fnoindex_scrpt_name,
            call_type: selectedData[0].call_type,
            active_value: selectedData[0].active_value,
            T1: selectedData[0].T1,
            T2: selectedData[0].T2,
            T3: selectedData[0].T3,
            trl: selectedData[0].trl,
            trl_type: selectedData[0].trl_type,
            FT1_type: selectedData[0].FT1_type,
            FT2_type: selectedData[0].FT2_type,
            FT3_type: selectedData[0].FT3_type,
            FT5_type: selectedData[0].FT5_type,
            qty: selectedData[0].qty,
            sl_type: selectedData[0].sl_type,
            // no_of_lots:selectedData[0].no_of_lots,
            trade_type: selectedData[0].trade_type,
            cstmMsg: selectedData[0].cstmMsg,
            status: status,
        };
        await axiosConfig
            .post(`/editalltrade/${id}`, payload)
            .then((response) => {
                console.log("sdjgsjdgjhgsdjh", response);
                swal("Success!", "Status " + status + " SuccessFull!", "success");
                // this.props.history.push("/app/trade/categorylist");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
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
            console.log(rowData),
            (
                <Row className="app-user-list">
                    <Col sm="12"></Col>
                    <Col sm="12">
                        <Card>
                            <Row className="m-2">
                                <Col>
                                    <h1 sm="6" className="float-left">
                                        Category List
                                    </h1>
                                </Col>
                                <Col className="pt-4">
                                    <Route
                                        render={({ history }) => (
                                            <Button
                                                className=" btn btn-success float-right"
                                                onClick={() => history.push("/app/brahmaand/category/addCategory")}
                                            >
                                                Add Category
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
export default CategoryList;
